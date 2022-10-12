import React from "react";
import MemoNavBar from "../Header/NavBar";
import { Child } from "../../types/HeaderLinks";
import CardsCourse from "../../components/courses/CardsCourse";

const MainLayout: React.FC<Child> = ({children})=>{
  return (
      <>
        <CardsCourse />
      </>
  );
};


export default MainLayout;

