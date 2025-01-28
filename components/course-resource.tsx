import Link from "next/link";
import Button from "./button";
import styles from "./course-resource.module.scss";
import {MdOutlineFileDownload} from "react-icons/md";
import { ReactElement } from "react";

type ResourceProps = {
    title: string;
    link: string;
  };
  
  export function Resource({ title,link }: ResourceProps) {
    return (
        <div className={styles.downloadableFiles}>
               <div key={title}>
                      <Link target="_blank" href={link}>
                        <Button kind="SECONDARY_BLACK">
                          <MdOutlineFileDownload />
                          {title}
                        </Button>
                      </Link>
                    </div>
        </div>            
    );
  }
  
  type CourseResourcesProps = {
    children: ReactElement<typeof Resource> | ReactElement<typeof Resource>[];
  };
  
  export function CourseResources({ children }: CourseResourcesProps) {
    return (
      <div>
        {children}
      </div>
    );
  }
  