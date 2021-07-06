import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetCategories = () => {
    const history = useHistory()
    const [category, setCategory] = useState([{
        id: "",
        name: "",
        // category_type: "",
        // minner_Activity: "",
    }]);
    const { id } = useParams();
    const [search, setSearch] = useState({});
    useEffect(() => {
        loadCategory();

    }, [search]);
    const loadCategory = async () => {
        let array = []
        const data = {
            page: 1,
            limit: 5
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        } 
        // console.log("datarequest ", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-category`,data);
        // console.warn(res.data.data)
        for (let item of res.data.data.docs) {
            if (item.name) {
                array.push(item)
            }
        }
        setCategory(array);
    };
    const onInputChange = async (e, item) => {
        console.warn("oninput change data ", e.target.value, item)
        let data = {}
        data.status = e.target.value
        data.id = item._id
        // data.login_type = item.login_type
        console.log("request", data)
    //     await axios.put(`${CONSTANT.baseUrl}/api/admin/get-category`, data).then((data1) => {
    //         console.log("response", data1)
    //         // toast( data1.data.data.message)
    //         loadCategory()
    //     }).catch((err) => {
    //         console.log("error", err)
    //         toast(err.data.message)
    //     })

    };
    const onInputChange1 = async (e)=>{
        console.log("search text", e.target.name, e.target.value )
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    const deleteCategory = async (e, item) => {
        // console.log("deleteCategory", item)
        await axios.delete(`${CONSTANT.baseUrl}/api/admin/delete-category?_id=${item}`).then((data1) => {
            console.log("response", data1)
            // toast( data1.data.data.message)
            loadCategory()
        }).catch((err) => {
            console.log("error", err)
            toast(err.data.message)
        })

    };
    return (
        <div>
            {/* <Link className="btn btn-primary" to="/">
                back to Home
       </Link> */}
            <Link className="btn btn-primary add-blog" to="/add/category">
                Add Category
       </Link>
            <div>
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
                        <th>name</th>
                        <th>Action</th>
                        {/* 
                        <th class="address">status</th> */}
                        {/* <th>Created by</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <Button className="btn btn-primary bg-green mr-2" onClick={e => deleteCategory(e, item._id,)}> delete </Button>
                            {/* <td>{item.content}</td> */}
                            {/* <td>
                                <select class="form-control" name="status" value={item.status ? item.status : 'active'}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value={'active'} >Active</option>
                                    <option value={'inactive'}>Inactive</option>
                                </select></td> */}
                            {/* <td>{item.created_by+""}</td> */}
                        </tr>)
                    }
                </tbody>
            </Table>
            <ToastContainer />
            {/* <Button variant="primary">Primary</Button> */}
        </div>
    )
}

export default GetCategories
