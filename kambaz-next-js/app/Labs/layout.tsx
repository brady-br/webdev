import { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import TOC from "./TOC";
import LabsHeader from "./LabsHeader";

export default function LabsLayout({
 children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Row>
      <Col valign="top" xs={3} sm={2} xl={1}>
        <TOC />
      </Col>
      <Col valign="top" xs={8} sm={9} xl={10}>
        <LabsHeader />
        {children}
      </Col>
    </Row>
);}
