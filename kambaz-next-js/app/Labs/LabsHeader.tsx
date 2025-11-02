"use client";
import { Nav, NavItem } from "react-bootstrap";
import { usePathname } from "next/navigation";
import LabsNavLink from "./LabsNavLink";
export default function LabsHeader() {
  const pathname = usePathname();
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <Nav variant="pills">
        <NavItem>
          <LabsNavLink href="/Labs/Lab1">
            Lab 1 </LabsNavLink>
        </NavItem>
        <NavItem>
          <LabsNavLink href="/Labs/Lab2">
            Lab 2 </LabsNavLink>
        </NavItem>
        <NavItem>
          <LabsNavLink href="/Labs/Lab3">
            Lab 3 </LabsNavLink>
        </NavItem>
        <NavItem>
          <LabsNavLink href="/Labs/Lab4">
            Lab 4 </LabsNavLink>
        </NavItem>
      </Nav>
    </div>
);}
