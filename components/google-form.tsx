"use client";
import { usePathname } from "next/navigation";

type GoogleFormProps = {
  id: string;
  pathname: string;
};

export default function GoogleForm({ id, pathname }: GoogleFormProps) {
  const URLPathname = usePathname();
  if (URLPathname === pathname) {
    return (
      <center>
        <iframe
          src={`https://docs.google.com/forms/d/e/${id}/viewform?embedded=true`}
          style={{
            width: "100%",
            height: 1240,
            border: 0,
            marginBottom: "7rem",
          }}
        >
          Loading…
        </iframe>
      </center>
    );
  } else return null;
}
