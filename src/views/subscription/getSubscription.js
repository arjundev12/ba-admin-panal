import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '../pagination/pagination';
const GetSubscription = () => {
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);

    const onPaginationChange = (start, end) => {
        // console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
    };

    const [subscription, setSubscription] = useState([]);
    const { id } = useParams();
    const [search, setSearch] = useState({});
    useEffect(() => {
        loadSubscription();

    }, [search,total,page]);
    const loadSubscription = async () => {
        let array = []
        const data = {
            page: page,
            limit: showPerPage
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        } 
        // console.log("datarequest ", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/list-subscription`,data);
        console.warn(res.data.data)
        for (let item of res.data.data.docs) {
            if (item.title) {
                array.push(item)
            }
        }
        await setTotal(res.data.data.total)
        setSubscription(array);
    };
    const deletequestion = async (e, item) => {
        // console.log("deletequestion", item)
        await axios.delete(`${CONSTANT.baseUrl}/api/admin/delete-question?_id=${item}`).then((data1) => {
            console.log("response", data1)
            // toast( data1.data.data.message)
            loadSubscription()
        }).catch((err) => {
            console.log("error", err)
            toast(err.data.message)
        })

    };
    const onInputChange1 = async (e)=>{
        console.log("search text", e.target.name, e.target.value )
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    return (
        <div>
            {/* <Link className="btn btn-primary" to="/">
                back to Home
       </Link> */}
            <Link className="btn btn-primary add-blog" to="/add/subscription">
                Add Subscription Pack
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
                        <th>Title</th>
                        <th>Price</th>
                        <th>Days</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subscription.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.days? item.days: ""}</td>
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
            {/* <Button variant="primary">Primary</Button> */}
        </div>
    )
}

export default GetSubscription
