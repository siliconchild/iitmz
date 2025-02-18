"use strict";
import { AthenaExpress } from "athena-express-plus";
import { S3Client } from "@aws-sdk/client-s3";
import { AthenaClient } from "@aws-sdk/client-athena";
// import {getSecrets} from "./getSecrets";

const setupAWSConfig = async () => {
  // const [AWS_ACCESS_KEY_ID_SSM, AWS_SECRET_ACCESS_KEY_SSM] = await Promise.all([
  //   getSecrets("AWS_ACCESS_KEY_ID"),
  //   getSecrets("AWS_SECRET_ACCESS_KEY"),
  // ]);
  // const AWS_ACCESS_KEY_ID =
  //   AWS_ACCESS_KEY_ID_SSM || process.env.AWS_ACCESS_KEY_ID;
  // const AWS_SECRET_ACCESS_KEY =
  //   AWS_SECRET_ACCESS_KEY_SSM || process.env.AWS_SECRET_ACCESS_KEY;

  const { ATHENA_ACCESS_KEY, ATHENA_ACCESS_SECRET } = process.env;

  if (!ATHENA_ACCESS_KEY || !ATHENA_ACCESS_SECRET) {
    throw new Error("AWS credentials not provided");
  }

  return {
    region: "ap-south-1",
    credentials: {
      accessKeyId: ATHENA_ACCESS_KEY,
      secretAccessKey: ATHENA_ACCESS_SECRET,
    },
  };
};

// Set up AWS services with programmatic access credentials
const initializeServices = async () => {
  const awsConfig = await setupAWSConfig();

  const athena = new AthenaClient(awsConfig);
  const s3 = new S3Client(awsConfig);

  const athenaExpressConfig = {
    athena,
    s3,
    s3Bucket: "s3://oge-athena-queries",
    getStats: true,
  };

  return new AthenaExpress(athenaExpressConfig);
};

// Database name is constant
const DATABASE_NAME = "default";

// Function to execute queries
const executeQuery = async (sql: string) => {
  const athenaExpress = await initializeServices();
  let queryConfig = {
    sql: sql,
    db: DATABASE_NAME,
  };

  try {
    const results = await athenaExpress.query(queryConfig);
    return results;
  } catch (error) {
    console.error("Error performing query with Athena:", error);
    throw error;
  }
};

export const fetchDataFromAthena = async function <T>(query: string): Promise<T[] | null> {
  try {
    const data = await executeQuery(query);
    return data.Items as unknown as T[];
  } catch (err) {
    console.log("FAILED TO FETCH SHEET DATA", err);
    return null;
  }
};
