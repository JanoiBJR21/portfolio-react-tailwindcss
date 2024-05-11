import React from 'react'
import { Data_Education } from "../../../../DataContents/DataContentsAbout";

const Education = () => {
  return (
    <div className="font-semibold mt-4">
    {Data_Education.title}
    <div className="pl-4">
      <div className="text-xs text-primaryContent">
        {Data_Education.education}
      </div>
      <div className="text-xs text-primaryContent">
        {Data_Education.university}
      </div>
      <div className="text-xs text-primaryContent">
        {Data_Education.faculty}
        {Data_Education.major}
      </div>
    </div>
  </div>
  )
}

export default Education