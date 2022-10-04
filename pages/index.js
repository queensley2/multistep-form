import { useState } from "react";
import Signup from "../components/Signup";
import Personalinfo from "../components/Personalinfo";
import Otherinfo from "../components/Otherinfo";
import Locationinfo from "../components/Locationinfo";
import { Progress } from "@chakra-ui/react";

export default function Index() {
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
      key={page}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <Personalinfo
      key={page}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <Locationinfo
      key={page}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <Otherinfo
      key={page}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
  ];

  return (
    <div className=" flex flex-col justify-center items-center h-screen  text-black bg-gradient-to-t from-lime-600 to-lime-900">
      <Progress value={20} />
      <div>{componentList[page]}</div>
    </div>
  );
}
