"use client";
import { Nav, NavItem } from "react-bootstrap";
import LabsNavLink from "./LabsNavLink";
export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <LabsNavLink href="/Labs">
          Labs </LabsNavLink> </NavItem>
      <NavItem>
        <LabsNavLink href="/Labs/Lab1">
          Lab 1 </LabsNavLink> </NavItem>
      <NavItem>
        <LabsNavLink href="/Labs/Lab2">
          Lab 2 </LabsNavLink> </NavItem>
      <NavItem>
        <LabsNavLink href="/Labs/Lab3">
          Lab 3 </LabsNavLink> </NavItem>
      <NavItem>
        <LabsNavLink href="/Labs/Lab4">
          Lab 4 </LabsNavLink> </NavItem>
      <NavItem>
        <LabsNavLink href="/">
          Kambaz </LabsNavLink> </NavItem>
      <NavItem>
        <LabsNavLink href="https://github.com/brady-br/webdev/tree/a4">My GitHub</LabsNavLink></NavItem>
    </Nav>
 );}
