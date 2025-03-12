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
  

  

  // const validate =(formData) => {
  //   formData.preventDefault();
  //   if (!formData.fullname || !formData.username || !formData.password) return;
  //   {
  //     error
  //   }
  // }
  
  // const validate = (formData) => {
  //   const error = { };
  //   if (!formData.fullname) return;
  //    {
  //     error.fullname = "fullname is required";
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.username || !formData.password) return;
    // {
    //   setError(validate(formData));
    //   setIssubmit(true);
    // }
    {
      setPage(page + 1);
      setX(1000);
    }

    
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
          className="flex flex-col w-full items-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter fullname"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
            className=" border border-b border-b-black  p-2 md:w-1/2"
          />
          {/* <p className="text-red-500 text-xs">{error}</p> */}
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className=" border border-b  border-b-black  p-2 md:w-1/2"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="  border border-b  border-b-black  p-2 md:w-1/2"
          />
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
