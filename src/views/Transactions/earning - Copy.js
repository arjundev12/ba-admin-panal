import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'

import '../../css/style.css'




const EarningTransactions = () => {
    const history = useHistory()
    //////////////////////////////////pagination/////////////////////////////////////
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);
    const [filters, setFilters] = useState({})
    const [totalAmount, setTotalAmount] = useState({})
    const options = {
        headers: {'token': localStorage.getItem('token')}
      };
    const onPaginationChange = (start, end) => {
        console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
    };
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState({});
    const { id } = useParams();
    useEffect(() => {
        loadData(page, filters);

    }, [page, total, filters ,search]);
    const loadData = async (page, filters = null) => {
        const data = {
            page: page,
            limit: 10,
            transaction_type: 'earning'
        }

        if (!(Object.keys(filters).length === 0 && filters.constructor === Object)) {
            data.sort = filters
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.toId = search.text
        }   
        console.log("datadata", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-transaction`, data,options);
        console.warn(res.data.data)
        if (res.data.code == 200) {
            toast("List get successfully")
            setTransactions(res.data.data.docs);
            await setTotal(res.data.data.total)
            if(res.data.data.total_amount){
                await res.data.data.total_amount.map((item)=>{
                    if(item._id == 'earning'){
                        setTotalAmount(item)
                    }
                })
            }
          
        }

    };
    const detailsView = async (item) => {
        console.warn("inside handle click", item)
        // history.push(`/user/${item._id}  `)
    }
    const onInputChange = async (e) => {
        console.log("targat", e)
        let filter = {}
        if (e == 'option-1') {
            setFilters({ ...filters, createdAt: -1 })
        }
        if (e == 'option-2') {
            setFilters({ ...filters, createdAt: 1 })
        }
        // if(e == 'option-3' ){
        //     setFilters({ ...filters, transaction_type: 1 })
        // }
        // if(e == 'option-4' ){
        //     setFilters({ ...filters, type: 1 })
        // }

    };
    const onInputChange1 = async (e)=>{
        console.log("search text", e.target.name, e.target.value )
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <Link className="btn btn-primary btn-back" to="/">
                Back to Home
       </Link>
      
       <h3>Total Earning Amount: {totalAmount?totalAmount.totalAmount : "00" } Rs</h3>
            <DropdownButton className='fltR' alignRight
                title="filter"
                id="dropdown-menu-align-right"

                onSelect={e => onInputChange(e)}>
                <Dropdown.Item eventKey="option-1">New transactions</Dropdown.Item>
                <Dropdown.Item eventKey="option-2">Old transaction</Dropdown.Item>
            </DropdownButton>
            <div>
                    <input
                        type="text"
                        className="searchBox"
                        placeholder="search by transaction id...."
                        name="text"
                        value={search.text}
                        onChange={e => onInputChange1(e)}
                    />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>transaction_type</th>
                        <th>type</th>
                        <th>amount</th>
                        {/* <th>Minner Status</th> */}
                        <th>Status</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((item, i) => <tr>
                            <td>{i + index + 1}</td>
                            <td>{item.transaction_type}</td>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                            {/* <td>{item.minner_Activity + ""}</td> */}
                            {/* <td>
                                <select class="form-control" name="minner_Activity" value={item.minner_Activity}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value= {true} >Active</option>
                                    <option value={false}>Inactive</option>
                                </select></td> */}
                            {/* <td><Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link>
                                <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link>
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
        </div>
    )
}

export default EarningTransactions
