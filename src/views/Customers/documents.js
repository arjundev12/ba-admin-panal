import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown, Modal, Tabs, Tab, Sonnet } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'
import "jspdf-autotable";
import '../../css/style.css'



const DocumentsList = () => {
    //httpEquiv
    let history = useHistory();
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);
    const [filters, setFilters] = useState({})

    // const [customer, setcustomer] = useState([]);
    const [search, setSearch] = useState({});

    useEffect(() => {
        loadData(page, filters)
    }, [page, total, filters, search])
    const [customerlist, setCustomerlist] = useState([])
    const onInputSearch = async (e) => {
        console.log("search text", e.target.name, e.target.value)
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    const loadData = async (page, filters = null) => {
        const data = {
            page: page,
            limit: 10
        }

        if (!(Object.keys(filters).length === 0 && filters.constructor === Object)) {
            data.sort = filters
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        }
        data._id = localStorage.getItem('subadminid')
        console.log("datadata", data)

        let response = await axios.post(`${CONSTANT.baseUrl}/api/admin/customer-list`, data);
        if (response.data.code == 200) {
            toast("Add successfully");
            // setCustomer(response.data.data)
            console.log("datadata", response.data.data.docs)
            setCustomerlist(response.data.data.docs);
            await setTotal(response.data.data.total)
        } else {
            console.log("response", response)
        }
    }


    const [filepath, setFilepath] = useState();
    const onSetFile = async e => {
        console.warn("............image....", [e.target.name], e.target.files[0])
        const formData = new FormData();
        formData.append(
            "file",
            e.target.files[0],
        );
        console.warn("file", formData)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/uploade-doc`, formData, { "Content-Type": "multipart/form-data" });
        console.log("response", res.data)
        if (res.data.code == 200) {
            setFilepath(res.data.data)
        } else {
            console.warn("error", res.data.message)
        }
        console.log("filepath", filepath)
    }
    /////////////////////////////////////////////////generatePdfFile////////////////////////////////

    return (
        <>

            <head>

                <meta charset="utf-8" />
                <meta http-equiv="content-type" content="text/html;charset=utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <meta name="keyword" content="" />
                <title>Winklix Internet</title>

                <link href="css/font-awesome.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,700,800" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/custom.css" rel="stylesheet" />
            </head>
            <body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden    pace-done">

                <div class="pace-progress" data-progress-text="100%" data-progress="99" >
                    <div class="pace-progress-inner">
                    </div>
                </div>
                <div class="pace-activity">

                </div>


                <div class="app-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5 col-sm-5 pd-0">
                                <h2 class="customer">Customers</h2>
                            </div>



                            <div class="container-fluid pd-0">
                                <div class="customer-table">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Customer name</th>
                                                <th>Company</th>
                                                {/* <th>GST REGISTRATION TYPE</th> */}
                                                {/* <th>GSTIN </th> */}
                                                <th>PHONE</th>
                                                {/* <th>Minner Status</th> */}
                                                {/* <th>OPEN BALANCE</th> */}
                                                <th>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                customerlist.map((item, i) => <tr>
                                                    <td>{i + 1}</td>
                                                    <td><a href={`#/add/folder/${item._id}`}> {item.first_name} {item._id}</a></td>
                                                    <td><a href={`#/add/folder/${item._id}`}> {item.company.company_name}</a></td>
                                                    <td><a href={`#/add/folder/${item._id}`}> {item.number}</a></td>
                                                    <td><Link to={`/add/folder/${item._id}`}>CREATE FOLDER</Link></td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </Table>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="js/jquery.min.js"></script>
                <script src="js/popper.min.js"></script>
            </body>
        </>
    )
}

export default DocumentsList
