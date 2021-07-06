import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import { Button, Table } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const UpdateFaq = () => {
  let history = useHistory();
  const { id } = useParams();
  const [addreply, setAddReply] = useState({
    question: "",
    answer: "",
    created_by: {}
  });
  const [user, setUser] = useState({
    email: "example@gmail.com",
    name: "user",
  });


  const { question, answer, created_by, status } = addreply;
  useEffect(() => {
    loadData()
  }, []);
  const loadData = async () => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/get-faq?_id=${id}`).then((res) => {
      console.log("response", res.data.data.created_by)
      setAddReply(res.data.data);
      if(res.data.data.created_by){
        setUser(res.data.data.created_by)
      }
      
    }).catch(err => {
      console.warn(err)
    })

  };
  const onInputChange = e => {
    setAddReply({ ...addreply, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    // console.warn("options",questions, options)
    if (true) {
      let data = {
        _id: addreply._id,
        answer: addreply.answer,
        status: "done"
      }
      console.warn("onsumbit", data)
      const res = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-faq`, data);
      console.log(res.data)
      toast(res.data.message);
      setTimeout(function () { history.push("/faq"); }, 1000);
    } else {
      alert("please select any subcategory and chaptermeta")
    }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Reply to User</h2>
        <form onSubmit={e => onSubmit(e)}>
       
          <div className="form-group">
          <h4 className="form-group">User Name :{user.name}</h4>
          </div>
          <div className="form-group">
          <h4 className="form-group">Email :{user.email}</h4>
          </div>
          <div className="form-group">
            <label> Question</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter question description"
              name="question"
              value={question}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label> Answer</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter info description"
              name="answer"
              value={answer}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Submit</button>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateFaq;