import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule }:
  { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }
) {
  return (
    <div className="float-end">
      <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)} />
      <FaTrash className="text-danger me-3 mb-1" onClick={() => deleteModule(moduleId)}/>
      <GreenCheckmark />
      <FaPlus className="me-2" />
      <IoEllipsisVertical />
    </div>
  );
}