import sql, { raw } from "sql-template-tag";
import { fetchDataFromAthena } from "@/lib/athenaClient";
import { generateUUID } from "@/utils/uuidGenerator";

export interface Announcement {
  activeTill: string;
  content: string;
  linkText: string;
  linkUrl: string;
  uuid: string;
}

export type AnnouncementsArray = Announcement[];

const generateQuery = () => {
  return sql`
    SELECT
      "active till" as activeTill,
      "content" as content,
      "link text" as linkText,
      "link url" as linkUrl,
      ${raw(generateUUID)} as uuid
    FROM "ticker"
    WHERE "active till" IS NOT NULL
  `;
};

export const getAllAnnouncements = async () => {
  try {
    const query = generateQuery();
    return await fetchDataFromAthena<Announcement>(query.text);
  } catch (err) {
    console.error("FAILED TO FETCH ALL Announcements DATA", err);
    throw err;
  }
};
