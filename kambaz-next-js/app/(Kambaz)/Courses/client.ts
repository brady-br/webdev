import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    img: string;
    description: string;
  }) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course:
  {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    img: string;
    description: string;
  }) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data;
};

export const createModuleForCourse = async (courseId: string, module: {
    name: string, course: string
  }) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const updateModule = async (module: {
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
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};
