import React from 'react'
import {motion} from 'framer-motion'

export default function Locationinfo({page, setPage, formData, setFormData, x, setX}) {
  return (
    <motion.div                           
          initial={{ x: x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
        >

    <div className="flex flex-col items-center border border-2px  rounded-md w-[60vh] md:w-[150vh] h-[60vh] p-10 gap-10 bg-white">
    <div className="text-xl text-center font-sans text-bold">LOCATION INFO</div>
    <input
      type="text"
      placeholder="Address"
      value={formData.address}
      onChange={(e) => setFormData({...formData, address: e.target.value})}
      className="  border border-b  border-b-black  p-2 md:w-1/2 "
    />
    <input
      type="text"
      placeholder="Nationality"
      value={formData.nationality}
      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
      className="  border border-b  border-b-black  p-2 md:w-1/2"
    />
    <div className='flex  gap-10'>
   <button className="border border-1px border-lime-800 rounded-md h-10 w-20 font-serif text-bold bg-lime-800 text-white hover:bg-white hover:text-black hover:border-black" onClick={() => {
          setPage(page - 1);  setX(-1000);
        }}>
      PREV
    </button>
    <button className="border border-1px border-lime-800 rounded-md h-10 w-20 font-serif text-bold bg-lime-800 text-white hover:bg-white hover:text-black hover:border-black" onClick={() => {
          setPage(page + 1);  setX(1000);
        }}>
      NEXT
    </button>
    </div>
  </div>
  </motion.div>
  )
}
