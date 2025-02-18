import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import styles from "./page.module.scss";
import { Papers, Paper } from "@/components/papers";
import { Books, Book } from "@/components/book";
import Img from "@/components/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { RiAwardLine } from "react-icons/ri";
import Link from "next/link";
import { faculty } from "#site/content";

function getFaculty(facultySlug: string) {
  return faculty.find((item) => item.slug === facultySlug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
    const { slug } = await params;
  const facultyMember = faculty.find(
    (facultyMember) => facultyMember.slug === slug
  );

  return {
    title: `${facultyMember?.name} | Faculty`,
    description: facultyMember?.metadesc,
    alternates: {
      canonical: `schools/engineering-and-science/faculty/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return faculty.map((item) => ({ slug: item.slug }));
}

const facultyPageComponents = { Papers, Paper, Books, Book } as const;

export default async function PagePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const facultyMember = getFaculty(slug);

  if (!facultyMember || !facultyMember.body) notFound();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.profile}>
          <Img
            src={`/${facultyMember.img}`}
            width={200}
            height={200}
            alt={`Photo of ${facultyMember.name}`}
          />

          <h1>{facultyMember.name}</h1>
          <h3>{facultyMember.title}</h3>
          {facultyMember.subtitle && <h3>{facultyMember.subtitle}</h3>}
          <p>
            <AiOutlineMail />
            <Link href={`mailto:${facultyMember.email}`}>{facultyMember.email}</Link>
          </p>
          {facultyMember.alternateEmail && (
            <p>
              <AiOutlineMail />
              <Link href={`mailto:${facultyMember.alternateEmail}`}>{facultyMember.alternateEmail}</Link>
            </p>
          )}
          {facultyMember.website && (
            <p className={styles.website}>
              <BsGlobeCentralSouthAsia />
              <a target="_blank" href={facultyMember.website}>
                website
              </a>
            </p>
          )}
          {facultyMember.qualification && (
            <div className={styles.qualification}>
              <h2>Educational Qualifications</h2>
              {facultyMember.qualification.map((qualification) => (
                <div key={qualification.title}>
                  <h3>
                    {qualification.title} <span>{qualification.year}</span>
                  </h3>
                  <p>{qualification.course}</p>
                  <p>{qualification.institution}</p>
                </div>
              ))}
            </div>
          )}
          {facultyMember.awards && (
            <div className={styles.awards}>
              <h2>Awards</h2>
              <ul>
                {facultyMember.awards.map((award) => (
                  <li key={award.title}>
                    <RiAwardLine />
                    <div>
                      <p>{award.title}</p>
                      <p>{award.subtitle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.main}>
          {facultyMember.body && (
            <MDXContent
              code={facultyMember.body}
              components={facultyPageComponents}
              frontmatter={{
                title: facultyMember.title,
                cover: facultyMember.img,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
