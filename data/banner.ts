import sql, { raw } from "sql-template-tag";
import { fetchDataFromAthena } from "@/lib/athenaClient";
import { generateUUID } from "@/utils/uuidGenerator";

export interface Banner {
  mdTitle: string;
  lgTitle: string;
  smTitle: string;
  img: string;
  linkText: string;
  linkURL: string;
  uuid: string;
}

const generateQuery = () => {
  return sql`
    SELECT
      "medium title" as mdTitle,
      "large title" as lgTitle,
      "small title" as smTitle,
      image as img,
      "link text" as linkText,
      "link url" as linkURL,
      ${raw(generateUUID)} as uuid
    FROM "banner"
    WHERE image IS NOT NULL
  `;
};

export const getAllBanners = async () => {
  try {
    const query = generateQuery();
    return await fetchDataFromAthena<Banner>(query.text);
  } catch (err) {
    console.error("FAILED TO FETCH ALL Banner DATA", err);
    throw err;
  }
};

export const defaultBanner: Banner[] = [
  {
    mdTitle: "Welcome To",
    lgTitle: "IITM Zanzibar",
    smTitle: "",
    img: "/drive-resources/1H_DKbYDFXBXpXutuLAuX8N9Cq22P6coaPZcbXtmcTZI/Banner/1TgseycIXop4cAqRKAOnRcHFxdg42EjYQ.jpeg",
    linkText: "",
    linkURL: "",
    uuid: "d6480c9c-f7df-48d0-94d1-f5a133a74dac",
  },
];
