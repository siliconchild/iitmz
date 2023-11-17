// FileDropzone.tsx
import React from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./form.module.css";
import Image from "next/image";

// Define a type for the file state
type FileState = {
  files: File[];
  previews: string[];
};

// Define a type for the props expected by the FileDropzone component
type FileDropzoneProps = {
  name: string;
  onDrop: (acceptedFiles: File[], name: string) => void;
  fileStates: { [fieldName: string]: FileState };
  removeFile: (fieldName: string, index: number) => void;
};

const FileDropzone: React.FC<FileDropzoneProps> = ({
  name,
  onDrop,
  fileStates,
  removeFile,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, name),
    multiple: false,
  });

  const previews = fileStates[name]?.previews || [];

  return (
    <div className={styles.field}>
      <label htmlFor={name}>File upload (Upload only PDF)</label>
      {previews.length > 0 ? (
        <aside className={styles.thumbnails}>
          {previews.map((preview, index) => (
            <div key={index} className={styles.thumbnail}>
              <Image
                src={preview}
                alt={`Preview ${index}`}
                width={150}
                height={150}
                style={{ objectFit: "contain" }}
              />
              <AiOutlineCloseCircle
                className={styles.closeIcon}
                onClick={() => removeFile(name, index)}
              />
            </div>
          ))}
        </aside>
      ) : (
        <div {...getRootProps({ className: styles.dropzone })}>
          <input {...getInputProps()} name={name} id={name} />
          <p>
            Drag &lsquo;n&rsquo; drop the file here, or click to pick a file
          </p>
        </div>
      )}
    </div>
  );
};

export default FileDropzone;
