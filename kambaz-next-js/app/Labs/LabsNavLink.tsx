"use client";
import { ReactNode } from "react";
import { NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LabsNavLink({ href, children } : { href: string, children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <NavLink as={Link} href={href} active={isActive}>{children}</NavLink>
  );
}