"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: { _id: string, name: string } | undefined; }) {
  const pathname = usePathname();
  const splitPath = pathname.split("/");
  return (
    <span>
      {course?.name} &gt; {splitPath[splitPath.findIndex((route) => route === course?._id) + 1]}
    </span>
  );
}
