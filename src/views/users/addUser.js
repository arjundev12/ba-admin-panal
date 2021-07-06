import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'

const AddUsers = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const options = {
    headers: { 'token': localStorage.getItem('token') }
  };

  const { name, username, email ,password} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    console.log("request", user)
    let response = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-user`, user, options);

    if (response.data.code == 200) {
      toast("Add successfully");
      setTimeout(function () { history.push("/users"); }, 3000);
      // history.push("/users");
    }
  };
  return (
    <>
      <div class="UserRight">
        <h3>Add User</h3>
        <form onSubmit={e => onSubmit(e)}>
          <div class="row">
            <div class="form-group col-sm-6">
              <label>Name </label>
              <input type="text" name="name" class="form-control" placeholder="" value={name}
                onChange={e => onInputChange(e)} />
            </div>
            <div class="form-group col-sm-6">
              <label>Password</label>
              <input type="text" name="password" class="form-control" placeholder="" value={password}
                onChange={e => onInputChange(e)} />
            </div>
            <div class="form-group col-sm-6">
              <label>Username</label>
              <input type="text" name="username" class="form-control" placeholder="" value={username}
                onChange={e => onInputChange(e)} />
            </div>
            <div class="form-group col-sm-6">
              <label>Email</label>
              <input type="text" name="email" class="form-control" placeholder="" value={email}
                onChange={e => onInputChange(e)} />
            </div>
            <div class="col-sm-12">
              <button className="btn btn-primary" >Submit</button>
            </div>

          </div>
        </form>
      </div>

    </>
  )
}

export default AddUsers
