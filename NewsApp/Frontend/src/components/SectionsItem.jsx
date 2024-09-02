import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function SectionsItem({names}){
      const [arrow,setArrow]=useState(true)
      
      return <>
            <li  onMouseEnter={() => setArrow(!arrow)} onMouseLeave={() => setArrow(!arrow)}>{names} <span>{arrow? <IoIosArrowDown />:<IoIosArrowForward />}</span>  </li>
      </>
}
export default SectionsItem;