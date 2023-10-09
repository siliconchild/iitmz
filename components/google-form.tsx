"use client";
import { usePathname } from "next/navigation";

export default function GoogleForm() {
  const pathname = usePathname();
  if (pathname === "/testimonials") {
    return (
      <center>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScEjJBhTLHZCDUQzyF6bJQPr6cNxswlzuXorbXHMcih2kFLeQ/viewform?embedded=true"
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
