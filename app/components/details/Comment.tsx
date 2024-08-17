"use client"
import { RxAvatar } from "react-icons/rx"
import { Rating } from "@mui/material"
const Comment = ({prd} : {prd : any}) => {
  
  return (
    <div className=" my-5 border border-pink-300  w-full md:w-1/3 p-2 rounded-lg my-3">
      <div className=" flex items-center gap-1">
      <RxAvatar size="40" />
      <div>
        <div className="ml-1 text-pink-600 font-bold ">{prd?.user.name}</div>
        <Rating name="read-only" value={prd?.user.rating} readOnly />
      </div>
      </div>
      <div className="text-slate-700 ">{prd.comment}</div>
    </div>
  )
}

export default Comment