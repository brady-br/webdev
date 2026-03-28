"use client"
import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: "0",
  });
  const [module, setModule] = useState({
    id: "123", name: "NodeJS Module",
    description: "Working with NodeJS",
    course: "CS4550"
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score </a>
      <FormControl className="w-75" id="wd-assignment-score" type="number"
        value={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })}/>
      <hr />
      <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed </a>
      <Form.Check id="wd-assignment-completed"
        label="Completed" defaultChecked={assignment.completed} onChange={(e) =>
          setAssignment({...assignment, completed: !assignment.completed})}/>
      <br/><hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Retrieving Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Module Name</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
      <h4>Modifying Module Name</h4>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${HTTP_SERVER}/lab5/module/name/${module.name}`}>
        Update Name
      </a>
      <FormControl className="w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
          setModule({...module, name: e.target.value})}/>
      <hr/>
      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${HTTP_SERVER}/lab5/module/description/${module.description}`}>
        Update Description
      </a>
      <FormControl as="textarea" className="w-50" id="wd-module-description"
        rows={3}
        value={module.description} onChange={(e) => {
          setModule({...module, description: e.target.value})}}/>
      <hr />
    </div>
);}
