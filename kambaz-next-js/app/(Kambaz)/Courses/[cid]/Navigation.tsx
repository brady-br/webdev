"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const rest = pathname.substring(pathname.indexOf("Courses/") + 8);
  const endOfCid = rest.indexOf("/");
  const page = rest.substring(endOfCid + 1);
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link href={`/Courses/${cid}/${link === "People" ? link + "/Table" : link}`} key={link} id={`wd-course-${link.toLowerCase()}-link`}
        className={`list-group-item ${page.startsWith(link) ? "active" : "text-danger"} border-0`}>{link}</Link>
      ))}
    </div>
);}
