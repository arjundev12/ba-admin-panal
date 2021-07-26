import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown, Modal, Tabs, Tab, } from 'react-bootstrap'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'
import mail1 from '../../assets/email.png'
import call1 from '../../assets/call.png'

import '../../css/style.css'
const AddFolder = () => {
    //httpEquiv
    let history = useHistory();
    const { id } = useParams();
    const [show, setShow] = useState(false);
    useEffect(() => {
        loadData(id)
    }, [])
    const [customer, setCustomer] = useState({
        first_name: "",
        shipping_address: {
            "street": "",
            "city": "",
            "country": "",
            "pin": "",
            "state": ""
        },
        notes: "",
    })
    
    const loadData = async (id) => {
        let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/customer-details/${id}`);
        console.log(response.data.data.tax_info)
        if (response.data.code == 200) {
            toast("Add successfully");
            await setCustomer(response.data.data)
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
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">

                <meta http-equiv="content-type" content="text/html;charset=utf-8" />
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <meta name="keyword" content="" />
                    <title>Winklix Internet</title>

                    {/* <!-- Icons --> */}
                    <link href="css/font-awesome.min.css" rel="stylesheet" />
                    <link href="css/simple-line-icons.min.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,700,800" rel="stylesheet" />
                    {/* <!-- Main styles for this application --> */}
                    <link href="css/style.css" rel="stylesheet" />
                    <link href="css/custom.css" rel="stylesheet" />
                    {/* <!-- Styles required by this views --> */}
                </head>
                <body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden    pace-done">
                    <div class="pace  pace-inactive">
                        <div class="pace-progress" data-progress-text="100%" data-progress="99" >
                            <div class="pace-progress-inner">

                            </div>
                        </div>
                        <div class="pace-activity">
                        </div>
                    </div>
                    <div class="pace  pace-inactive">
                        <div class="pace-progress" data-progress-text="100%" data-progress="99" >
                            <div class="pace-progress-inner">
                            </div>
                        </div>
                        <div class="pace-activity">
                        </div>
                    </div>

                    <div class="app-body">
                        <div class="container-fluid">

                            <div class="row customer-text1">
                                <div class="col-md-5 col-sm-5 heading-customer">
                                    {/* for select customer */}
                                    {/* {<div> */}
                                    <h2 class="customer-list">{customer.first_name ? customer.first_name : ""}</h2>
                                    <ul>
                                        <li><a ><img src={mail1} /></a></li>
                                        <li><span tooltip="9582089971" flow="down"><img src={call1} /></span></li>
                                        <div class="main">
                                        </div>
                                    </ul>
                                    <p>{customer.first_name} |{customer.shipping_address.street}</p>
                                    <div class="form-group">
                                        <br />
                                        <label className="dd">Notes</label>
                                        <textarea class="form-control" rows="5" id="comment" value={customer.notes} placeholder="Add Notes"></textarea>
                                    </div>
                                    {/* </div>} */}

                                </div>
                              
                            </div>

                            <div class="card-box">
                                <div class="card1">
                                    <h2>₹23,50,570</h2>
                                    <p className="paid">26 Estimates</p>
                                </div>
                                <div class="card2">
                                    <div class="activity-heading">
                                        <h2>Unbilled Last 365 Days</h2>
                                    </div>
                                    <h3>₹0</h3>
                                    <p className="paid">0 Unbilled Activity</p>
                                </div>
                                <div class="card3">
                                    <div class="activity-heading">
                                        <h2>Unpaid Last 365 Days</h2>
                                    </div>
                                    <h3>₹21,00,609</h3>
                                    <p className="paid">12 Overdue</p>
                                </div>
                                <div class="card4">
                                    <h2>₹23,50,570</h2>
                                    <p className="paid">13 Open Invoices</p>
                                </div>
                                <div class="card5">
                                    <div class="activity-heading">
                                        <h2>Paid</h2>
                                    </div>
                                    <h3>₹23,600</h3>
                                    <p className="paid">2 Paid Last 30 Days</p>
                                </div>
                            </div>
                           
                         </div>
                    </div>
                    <script src="js/jquery.min.js"></script>
                    <script src="js/popper.min.js"></script>

                </body>

            </html>
            {/* <ToastContainer /> */}

        </>
    )
}

export default AddFolder
