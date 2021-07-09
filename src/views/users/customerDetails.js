import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown, Modal, Tabs, Tab, Sonnet } from 'react-bootstrap'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'

import '../../css/style.css'
const CustomerDetails = () => {
  //httpEquiv
  let history = useHistory();
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState({
    newCustomer: false,
    invoice: false
  })
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
    console.log(response.data)
    if (response.data.code == 200) {
        toast("Add successfully");
        setCustomer(response.data.data)
    } else {
        console.log("response", response)
    }
}
 
  const onInputChangeD = async (e) => {
    let filter = {}
    if (e == 'option-1') {
      setOptions({ ...options, newCustomer: true })
    }
    if (e == 'option-2') {
      setOptions({ ...options, invoice: true })
    }

  };
 

  const [key1, setKeylist] = useState('transaction-list');

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
                    <h2 class="customer-list">{customer.first_name ?customer.first_name: "" }</h2>
                    <ul>
                      <li><a href="#"><i class="fa fa-envelope-o"></i></a></li>
                      <li><span tooltip="9582089971" flow="down"><i class="fa fa-phone"></i></span></li>
                      <div class="main">
                      </div>
                    </ul>
                    <p>{customer.first_name} |{customer.shipping_address.street}</p>
                    <div class="form-group">
                  <br/>
                      <label>Notes</label>
                      <textarea class="form-control" rows="5" id="comment" value= {customer.notes} placeholder="Add Notes"></textarea>
                    </div>
                  {/* </div>} */}

                </div>

                <div class="col-md-7 col-sm-7"><div class="header-rightside hh">
                  <ul class="list-inline header-top">
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                    </a>
                    <li class="edit-text"><a href="#">Edit</a></li>

                    <li class="hidden-xs new-customer">
                      <DropdownButton className='fltR' alignRight
                        title="New Transaction"
                        id="dropdown-menu-align-right"
                        onSelect={e => onInputChangeD(e)}>
                        <Dropdown.Item value="invoice">Invoice</Dropdown.Item>
                        <Dropdown.Item value="payment">Payment</Dropdown.Item>
                        <Dropdown.Item value="estimate">Estimate</Dropdown.Item>
                        <Dropdown.Item value="sales-receipt">Sales Receipt</Dropdown.Item>
                        <Dropdown.Item value="credit-note">Credit Note</Dropdown.Item>
                        <Dropdown.Item value="delayed charge">Delayed Charge</Dropdown.Item>
                        <Dropdown.Item value="time-activity">Time Activity</Dropdown.Item>
                        <Dropdown.Item value="customer-statement">Customer Statement</Dropdown.Item>
                      </DropdownButton>
                      {/* <a href="#" class="add-project" data-toggle="modal" data-target="#add_project"><select name="fontType" id="fontType" class="form-control">
                        <option value=""  onClick={e => handleShowDropdown(e)}>New Customer</option>
                        <option value="">Invoice</option>
                        <option value="">Payment</option>
                        <option value="">Estimate</option>
                        <option value="">Sales Receipt</option>
                        <option value="">Credit Note</option>
                        <option value="">Delayed Charge</option>
                        <option value="">Time Activity</option>
                        <option value="">Customer Statement</option>
                      </select>
                      </a> */}
                    </li>

                  </ul>
                  <div class="ibnslight-content">
                    <div class="insights__amount-text">
                      <h2>₹0.00</h2>
                      <p>OPEN</p>
                    </div>
                    <div class="insights__amount-text stage__insight--overdue">
                      <h2>₹0.00</h2>
                      <p>OVERDUE</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 mb-4 pt-15">
                
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key1}
                    onSelect={(k) => setKeylist(k)}
                  >
                    <Tab eventKey="transaction-list" title="Transaction List">
                      <div class="customer-table1">
                        <table class="table" cellspacing="0">
                          <thead>
                            <tr>
                              <th><input type="checkbox" value="" /></th>
                              <th > Date</th>
                              <th >Type</th>
                              <th >No</th>
                              <th >Memo</th>
                              <th >Due Date</th>
                              <th >Balance</th>
                              <th >Total Before</th>
                              <th >Tax</th>
                              <th >Total</th>
                              <th >Status</th>
                              <th >Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <!--1--> */}
                            <tr>
                              <td><input type="checkbox" value="" /></td>
                              <td ><a href="#">23/08/2022</a></td>
                              <td >Invoice</td>
                              <td >5036</td>
                              <td ></td>
                              <td >23/08/2022</td>
                              <td >₹0.00</td>

                              <td >₹70,000.00</td>
                              <td >₹12,600.00</td>
                              <td >₹82,600.00</td>
                              <td >Paid</td>
                              <td >Print <i class="fa fa-angle-down"></i></td>
                            </tr>
                            {/* <!--2--> */}
                            <tr>
                              <td ><input type="checkbox" value="" /></td>
                              <td ><a href="#">23/08/2022</a></td>
                              <td >Invoice</td>
                              <td >5036</td>
                              <td ></td>
                              <td >23/08/2022</td>
                              <td >₹0.00</td>

                              <td >₹70,000.00</td>
                              <td >₹12,600.00</td>
                              <td >₹82,600.00</td>
                              <td >Paid</td>
                              <td >Print <i class="fa fa-angle-down"></i></td>
                            </tr>
                            {/* <!--3--> */}
                            <tr>
                              <td><input type="checkbox" value="" /></td>
                              <td ><a href="#">23/08/2022</a></td>
                              <td >Invoice</td>
                              <td >5036</td>
                              <td ></td>
                              <td >23/08/2022</td>
                              <td >₹0.00</td>

                              <td >₹70,000.00</td>
                              <td >₹12,600.00</td>
                              <td >₹82,600.00</td>
                              <td >Paid</td>
                              <td >Print <i class="fa fa-angle-down"></i></td>
                            </tr>
                            {/* <!--4--> */}
                            <tr>
                              <td ><input type="checkbox" value="" /></td>
                              <td ><a href="#">23/08/2022</a></td>
                              <td >Invoice</td>
                              <td >5036</td>
                              <td ></td>
                              <td >23/08/2022</td>
                              <td >₹0.00</td>
                              <td >₹70,000.00</td>
                              <td >₹12,600.00</td>
                              <td >₹82,600.00</td>
                              <td >Paid</td>
                              <td >Print <i class="fa fa-angle-down"></i></td>
                            </tr>
                            {/* <!--5--> */}
                            <tr>
                              <td></td>
                              <td ><a href="#"></a></td>
                              <td >Total</td>
                              <td ></td>
                              <td ></td>
                              <td ></td>
                              <td ></td>
                              {/* <!-- <td>Create Invoice<i class="fa fa-angle-down"></i>
</td> --> */}
                              <td ></td>
                              <td ></td>
                              <td >₹120,60,00.00</td>
                              <td ></td>
                              <td ></td>
                            </tr>


                          </tbody>
                        </table>
                      </div>
                    </Tab>
                    <Tab eventKey="customer-details" title="Customers Details">
                    <form >
          <div class="row">
            <div class="form-group col-sm-6">
              <label>Name </label>
              <input type="text" name="name" class="form-control" placeholder="" value={customer.first_name}
                 />
            </div>
            <div class="form-group col-sm-6">
              <label>Address</label>
              <input type="text" name="password" class="form-control" placeholder="" value={customer.shipping_address.street}
                 />
            </div>
            <div class="form-group col-sm-6">
              <label>email</label>
              <input type="text" name="username" class="form-control" placeholder="" value={customer.email}
                 />
            </div>
            {/* <div class="form-group col-sm-6">
              <label>Email</label>
              <input type="text" name="email" class="form-control" placeholder="" value={email}
                 />
            </div> */}
            {/* <div class="col-sm-12">
              <button className="btn btn-primary" >Submit</button>
            </div> */}

          </div>
        </form>
      
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <script src="js/jquery.min.js"></script>
          <script src="js/popper.min.js"></script>

        </body>

      </html>
      <ToastContainer />

    </>
  )
}

export default CustomerDetails
