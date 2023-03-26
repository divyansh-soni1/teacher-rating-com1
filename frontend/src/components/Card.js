import React , { useState } from 'react'
import axios from 'axios';

function Card(props) {
  const [count, setCount] = useState(0.00);
 
  async function changeFunc(event) {
    // alert(event.target.value);
      console.log(props.txt)

    await axios.post('http://localhost:5000/star',{rating:event.target.value,
  name:String(props.txt)}).then(res => {
       
     })
    
     axios.get(`http://localhost:5000/${props.txt}`,
     
    )
    .then(function (response) {
      const myJSON = JSON.stringify(response.data)
      console.log(myJSON)
     setCount(myJSON)
    // const myJSON = JSON.stringify(response.data.id)
    //    console.log(myJSON)
    
    })
  }

  return (<>
 
    <div> <div>
    <div
      className="card mt-3 bg-dark text-light"
      style={{ "width": "18rem", "maxHeight": "360px" }}
    >
      <img src={props.im} style={{width:"100%",height:"13em"}} className="card-img-top " alt="..." />
      <div className="card-body bg-dark">
        <h5 className="card-title">{props.txt}</h5>

        <div >

        <p className="card-text" style={{display:"inline"}}>Teacher rating :</p>
        <p className="card-text" style={{display:"inline", marginLeft: "10px"}}>  {count} </p>
        </div>
        <div className="container w-100">
          <select  style={{width:"150px"}} onChange={changeFunc} className="m-2 h-100  bg-success  rounded text-light">
            {Array.from(Array(6), (e, i) => {
              return (
                <option  key={i + 1} value={i + 1}>
                  {i + 1}
                </option >
              );
            })}
          </select>
          {/* <select  className="m-2 h-100  bg-success text-light rounded">
            <option value="half">half</option>
            <option value="full">full</option>
          </select>
          <div className="d-inline ms-3">
            Total Price
          </div> */}

        </div>
      </div>
    </div>
  </div></div>
  </>  )
}

export default Card