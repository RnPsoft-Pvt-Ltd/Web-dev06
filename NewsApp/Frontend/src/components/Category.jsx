import Cards from "./Cards";
import './Category.css'
function Category({data}){
      return <>
      <div className="catDiv">
            {data.map((item,index)=><Cards key={index} item={item}/>)}
      </div>
      </>
}

export default Category;