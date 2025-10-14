import Link from "next/link";
import Image from "next/image";
import {Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button} from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/car.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                  <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/tophat.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 Advanced React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                    Experienced Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/dog.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 Very Advanced React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                    Highly Experienced Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/ship.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1210 Professional Development</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                    Hopefully get a co-op
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/thimble.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4550 Web Development</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                    Hey that's us!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/boot.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4321 Advanced HTML+CSS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                    Make it look good!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/iron.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5432 Master React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                    Oh you thought you were done?  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
