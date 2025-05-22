import React from "react";
import Image from "next/image";
import styles from "./skill-card.module.scss";
import { IconType } from "react-icons"; // Add this import
import { FaClock } from "react-icons/fa";
import {
  FaTable,
  FaDatabase,
  FaRobot,
  FaEye,
  FaLock,
  FaChartLine,
  FaBrain,
  FaUserShield,
  FaLanguage,
  FaStore,
  FaChartBar,
  FaCogs,
  FaProjectDiagram,
  FaUsersCog,
  FaMicrochip,
  FaInfinity,
  FaCodeBranch,
  FaLaptopCode,
} from "react-icons/fa";

type Props = {
  title: string;
  duration: string;
  imageUrl?: string;
  Icon?: string;
};
const iconMap: { [key: string]: IconType } = {
  tableau: FaTable,
  datascience: FaDatabase,
  nocode: FaRobot,
  cybersecurity: FaLock,
  predicitiveanalytics: FaChartBar,
  mlbootcamp: FaBrain,
  scoreboard: FaChartLine,
  nlp: FaLanguage,
  apps: FaEye,
  cv: FaUserShield,
  retailindustry: FaStore,
  workshop: FaProjectDiagram,
  llm: FaBrain,
  blockchain: FaCodeBranch,
  digital : FaDatabase,
  csuite: FaCogs,
  bigdata: FaDatabase,
  llmops: FaBrain,
  analytics: FaChartLine,
  leadership: FaUsersCog,
  datamanagement: FaCogs,
  ai: FaMicrochip,
  aiagents: FaInfinity, 
  advdata: FaLaptopCode,  
};

export default function SkillCard({ title, duration, imageUrl, Icon }: Props) {
  const MappedIcon = Icon ? iconMap[Icon] : undefined;
  return (
    <div className={styles.card}>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt={title} width={400} height={250} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
      {MappedIcon && <MappedIcon className={styles.titleIcon} />}        
      <h3 className={styles.title}>{title}</h3>
        <div className={styles.durationWrapper}>
        <FaClock className={styles.durationIcon} />
        <p className={styles.duration}>{duration}</p>
        </div>
      </div>
    </div>
  );
}
