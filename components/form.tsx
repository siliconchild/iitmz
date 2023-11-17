"use client";
import React, { useState, useCallback, HTMLInputTypeAttribute } from "react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import Select, {
  CSSObjectWithLabel,
  ControlProps,
  StylesConfig,
} from "react-select";
import Button from "./button";
import styles from "./form.module.css";
import SpinnerIcon from "./spinner";
import FileDropzone from "./dropzone";
import pdfPreview from "@/assets/pdfPreview";
import { FaRegCircleCheck } from "react-icons/fa6";

type OptionType = { value: string; label: string; isDisabled?: boolean };

const reactSelectStyles: StylesConfig<OptionType> = {
  control: (provided: CSSObjectWithLabel, state: ControlProps<OptionType>) => ({
    ...provided,
    backgroundColor: "#ffffff",
    borderColor: state.isFocused ? "#4f46e5" : "#d1d5db",
    borderRadius: "0.375rem",
    padding: "0",
    margin: "0",
    fontSize: "1.45rem",
    boxShadow: state.isFocused ? "0 0 0 1px #4f46e5" : "none",
    "&:hover": { borderColor: "#4f46e5" },
  }),
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: "1rem",
  }),
  option: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontSize: "1.45rem",
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    borderRadius: "0.5rem",
    backgroundColor: "#ffffff",
  }),
};

export type FormMeta = {
  title: string;
  spreadSheetId: string;
};

export type FormFieldBase = {
  name: string;
  required?: boolean;
};

export type InputField = FormFieldBase & {
  type: HTMLInputTypeAttribute;
};

export type SelectField = FormFieldBase & {
  type: "select";
  searchable?: boolean;
  options: string[];
};

export type ConditionalField = {
  conditionalOn: {
    fieldName: string;
    fieldValue: string;
  };
};

export type FormField =
  | InputField
  | SelectField
  | (InputField & ConditionalField)
  | (SelectField & ConditionalField);

type FormProps = {
  formFields: FormField[];
  formMetaData: FormMeta;
};

export default function Form({ formFields, formMetaData }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuceess, setIsSucess] = useState(false);
  const [fileStates, setFileStates] = useState<{
    [fieldName: string]: { files: File[]; previews: string[] };
  }>({});

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm();

  //Code that checks if a conditional field should be displayed

  // Watch for Changes
  const allValues = watch();

  function isConditionalField(
    field: FormField
  ): field is
    | (InputField & ConditionalField)
    | (SelectField & ConditionalField) {
    return "conditionalOn" in field;
  }
  const shouldDisplayField = (field: FormField) => {
    if (!isConditionalField(field)) return true;
    const { fieldName, fieldValue } = field.conditionalOn;
    const dependentFieldValue = allValues[encodeURIComponent(fieldName)];
    return dependentFieldValue === fieldValue;
  };

  const onDrop = useCallback((acceptedFiles: File[], fieldName: string) => {
    const newPreviews = acceptedFiles.map((file) => {
      const preview =
        file.type === "application/pdf"
          ? pdfPreview
          : URL.createObjectURL(file);
      return { file, preview };
    });

    setFileStates((prevState) => ({
      ...prevState,
      [fieldName]: {
        files: [
          ...(prevState[fieldName]?.files || []),
          ...newPreviews.map((fwp) => fwp.file),
        ],
        previews: [
          ...(prevState[fieldName]?.previews || []),
          ...newPreviews.map((fwp) => fwp.preview),
        ],
      },
    }));
  }, []);

  const removeFile = useCallback((fieldName: string, index: number) => {
    setFileStates((prevState) => {
      const newState = { ...prevState };
      newState[fieldName].files.splice(index, 1);
      newState[fieldName].previews.splice(index, 1);
      if (newState[fieldName].files.length === 0) {
        delete newState[fieldName]; // Remove the field if there are no more files
      }
      return newState;
    });
  }, []);

  const submitHandler = async (data: FieldValues) => {
    setIsSubmitting(true);
    const formData = new FormData();

    const files = formFields.filter(({ type }: FormField) => type === "file");
    for (const file of files) {
      let name = encodeURIComponent(file.name);
      formData.append("files", fileStates[name].files[0]);
      data = { ...data, [name]: fileStates[name].files[0].name };
    }

    formData.append("form", JSON.stringify(data));

    try {
      const response = await fetch("/api/form-submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      setIsSubmitting(false);
      setFileStates({});
      reset();
      setIsSucess(true);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      {isSuceess ? (
        <div className={styles.success}>
          <FaRegCircleCheck />
          <p>Form Submitted Sucessfully</p>
        </div>
      ) : !isError ? (
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <h3>{formMetaData.title}</h3>
          {formFields.map((field) => {
            const name = encodeURIComponent(field.name);
            const shouldDisplay = shouldDisplayField(field);
            if (!shouldDisplay) return null;
            return (
              <div className={`${styles.field}`} key={field.name}>
                <label htmlFor={name}>{field.name}</label>
                {field.type === "textarea" ? (
                  <textarea
                    className={styles.textarea}
                    id={name}
                    rows={8}
                    {...register(name, { required: field.required })}
                  />
                ) : field.type === "select" && "options" in field ? (
                  <Controller
                    name={name}
                    control={control}
                    rules={{ required: field.required }}
                    render={({ field: { onChange, value, ref } }) => (
                      <Select
                        ref={ref}
                        styles={reactSelectStyles}
                        options={field.options.map((option) => ({
                          value: option,
                          label: option,
                        }))}
                        value={
                          value && value !== ""
                            ? { value: value, label: value }
                            : null
                        }
                        onChange={(newValue: any) => {
                          onChange(newValue ? newValue.value : null);
                        }}
                        isSearchable={field.searchable ?? false}
                      />
                    )}
                  />
                ) : field.type === "file" ? (
                  // <Controller
                  // name={name}
                  // control={control}
                  // rules={{ required: field.required }}
                  // render={({ field: { onChange, value, ref, ...field } }) => (
                  <FileDropzone
                    // ref={ref}
                    key={field.name}
                    name={name}
                    onDrop={onDrop}
                    fileStates={fileStates}
                    removeFile={removeFile}
                  />
                ) : (
                  //  )}
                  // />
                  <input
                    id={name}
                    type={field.type}
                    className={styles.input}
                    {...register(name, { required: field.required })}
                  />
                )}
              </div>
            );
          })}

          {/* use role="alert" to announce the error message */}
          {errors.name && errors.name.type === "required" && (
            <span role="alert">This is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span role="alert">Max length exceeded</span>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <SpinnerIcon />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      ) : isError ? (
        <p>Something went wrong.</p>
      ) : null}
    </div>
  );
}
