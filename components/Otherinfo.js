import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Otherinfo({
  page,
  setPage,
  formData,
  setFormData,
  x,
  setX,
  updateFormData,
}) {
  const saveFile = () => {
    const data = `Name: ${formData.fullname}\nUsername: ${formData.username}\nPwd: ${formData.password}\nnickname: ${formData.nickname}\nEmail: ${formData.email}\nAddress: ${formData.address}\nCountry: ${formData.nationality}\nDegree: ${formData.highestqualification}\nJob: ${formData.occupation}\nAbout: ${formData.about}`;

    const textToBLOB = new Blob([data], { type: "text/plain" });

    var filename = new Date();
    var month = new Date();
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;
    const sFileName = filename;

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click();
  };
 
  const [error, setError] = useState("");
  const [localData, setLocalData] = useState({
    Degree: formData.highestqualification,
    occupation: formData.occupation,
    About: formData.about,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (formData) => {
    if (!formData.highestqualification) return "Qualification required";
    if (!formData.occupation) return "Occupation required";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.highestqualification || !formData.occupation) {
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
      <div className="flex flex-col items-center border border-2px  rounded-md w-[60vh] md:w-[150vh] md:h-[60vh]  p-10 gap-5 bg-white">
        <div className="text-xl text-center font-sans text-bold">
          OTHER INFO
        </div>
        <form
          id="form4"
          className="flex flex-col w-full items-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
            name="highestqualification"
            id="Hgq"
            type="text"
            placeholder="Highest Qualification"
            value={formData.highestqualification}
            onChange={handleChange}
            className=" border border-b border-b-black  p-2 md:w-1/2"
          />
          <input
            name="occupation"
            id="Job"
            type="text"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
            className=" border border-b border-b-black  p-2 md:w-1/2"
          />
          <textarea
            name="about"
            id="abt"
            type="text"
            placeholder="About"
            value={formData.about}
            onChange={handleChange}
            className=" border border-b border-b-black  p-2 md:w-1/2"
          />
          <div className="text-red-500 text-xs">{error}</div>
          <div className="flex gap-10">
            <button
              className="border border-1px border-lime-800 rounded-md h-10 w-20 font-serif text-bold bg-lime-800 text-white hover:bg-white hover:text-black hover:border-black"
              onClick={() => {
                setPage(page - 1);
                setX(-1000);
              }}
            >
              PREV
            </button>
            <button
              className="border border-1px border-lime-800 rounded-md h-10 w-20 font-serif text-bold bg-lime-800 text-white hover:bg-white hover:text-black hover:border-black"
              onClick={saveFile}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
