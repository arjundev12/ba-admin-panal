import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import { Button, Table } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../css/style.css'


const AddSubscription = () => {
  let history = useHistory();
  const [addsubscription, setAddsubscription] = useState({
    title: "",
    price: "",
    days : ""
  });


  const { title, price ,days} = addsubscription;
  useEffect(() => {
    // loadCategory()
  }, []);
  const onInputChange = e => {
    setAddsubscription({ ...addsubscription, [e.target.name]: e.target.value });
  };
  ////////////////////////////////validation //////////////
  const [formErrors, setFormErrors] = useState({});
  const handleFormValidation = async () => {
    const { title, price ,days} = addsubscription;
    let formErrors = {};
    let formIsValid = true;
    //price number    
    if (!price) {
      formIsValid = false;
      formErrors["priceErr"] = "Price is required.";
    }else if(price){
      var mobPattern = /^[0-9]{0,6}$/i
      if (!mobPattern.test(price)) {
        formIsValid = false;
        formErrors["priceErr"] = "Invalid price number please enter maximum 6 digit";
      }
    }


    setFormErrors(formErrors ); 
    return formIsValid;
  }
  const onSubmit = async e => {
    e.preventDefault();
    let checkvalidation = await handleFormValidation()
    if (checkvalidation) {
      console.warn("onsumbit", addsubscription)
      const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-subscription`, addsubscription);
      console.log(res.data)
      toast(res.data.message);
      setTimeout(function () { history.push("/subscription"); }, 1000);
    } 
  };
  const { priceErr } = formErrors
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Subscription pack</h2>
        <form onSubmit={e => onSubmit(e)}>

          <div className="form-group">
            <label> Title</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter question description"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label> Price</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter info description"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
              />    
              {priceErr &&    
                  <div style={{ color: "red", paddingBottom: 10 }}>{priceErr}</div>    
              } 
          </div>
          <div className="form-group col-sm-6">
            <label>Expiration Time</label>
            <select className="form-control" name="days"
              onChange={e => onInputChange(e)} >
              <option value={"30"}> 30 days </option>
              <option value={"60"}> 60 days </option>
              <option value={"90"}> 90 days </option>
              {/* <option  value={"D"}> D </option> */}
            </select>
          </div>
          <button className="btn btn-primary btn-block">Add Subscription pack</button>
        </form>
        <ToastContainer />

      </div>
    </div>
    
  );
};

export default AddSubscription;