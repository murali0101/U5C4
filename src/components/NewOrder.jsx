import { useState } from "react";
import { useSelector } from "react-redux";

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const Name = useSelector((store) => store.LoggedName);
  const orderM = useSelector((store) => store.ordersM);
  let orderF=orderM.filter((e)=>{return e.owner_name==Name})
  console.log('orderM:', orderF)
  const [showUnfinished,setshowUnfinished]=useState(false)
  // console.log('Name:', Name)
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          value={ Name}
          placeholder="yourname"
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter" onClick={() => {
          orderF = orderM.filter((e) => { return (e.owner_name == Name && e.owner_name != "Not Accepted") })
          setshowUnfinished((p)=>{ return !p})
        }}> {showUnfinished ? "show all" : " show only unfinished"}
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        { orderF.map((ele => {
        return(  <div className="past-orders">
          <span className="id">{ele.id }</span>. <span className="problem">{ele.problem}</span>{" "}
          <span className="cost">
            {ele.status == "Not Accepted" ? null : `${ele.cost}`}
            
          {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
        </span>
        <p className="status">Status: {ele.status}</p>
        <hr />
      </div>)
      }))}
      </div>
    </div>
  );
};
