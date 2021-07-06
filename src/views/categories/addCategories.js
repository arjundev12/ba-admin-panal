import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddCategories = () => {
  let history = useHistory();
  const [category, setCategory] = useState({
    name: "",
    content: "",
    image: ""
  });
  // const options = {
  //   headers: {'token': localStorage.getItem('token')}
  // };
  const [image, setImage] = useState({});

  const { name, content } = category;
  const onInputChange = e => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const onInputChange2 = e => {
    setCategory({ ...category, content: e });
  };
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
  //     await setCategory({ ...category, image: res.data.data });

  //   }
  // };

  const onSubmit = async e => {
    e.preventDefault();
    console.warn("onsumbit", category)
    const res =await axios.post(`${CONSTANT.baseUrl}/api/admin/add-category`, category);
    toast(res.data.message);
    setTimeout(function(){history.push("/categories"); }, 1000);
    
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A category</h2>
        <form onSubmit={e => onSubmit(e)}>
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
          <button className="btn btn-primary btn-block">Add category</button>
        </form>

      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddCategories;