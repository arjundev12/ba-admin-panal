import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'






const Verification = () => {
    const history = useHistory()
    //////////////////////////////////pagination/////////////////////////////////////
    const [showPerPage, setShowPerPage] = useState(4);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);
    const options = {
        headers: {'token': localStorage.getItem('token')}
      }; 
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
        is_complete_kyc: ""
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
            limit: 4
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        }
        console.log("datarequest ", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-kyc-user`, data, options);
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
        data.is_complete_kyc = e.target.value
        data._id = item._id
        data.login_type = item.login_type
        await axios.put(`${CONSTANT.baseUrl}/api/admin/update-user`, data, options).then(data1 => {
            console.log("response", data1)
            toast(data1.data.data.message)
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

    return (
        <div>
            {/* <Link className="btn btn-primary" to="/">
                back to Home
       </Link> */}
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
                        <th class="address">Kyc Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) => <tr>
                            <td>{i + index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.user_type}</td>
                            {/* <td>{item.minner_Activity + ""}</td> */}
                            <td>
                                <select class="form-control" name="is_complete_kyc" value={item.is_complete_kyc}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value={'1'} >approved</option>
                                    <option value={'2'}>Panding</option>
                                    {/* <option value={'0'}>Not Upload</option> */}
                                    {/* <option value="blocked">Block</option> */}
                                </select></td>

                            <td> <div>
                                {item.is_complete_kyc =='2' ? (
                                    <Link className="btn btn-primary mr-2"  to={`/doc/${item._id}`}>verify </Link>
                                ) : (
                                    <Link className="btn btn-primary mr-2 " to={`/doc/${item._id}`}>verified </Link>
                                )}
                            </div>
                                {/* <Link className="btn btn-primary mr-2 " to={`/doc/${item._id}`}>view </Link> */}
                                {/* <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link> */}
                                {/* <Link className="btn btn-primary " to="/"> delete</Link> */}
                            </td>
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
        </div>
    )
}

export default Verification
