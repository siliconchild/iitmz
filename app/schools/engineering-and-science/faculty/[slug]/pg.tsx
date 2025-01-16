import { notFound } from "next/navigation";
import { MDXContent } from "@/component/mdx-content";
import { programs } from "#site/content";
import styles from "@/app/[page]/page.module.scss";
import AboutSection from "@/component/about/AboutSection2";
import { Faq, FaqItem } from "@/component/faq/Faq";
import PgmContact from "@/component/pgm-contact/PgmContact";
import YouTubePlayer from "@/component/video/youtubePlayer";
import VideoWrapper from "@/component/video/videoWrapper";
import { ProgramSubCard } from "@/component/program-card/program-sub-card";
import { FaArrowRight, FaCheck, FaCheckCircle } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

function getProgram(type: string, program: string) {
  return programs.find((item) => item.slug === `/programs/${type}/${program}`);
}

const programPageComponents = {
  AboutSection,
  PgmContact,
  FaArrowRight,
  FaCheckCircle,
  IoCalendarOutline,
  FaCheck,
  Faq,
  FaqItem,
  YouTubePlayer,
  VideoWrapper,
  ProgramSubCard,
} as const;

export function generateStaticParams() {
  return programs.map((program) => {
    const [_first, _second, type, slug] = program.slug.split("/");
    return { type, program: slug };
  });
}

export default async function PagePage({
  params,
}: {
  params: Promise<{
    type: string;
    program: string;
  }>;
}) {
  const { type, program } = await params;
  const page = getProgram(type, program);

  if (!page || !page.body) notFound();

  return (
    <div className={styles.programContent}>
      <div className="container">
        {page.body && (
          <MDXContent
            code={page.body}
            components={programPageComponents}
            frontmatter={{
              title: page.title,
              cover: page.cover,
            }}
          />
        )}
      </div>
    </div>
  );
}
