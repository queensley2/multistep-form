import { motion } from "framer-motion";
import Image from "next/image";

function Signup({ page, setPage, formData, setFormData, x, setX }) {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="flex flex-col items-center border border-2px  rounded-md w-[60vh]  md:w-[150vh] md:h-[60vh] md:px-14 px-10 py-3 gap-10 bg-white">
        <div className="text-xl  font-sans text-bold">SIGN-UP INFO</div>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={(e) =>
            setFormData({ ...formData, fullname: e.target.value })
          }
          className=" border border-b  border-b-black  p-2 md:w-1/2"
        />
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
          type="text"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="  border border-b  border-b-black  p-2 md:w-1/2"
        />
        <button
          className="border border-1px border-lime-800 rounded-md font-serif text-bold  bg-lime-800 text-white hover:bg-white hover:text-black hover:border-black h-10 w-20"
          onClick={() => {
            setPage(page + 1);
            setX(1000);
          }}
        >
          NEXT
        </button>
      </div>
    </motion.div>
  );
}

export default Signup;
