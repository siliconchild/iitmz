import { NextResponse, NextRequest } from "next/server";
const { google } = require("googleapis");
import { Readable } from "stream";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
// import { v4 as uuidv4 } from "uuid";

const DRIVE_PARENT_FOLDER = "1dKTu4UD3DPGDq8D7tHHCWE0xzUo5hJZK";
const DOC_ID = "1qg1GYTWM5N6skw3H_Ulow_0EyZolRMBmKnh-aZDrnOo";

const createJWT = (): JWT => {
  return new JWT({
    email: process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_KEY,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
    ],
  });
};

const uploadFile = async (file: File, jwt: JWT, docName: string) => {
  const drive = google.drive({ version: "v3", auth: jwt });

  // Step 1: Check if the folder exists
  const folderQuery = `mimeType = 'application/vnd.google-apps.folder' and name = '${docName}' and '${DRIVE_PARENT_FOLDER}' in parents and trashed = false`;
  const folderSearch = await drive.files.list({
    q: folderQuery,
    fields: "files(id, name)",
    spaces: "drive",
  });

  let folderId =
    folderSearch.data.files.length > 0 ? folderSearch.data.files[0].id : null;

  // Step 2: Create the folder if it doesn't exist
  if (!folderId) {
    const folderMetadata = {
      name: docName,
      mimeType: "application/vnd.google-apps.folder",
      parents: [DRIVE_PARENT_FOLDER],
    };
    const folder = await drive.files.create({
      resource: folderMetadata,
      fields: "id",
    });
    folderId = folder.data.id;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const readableStream = new Readable();
  readableStream.push(buffer);
  readableStream.push(null);

  const fileMetadata = {
    name: file.name,
    parents: [folderId],
  };

  const media = {
    mimeType: file.type,
    body: readableStream,
  };

  const uploadedFile = await drive.files.create({
    resource: fileMetadata,
    media,
    supportsAllDrives: true,
  });

  const uploadedFileLink = `https://drive.google.com/open?id=${uploadedFile.data.id}`;
  return uploadedFileLink;
};

const getFormattedCurrentDateTime = (): string => {
  const currentDate = new Date();
  return `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
};

type DecodedObject = {
  [key: string]: string;
};

const verifyAndPrepareUploadFields = (
  headers: string[],
  obj: DecodedObject
): DecodedObject => {
  const decodedObj: DecodedObject = {};

  headers.forEach((header) => {
    const encodedKey = encodeURIComponent(header);
    if (obj.hasOwnProperty(encodedKey)) {
      decodedObj[header] = obj[encodedKey];
    }
  });

  return decodedObj;
};

export async function GET(req: NextRequest) {
  return NextResponse.json({
    status: 405,
    message: "Not Allowed",
  });
}

export async function POST(req: NextRequest) {
  try {
    const jwt = createJWT();
    await jwt.authorize();

    const formData = await req.formData();
    const formString = formData.get("form");
    if (typeof formString !== "string") throw Error("No Form Data");
    const form = JSON.parse(formString!);
    const files: File[] = formData.getAll("files") as File[];

    const doc = new GoogleSpreadsheet(DOC_ID, jwt);
    await doc.loadInfo();
    const docName = doc.title;
    const sheet = doc.sheetsByIndex[0];

    //Process files in parallel
    const fileUploadPromises = files.map((file) => {
      const name = Object.keys(form).find((key) => form[key] === file.name);
      if (!name) throw Error("File Match Not Found");
      return uploadFile(file, jwt, docName).then((url) => {
        form[name] = url;
      });
    });

    if (files.length !== 0){
        await Promise.all(fileUploadPromises);
    }



    const formWithTimeStampAndUUID = {
      // ID: uuidv4(),
      Timestamp: getFormattedCurrentDateTime(),
      ...form,
    };

    await sheet.loadHeaderRow();

    const uploadFields = verifyAndPrepareUploadFields(
      sheet.headerValues,
      formWithTimeStampAndUUID
    );

    const larryRow = await sheet.addRow(uploadFields);

    return NextResponse.json({
      message: "Success",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: JSON.stringify(error) },
      {
        status: 500,
      }
    );
  }
}
