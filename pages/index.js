import React from "react";
import { useState } from "react";
import Signup from "../components/Signup";
import Personalinfo from "../components/Personalinfo";
import Otherinfo from "../components/Otherinfo";
import Locationinfo from "../components/Locationinfo";
import { Progress } from "@chakra-ui/react";

export default function index() {
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    nickname: "",
    email: "",
    address: "",
    nationality: "",
    highestqualification: "",
    occupation: "",
    about: "",
  });

  const componentList = [
    <Signup
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <Personalinfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <Locationinfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <Otherinfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
  ];
  const percent="4"
// const value={`w-[${percent}%]`}
  return (
    <div className=" flex flex-col justify-center items-center h-screen text-black bg-gradient-to-t from-lime-600 to-lime-900">
      <div className="h-2 w-1/2 bg-gray-100 mb-5 rounded-full">
      <div className={"bg-red-500 h-2 rounded-full "+ `w-[${percent}%]`} ></div>
      </div>
      <div>{componentList[page]}</div>
    </div>
  );
}
