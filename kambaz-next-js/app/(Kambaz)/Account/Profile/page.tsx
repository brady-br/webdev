"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, updateUser } from "../reducer";
import * as client from "../client";
import { RootState } from "../../store";
import { Button, FormControl } from "react-bootstrap";
export default function Profile() {
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);
 const updateProfile = async () => {
   const updatedProfile = await client.updateUser(currentUser);
   dispatch(setCurrentUser(updatedProfile));
 };
 const fetchProfile = () => {
   if (!currentUser) return redirect("/Account/Signin");
 };
 const signout = async () => {
   await client.signout();
   dispatch(setCurrentUser(null));
   redirect("/Account/Signin");
 };
 useEffect(() => {
   fetchProfile();
 });
 return (
   <div className="wd-profile-screen">
     <h3>Profile</h3>
     {currentUser && (
       <div>
         <FormControl id="wd-username" className="mb-2"
           defaultValue={currentUser.username}
           onChange={(e) => dispatch(updateUser({ ...currentUser, username: e.target.value })) } />
         <FormControl id="wd-password" className="mb-2"
           defaultValue={currentUser.password}
           onChange={(e) => dispatch(updateUser({ ...currentUser, password: e.target.value })) } />
         <FormControl id="wd-firstname" className="mb-2"
           defaultValue={currentUser.firstName}
           onChange={(e) => dispatch(updateUser({ ...currentUser, firstName: e.target.value })) } />
         <FormControl id="wd-lastname" className="mb-2"
           defaultValue={currentUser.lastName}
           onChange={(e) => dispatch(updateUser({ ...currentUser, lastName: e.target.value })) } />
         <FormControl id="wd-dob" className="mb-2" type="date"
           defaultValue={currentUser.dob}
           onChange={(e) => dispatch(updateUser({ ...currentUser, dob: e.target.value }))} />
         <FormControl id="wd-email" className="mb-2"
           defaultValue={currentUser.email}
           onChange={(e) => dispatch(updateUser({ ...currentUser, email: e.target.value }))} />
         <select className="form-control mb-2" id="wd-role" value={currentUser.role}
           onChange={(e) => dispatch(updateUser({ ...currentUser, role: e.target.value }))} >
           <option value="USER">User</option>
           <option value="ADMIN">Admin</option>
           <option value="FACULTY">Faculty</option>{" "}
           <option value="STUDENT">Student</option>
         </select>
         <div>
           <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
           <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
             Sign out
           </Button>
         </div>
       </div>
     )}
   </div>
);}
