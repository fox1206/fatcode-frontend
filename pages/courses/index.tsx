import React from "react";
import Link from "next/link";
import CardsCourse from "../../components/courses/CardsCourse";
import MainLayout from "../../layouts/Main/MainLayout";

const Courses = () => {
  // импровизированная БД, которая содержит информацию о курсах
  // const cardsObj = [
  //     {id: 1, title: '123', times: 14, links: ['Python', 'Django', 'Backend']},
  //     {id: 2, title: '654', times: 14, links: ['HTML']},
  //     {id: 3, title: 'faker.name.firstName()', times: 14, links: ['CSS']},
  //     {id: 4, title: 'faker.name.firstName()', times: 14, links: ['JS']},
  // ];

  // массив с названием кнопок
  // const buttonsList = ["Pandas", "Web2py", "Puthon", "Keras", "Tornado", "TensorFlow", "Flask", "Scikit Learn",
  //                       "PyCharm", "Diango", "Seaborn", "Машинное обучение", "Node.js"];

  return(
    <MainLayout>
      <CardsCourse />
    </MainLayout>
  )
}

export default Courses;


