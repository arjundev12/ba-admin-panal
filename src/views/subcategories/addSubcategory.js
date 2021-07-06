import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddSubCategories = () => {
  let history = useHistory();
  const [subcategory, setSubCategory] = useState({
    name: "",
    content: "",
    image: "",
    category_meta: {}
  });
 
  const [category, setCategory] = useState([]);
  const [categorymeta, setCategorymeta] = useState();
  // const options = {
  //   headers: {'token': localStorage.getItem('token')}
  // };
  const [image, setImage] = useState({});

  const { name, content } = subcategory;

  useEffect(() => {
    loadCategory();
  }, []);

  const onInputChange = e => {
    // console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    setSubCategory({ ...subcategory, [e.target.name]: e.target.value });
  };
  const onInputChange2 = async (e) => {
    console.log("eeeeeeeeeeee", e.target.name, e.target.value)
   await setCategorymeta(category[e.target.value])
  };
 
  const loadCategory = async () => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/category-list`).then((data1) => {
      setCategory(data1.data.data)
    }).catch((err) => {
      toast(err.data.message)
    })
  }
  // const onInputChange1 = async e => {
  //   // setImage({ image: e.target.files[0] });

  //   let reader = await new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = function () {
  //     console.warn("................",reader.result)
  //     setImage({image:reader.result })
  //     return
  // };
  // };
  // const uploadImage = async e => {

  //   const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/upload-image`, image);
  //   if (res.data.code == 200) {
  //     toast(res.data.message);
  //     console.warn(res.data.data)
  //     await setSubCategory({ ...category, image: res.data.data });

  //   }
  // };

  const onSubmit = async e => {
    e.preventDefault();
    console.warn("onsumbit", subcategory)
    if(categorymeta){
      subcategory.category_meta=categorymeta 
      const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-subcategory`, subcategory);
      toast(res.data.message);
      setTimeout(function () { history.push("/subcategories"); }, 1000);
    }else{
      alert("please select any category")
    }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Sub Category</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div class="form-group col-sm-6">
            <label>Select Category *</label>
            <select class="form-control"
              onChange={e => onInputChange2(e)} >
                 <option  value={"N/A"}>
                  {"Select"}
                </option>
              {
                category.map((option, index) => <option key={index} value={index}>
                  {option.name}
                </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group"> */}
          {/* <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your content"
              name="content"
              value={content}
              onChange={e => onInputChange(e)}
            /> */}
          {/* <ReactQuill theme="snow" value={content} onChange={e => onInputChange2(e)}/>
          </div> */}
          {/* <div><input type="file" name="file" onChange={e => onInputChange1(e)} />
            <button type="button" className="btn btn-primary" onClick={e => uploadImage(e)}>Upload</button>

          </div> */}
          <button className="btn btn-primary btn-block">Add subcategory</button>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AddSubCategories;