import React from 'react'
import {motion} from 'framer-motion'

export default function Locationinfo({page, setPage, formData, setFormData, x, setX}) {
  return (
    <motion.div                           
          initial={{ x: x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
        >

    <div className="flex flex-col border border-2px border-black rounded-md w-400 p-10 gap-5 bg-white">
    <div className="text-xl text-center">Location Info</div>
    <input
      type="text"
      placeholder="Address"
      value={formData.address}
      onChange={(e) => setFormData({...formData, address: e.target.value})}
      className=" border border-1px border-black rounded-md p-2"
    />
    <input
      type="text"
      placeholder="Nationality"
      value={formData.nationality}
      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
      className=" border border-1px border-black rounded-md p-2"
    />
    <div className='flex flex-col gap-3'>
   <button className="border border-1px border-black rounded-md h-10 bg-lime-600" onClick={() => {
          setPage(page - 1);  setX(-1000);
        }}>
      Prev
    </button>
    <button className="border border-1px border-black rounded-md h-10 bg-lime-600" onClick={() => {
          setPage(page + 1);  setX(1000);
        }}>
      Next
    </button>
    </div>
  </div>
  </motion.div>
  )
}
