"use client";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
export default function Modules() {
  const { cid }: { cid: string } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid);
    dispatch(setModules(modules));
  };
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const mod = await client.createModuleForCourse(cid, newModule);
    dispatch(setModules([...modules, mod]));
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(cid, moduleId);
    dispatch(setModules(modules.filter((m) => m._id !== moduleId)));
  };
  const onUpdateModule = async (module: {
    _id: string;
    editing: boolean;
    lessons: {
        _id: string;
        name: string;
        description: string;
        module: string;
    }[];
    name: string;
    course: string;
    description: string;
  }) => {
    await client.updateModule(cid, module);
    const newModules = modules.map((m) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="me-3">
      { isFaculty &&
        (<div>
          <ModulesControls setModuleName={setModuleName}
            moduleName={moduleName}
            addModule={onCreateModuleForCourse} /><br /><br /><br /><br /></div>)}
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              { module.editing && (
                <FormControl className="w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          onUpdateModule({ ...module, editing: false });
                        }
                      }}
                      defaultValue={module.name}/>
              )}
              { isFaculty && (<ModuleControlButtons moduleId={module._id}
                                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                                editModule={(moduleId) => dispatch(editModule(moduleId))}/>)}
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical />
                    {lesson.name}
                    {isFaculty && (<LessonControlButtons />)}
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
);}
