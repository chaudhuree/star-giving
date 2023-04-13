//import these in App js page and view
import React from 'react'
import 'antd/dist/antd.css';
import { Rate } from 'antd';

const Star=()=>{
  const [star,setStar]=React.useState(0)
const handleStar=(value)=>{
  setStar(value)
}
  return(
    <div>
      <Rate onChange={handleStar} allowHalf defaultValue={2.5} />
      <br/>
      {star}
    </div>
  )
}
export default Star;
