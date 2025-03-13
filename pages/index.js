import { useState } from "react";
import Signup from "../components/Signup";
import Personalinfo from "../components/Personalinfo";
import Otherinfo from "../components/Otherinfo";
import Locationinfo from "../components/Locationinfo";
import { Progress } from "@chakra-ui/react";

export default function Index() {

  // function saveFile(props) {
  //   const fullname = document.getElementById("txtName");
  //   const username = document.getElementById("txtUser");
  //   const nickname = document.getElementById("Nck");
  //   const Email = document.getElementById("Email");
  //   const address = document.getElementById("Add");
  //   const nation = document.getElementById("Nty");
  //   const degree = document.getElementById("Hgq");
  //   const job = document.getElementById("Job");

  //   const txtData =
  //     "\r Name: " +
  //     fullname.value +
  //     " \r\n " +
  //     "User: " +
  //     username.value +
  //     " \r\n " +
  //     "nickname: " +
  //     nickname.value +
  //     " \r\n " +
  //     "Email: " +
  //     Email.value +
  //     " \r\n " +
  //     "Address: " +
  //     address.value;
  //   "\r\n" + "Degree:" + degree.value;
  //   "\r\n" + "nation:" + nation.value;
  //   "\r\n" + "Job:" + job.value;

  //   console.log(txtData);

  //   const textToBLOB = new Blob([txtData], { type: "text/plain" });
  //   var filename = new Date();
  //   var month = new Date();
  //   month = month.getMonth();

  //   var day = new Date();
  //   var day = day.getUTCDate();

  //   var year = new Date();
  //   var year = year.getUTCFullYear();

  //   newdate = year + "/" + month + "/" + day;
  //   const sFileName = filename;

  //   let newLink = document.createElement("a");
  //   newLink.download = new Date();

  //   if (window.webkitURL != null) {
  //     newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  //   } else {
  //     newLink.href = window.URL.createObjectURL(textToBLOB);
  //     newLink.style.display = "none";
  //     document.body.appendChild(newLink);
  //   }

  //   newLink.click();
  // }
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);
  // const [isSubmit, setIsSubmit] = useState(false);

  
//  })
  
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
const updateFormData = (NewData) => {
  setFormData((prevData) => ({...prevData, ...newData}));
};
  
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
