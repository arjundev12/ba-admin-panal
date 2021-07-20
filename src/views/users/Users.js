import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'

import '../../css/style.css'
const Users = () => {
    const history = useHistory()
    //////////////////////////////////pagination/////////////////////////////////////
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);

    const onPaginationChange = (start, end) => {
        console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
    };
    const [user, setUser] = useState([{
        id: "",
        email: "",
        name: "",
        username: "",
        user_type: "",
        minner_Activity: "",
    }]);
    const { id } = useParams();
    const [search, setSearch] = useState({});
    useEffect(() => {
        loadUser();
    }, [page, total, search]);
    const loadUser = async () => {
        let array = []
        const data = {
            page: page,
            limit: 10
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        }
        const options = {
            headers: {'token': localStorage.getItem('token')}
          };
        console.log("datarequest ", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-user`, data, options);
        console.warn(res.data.data)
        if (res.data.code == 200) {
            // toast("List get successfully")
            setUser(res.data.data.docs);
            await setTotal(res.data.data.total)
        }

    };
    const onInputChange = async (e, item) => {
        console.warn("oninput change data ", e.target.value, item)
        let data = {}
        data.minner_Activity = e.target.value
        data._id = item._id
        data.login_type = item.login_type
        const options = {
            headers: {'token': localStorage.getItem('token')}
          };
        await axios.post(`${CONSTANT.baseUrl}/api/admin/update-profile`, data,options ).then(data1 => {
            // console.log("response", data1)
            // toast(data1.data.data.message)
            loadUser()
        }).catch(err => {
            console.log("error", err)
            toast(err.data.message)
        })

    };
    const onInputChange1 = async (e) => {
        console.log("search text", e.target.name, e.target.value)
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    const userBlock = async (e, id, type) => {
        console.log("item data", id, type)
        let data = {}
        data._id = id
        data.block_user = type
        const options = {
            headers: {'token': localStorage.getItem('token')}
          };
        await axios.put(`${CONSTANT.baseUrl}/api/admin/update-user`, data, options).then(data1 => {
            // console.log("response", data1)
            // toast(data1.data.data.message)
            loadUser()
        }).catch(err => {
            console.log("error", err)
            toast(err.data.message)
        })
    }

    return (
        <div>
            <Link className="btn btn-primary" to="/users/add-users">
                Add User
            </Link>
            <div className="searchBox">
                <input
                    type="text"
                    className="searchBox"
                    placeholder="search here...."
                    name="text"
                    value={search.text}
                    onChange={e => onInputChange1(e)}
                />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Type</th>
                        {/* <th>Minner Status</th> */}
                        {/* <th className="address">type</th> */}
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.user_type}</td>
                            {/* <td>{item.minner_Activity + ""}</td> */}
                            {/* <td>
                                <select className="form-control" name="minner_Activity" value={item.minner_Activity}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value={true} >Active</option>
                                    <option value={false}>Inactive</option>
                                </select></td> */}
                            {/* <td><Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link>
                                {item.block_user == '1' ? (
                                    <Button className="btn btn-primary bg-red mr-2" onClick={e => userBlock(e, item._id, "0")}> Blocked </Button>
                                ) : (
                                    <Button className="btn btn-primary bg-green mr-2" onClick={e => userBlock(e, item._id, "1")}> Unblock </Button>
                                )}
                                
                            </td> */}
                        </tr>)
                    }
                </tbody>
            </Table>
            <ToastContainer />
            {
                total > 0? <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={total}
                page={page}
            />:""
            }
            {/* <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={total}
                page={page}
            /> */}
        </div>
    )
}

export default Users
