import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Signup({
  page,
  setPage,
  formData,
  setFormData,
  x,
  setX,
  
  isSubmit,
  setIssubmit,
}) {

  //  function saveFile(props) {
  //    const fullname = document.getElementById("txtName");
  //    const username = document.getElementById("txtUser");
  //         const password = document.getElementById("Pwd");

  //   //  const nickname = document.getElementById("Nck");
  //   //  const Email = document.getElementById("Email");
  //   //  const address = document.getElementById("Add");
  //   //  const nation = document.getElementById("Nty");
  //   //  const degree = document.getElementById("Hgq");
  //   //  const job = document.getElementById("Job");

  //    const txtData =
  //      "\r Name: " +
  //      fullname.value +
  //      " \r\n " +
  //      "User: " +
  //      username.value +
  //      "\r\n" +
  //      "password:" +
  //      password.value;

  //   //    " \r\n " +
  //   //    "nickname: " +
  //   //    nickname.value +
  //   //    " \r\n " +
  //   //    "Email: " +
  //   //    Email.value +
  //   //    " \r\n " +
  //   //    "Address: " +
  //   //    address.value;
  //   //  "\r\n" + "Degree:" + degree.value;
  //   //  "\r\n" + "nation:" + nation.value;
  //   //  "\r\n" + "Job:" + job.value;

  //    console.log(txtData);

  //    const textToBLOB = new Blob([txtData], { type: "text/plain" });
  //    var filename = new Date();
  //    var month = new Date();
  //    month = month.getMonth();

  //    var day = new Date();
  //    var day = day.getUTCDate();

  //    var year = new Date();
  //    var year = year.getUTCFullYear();

  //     let newdate = year + "/" + month + "/" + day;
  //    const sFileName = filename;

  //    let newLink = document.createElement("a");
  //    newLink.download = new Date();

  //    if (window.webkitURL != null) {
  //      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  //    } else {
  //      newLink.href = window.URL.createObjectURL(textToBLOB);
  //      newLink.style.display = "none";
  //      document.body.appendChild(newLink);
  //    }

  //    newLink.click();
  //  }
  const [error, setError] = useState("")

  // const validate =(formData) => {
  //   formData.preventDefault();
  //   if (!formData.fullname || !formData.username || !formData.password) return;
  //   {
  //     error
  //   }
  // }

  const validate = (formData) => {
    if (!localData.Name) return "fullname is required";
    if (!localData.User) return "username is required";
    if (!localData.Pwd) return "password is required";
  };

  const [localData, setLocalData] = useState({
    Name: formData.fullname,
    User: formData.username,
    Pwd: formData.password,
  });
  const updateFormData = (NewData) => {
    setFormData((prevData) => ({ ...prevData, ...NewData }));
  };
  

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullname || !formData.username || !formData.password) {
      setError(validate(formData));
      
      return;
    }

    setPage(page + 1);
    setX(1000);
  };

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="flex flex-col items-center border border-2px  rounded-md w-[60vh]  md:w-[150vh] md:h-[60vh] md:px-14 px-10 py-3 gap-10 bg-white">
        <div className="text-xl  font-sans text-bold">SIGN-UP INFO</div>
        <form
          id="form1"
          className="flex flex-col w-full items-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
          name="fullname"
            id="txtName"
            type="text"
            placeholder="Enter fullname"
            value={formData.fullname}
            onChange={handleChange}
            // onChange={(e) =>
            //   setLocalData({ ...localData, fullname: e.target.value })
            // }
            className=" border border-b border-b-black  p-2 md:w-1/2"
          />
          {/* <p className="text-red-500 text-xs">{error}</p> */}
          <input
          name="username"
            id="txtUser"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className=" border border-b  border-b-black  p-2 md:w-1/2"
          />
          <input
          name="password"
            id="Pwd"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            // onChange={(e) =>
            //   setLocalData({ ...localData, password: e.target.value })
            // }
            className="  border border-b  border-b-black  p-2 md:w-1/2"
          />
          <div className="text-red-500 text-xs"> {error}</div>
          <button
            className="border border-1px border-lime-800 rounded-md font-serif text-bold  bg-lime-800 text-white hover:bg-white hover:text-black hover:border-black h-10 w-20 "
            // onClick={(e) => setError(validate(formData))}
          >
            NEXT
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Signup;
