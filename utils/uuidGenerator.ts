export const generateUUID = `
  MD5(
    CAST(
      CONCAT(
        CAST(current_timestamp AS VARCHAR),
        CAST(rand() * 1000000 AS VARCHAR),
        CAST(row_number() OVER () AS VARCHAR)
      ) AS VARBINARY
    )
  )
`;
