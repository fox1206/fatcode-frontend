import React from "react";
import Link from "next/link";
import CardsCourse from "../../components/courses/CardsCourse";
import MainLayout from "../../layouts/Main/MainLayout";


const Courses = () => {

  return(
    <MainLayout>
        <CardsCourse />
    </MainLayout>
  )
}

export default Courses;