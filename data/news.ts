import sql, { raw } from "sql-template-tag";
import { fetchDataFromAthena } from "@/lib/athenaClient";
import { generateUUID } from "@/utils/uuidGenerator";

export interface News {
  title: string;
  content: string;
  img: string;
  linkURL: string;
  uuid: string;
}

const generateQuery = () => {
  return sql`
    SELECT
      "title" as title,
      "content" as content,
      "poster" as img,
      "know more" as linkURL,
      ${raw(generateUUID)} as uuid
    FROM "news"
    WHERE "title" IS NOT NULL
    AND "content" IS NOT NULL
    AND "poster" IS NOT NULL
  `;
};

export const getAllNews = async () => {
  try {
    const query = generateQuery();
    return await fetchDataFromAthena<News>(query.text);
  } catch (err) {
    console.error("FAILED TO FETCH ALL News DATA", err);
    throw err;
  }
};
