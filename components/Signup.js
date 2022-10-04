import { motion } from "framer-motion";

function Signup({ page, setPage, formData, setFormData, x, setX}) {
  return (
    <motion.div                            
          initial={{ x: x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
        >

    <div className="flex flex-col border border-2px border-black rounded-md w-400px p-10 gap-5 bg-white">
      <div className="text-xl text-center font-serif text-bold">SIGN-UP INFO</div>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullname}
        onChange={(e) => setFormData({...formData, fullname: e.target.value})}
        className=" border border-1px border-black rounded-md p-2"
      />
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
        className=" border border-1px border-black rounded-md p-2"
      />
      <input
        type="text"
        placeholder="Password"
        value={formData.password}
        onChange={(e)=> setFormData({...formData, password: e.target.value})}
        className=" border border-1px border-black rounded-md p-2"
      />
      <button
        className="border border-1px border-black rounded-md font-serif text-bold bg-lime-800 text-white hover:bg-white hover:text-black h-10"
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
