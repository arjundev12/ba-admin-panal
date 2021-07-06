import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddChapter = () => {
  let history = useHistory();
  const [chapter, setChapter] = useState({
    name: "",
    content: "",
    image: "",
    // category_meta: {},
    subcategory_meta: {}
  });
  const [subcategory, setSubCategory] = useState([]);
  const [subcategorymeta, setSubCategorymeta] = useState();

  const [category, setCategory] = useState([]);
  const [categorymeta, setCategorymeta] = useState();
  // const options = {
  //   headers: {'token': localStorage.getItem('token')}
  // };
  const [image, setImage] = useState({});

  const { name, content } = chapter;

  useEffect(() => {
    loadCategory()
    // loadSubCategory();
  }, []);

  const onInputChange = e => {
    // console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };
  const onInputChange2 = async (e) => {
    console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    await setSubCategorymeta(subcategory[e.target.value])
  };
  const onInputChange3 = async (e) => {
    console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    await setCategorymeta(category[e.target.value])
    loadSubCategory(category[e.target.value])

  };

  const loadCategory = async () => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/category-list`).then((data1) => {
      setCategory(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
    })
  }
  const loadSubCategory = async (item) => {
    console.log("item......", item)
    await axios.get(`${CONSTANT.baseUrl}/api/admin/subcategory-list?_id=${item._id}`).then((data1) => {
      setSubCategory(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
      // toast(err.data.message)
    })
  }
  const onSubmit = async e => {
    e.preventDefault();
    if (subcategorymeta && categorymeta) {
      chapter.subcategory_meta = subcategorymeta
      chapter.category_meta = categorymeta
      console.warn("onsumbit", chapter)
      const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-chapter`, chapter);
      toast(res.data.message);
      setTimeout(function () { history.push("/chapters"); }, 1000);
    } else {
      alert("please select any category")
    }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Chapter</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div class="form-group col-sm-6">
            <label>Select Category *</label>
            <select class="form-control"
              onChange={e => onInputChange3(e)} >
                <option  value={"N/A"}>
                  {"Select"}
                </option>
              {
                category.map((option, index) =>
                
                 <option key={index} value={index}>
                  {option.name}
                </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>
          <div class="form-group col-sm-6">
            <label>Select Sub Category *</label>
            <select class="form-control"
              onChange={e => onInputChange2(e)} >
                <option  value={"N/A"}>
                  {"Select"}
                </option>
              {
                subcategory.map((option, index) =>
                
                 <option key={index} value={index}>
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
          <button className="btn btn-primary btn-block">Add chapter</button>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AddChapter;