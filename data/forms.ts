import { FormField } from "@/components/form";
import { FormMeta } from "@/components/form";

export const testimonialForm: FormField[] = [
  { type: "text", name: "Name", required: true },
  {
    type: "select",
    name: "Are you currently enrolled or offered admission at IITM Zanzibar?",
    required: true,
    options: ["Yes", "No"],
  },
  {
    type: "select",
    name: "Program",
    required: true,
    options: ["BS DS & AI", "MTech DS & AI"],
  },
  {
    type: "text",
    name: "Nationality",
    required: true,
  },
  {
    type: "textarea",
    name: "Enter your query/request here",
    required: true,
  },
  { type: "email", name: "Email ID", required: true },
  { type: "text", name: "Phone Number", required: true },
];

export const testimonialFormMeta: FormMeta = {
  title: "Are you a current or prospective student of IIT Madras Zanzibar?",
  spreadSheetId: "1qg1GYTWM5N6skw3H_Ulow_0EyZolRMBmKnh-aZDrnOo",
};
