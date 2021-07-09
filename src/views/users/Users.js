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
const Users = () => {
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
  const loadData = async (page, filters = null) => {
    const data = {
      page: page,
      limit: 10
    }

    if (!(Object.keys(filters).length === 0 && filters.constructor === Object)) {
      data.sort = filters
    }
    if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
      data.toId = search.text
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
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState({
    newCustomer: false,
    invoice: false
  })
  const handleCloseCity = (e) => {
    if (e.target.name == 'newCustomer') {
      setOptions({ ...options, newCustomer: false });
    }
    if (e.target.name == 'invoice') {
      setOptions({ ...options, invoice: false })
    }
    if (e.target.name == 'cardDetail') {
      setCardModal(false)
    }
  }
  const [gstin, setGstin] = useState(false)
  const [formData, setFormData] = useState({
    is_sub_customer: false,
    name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    suffix: "",
    company_name: "",
    display_name: "",
    gst_registration_type: "",
    gstin_no: "",
    email: "",
    number: "",
    mobile_no: "",
    fax: "",
    other: "",
    website: "",
    Shipping_Address_copy: false,
    notes: "",
    tax_rego_no: "",
    cst_reg_no: "",
    pan_no: "",
    apply_tds_customer: false,
    preferred_payment_method: "",
    preferred_delivery_method: "",
    term: "",
    oppning_balance: "",
    as_of_date: "",
    customer_meta: "",
    bill_with: ""
  })
  const [address, setAddress] = useState({
    b_street: "",
    b_city: "",
    b_state: "",
    b_pin: "",
    b_country: "",
    s_street: "",
    s_city: "",
    s_state: "",
    s_pin: "",
    s_country: ""
  })

  const { is_sub_customer, name, first_name, middle_name, last_name, suffix, company_name, display_name, gst_registration_type
    , gstin_no, email, number, mobile_no, fax, other, website, Shipping_Address_copy, notes, tax_rego_no, cst_reg_no, pan_no,
    apply_tds_customer, preferred_payment_method, preferred_delivery_method, term, oppning_balance, as_of_date } = formData
  const onInputChangeAddress = async (e) => {
    console.log("targat", e.target.name, e.target.value)
    setAddress({ ...address, [e.target.name]: e.target.value });
  }
  const { b_street, b_city, b_state, b_pin, b_country, s_street, s_city, s_state, s_pin, s_country } = address
  const [customer, setCustomer] = useState([])
  const handleShowDropdown = async (e) => {
    console.log("targat", e.target.name, e.target.value)
    if (e.target.name == 'is_sub_customer') {
      if (!is_sub_customer) {
        let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-customer?_id=${localStorage.getItem('subadminid')}`);
        if (response.data.code == 200) {
          toast("Add successfully");
          setCustomer(response.data.data)
          // setTimeout(function () { history.push("/users"); }, 3000);
          // history.push("/users");
        } else {
          console.log("response", response)
        }
      }
      console.log("response", customer)
      setFormData({ ...formData, is_sub_customer: !is_sub_customer });

    }
    else if (e.target.name == 'preferred_payment_method') {
      setFormData({ ...formData, preferred_payment_method: e.target.value });
    }
    else if (e.target.name == 'preferred_delivery_method') {
      setFormData({ ...formData, preferred_delivery_method: e.target.value });
    }
    else if (e.target.name == 'term') {
      setFormData({ ...formData, term: e.target.value });
    }
    else if (e.target.name == 'Shipping_Address_copy') {
      setFormData({ ...formData, Shipping_Address_copy: !Shipping_Address_copy });
      setAddress({
        ...address,
        s_street: b_street,
        s_city: b_city,
        s_state: b_state,
        s_pin: b_pin,
        s_country: b_country
      });
    }

    else if (e.target.value == 'GST_registered_Regular') {
      setGstin(true);
      setFormData({ ...formData, gst_registration_type: "GST_registered_Regular" });
    }
    ///////////////////////////
    else if (e.target.value == 'GST_registered_Composition') {
      setGstin(true);
      setFormData({ ...formData, gst_registration_type: "GST_registered_Composition" });
    }
    else if (e.target.value == 'GST_unregistered') {
      setGstin(false);
      setFormData({ ...formData, gst_registration_type: "GST_unregistered" });
    }
    else if (e.target.value == 'Consumer') {
      setGstin(false);
      setFormData({ ...formData, gst_registration_type: "Consumer" });
    }
    else if (e.target.value == 'Overseas') {
      setGstin(false);
      setFormData({ ...formData, gst_registration_type: "Overseas" });
    }
    else if (e.target.value == 'SEZ') {
      setGstin(true);
      setFormData({ ...formData, gst_registration_type: "SEZ" });
    }
    else if (e.target.value == 'Deemed_exports') {
      setGstin(true);
      setFormData({ ...formData, gst_registration_type: "Deemed_exports" });
    }
  }
  const { newCustomer, invoice } = options
  const onInputChange = async (e) => {
    console.log("formData", formData)
    console.log("targat", e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  const onInputChangeD = async (e) => {
    let filter = {}
    if (e == 'option-1') {
      setOptions({ ...options, newCustomer: true })
    }
    if (e == 'option-2') {
      setOptions({ ...options, invoice: true })
    }

  };
  const [cardModal, setCardModal] = useState(false)
  const openCardModal = async (e) => {
    console.log("hiiiiiiiii", e.target.name, cardModal)
    setCardModal(!cardModal)
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("form data", formData, address)
    let data = formData
    if (address) {
      data.billing_address = {
        street: b_street,
        city: b_city,
        country: b_country,
        pin: b_pin,
        state: b_state
      }
      data.shipping_address = {
        street: s_street,
        city: s_city,
        country: s_country,
        pin: s_pin,
        state: s_state
      }
    }
    data.company = {
      company_name: company_name
    }
    data.gstin = gstin_no
    data.tax_info = {
      tax_rego_no: tax_rego_no,
      cst_reg_no: cst_reg_no,
      pan_no: pan_no,
      apply_tds_customer: apply_tds_customer

    }
    data.payment_and_billing = {
      preferred_payment_method: preferred_payment_method,
      preferred_delivery_method: preferred_delivery_method,
      term: term,
      oppning_balance: oppning_balance,
      as_of_date: as_of_date
    }
    data.created_by = await localStorage.getItem('subadminid')
    console.log("data", data)
    let response = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-customer`, data);

    if (response.data.code == 200) {
      toast("Add successfully");
      // setTimeout(function () { history.push("/users"); }, 3000);
      history.push("/users");
    } else {
      console.log("response", response)
    }

  }
  const [key, setKey] = useState('home');
  const [key1, setKeylist] = useState('transaction-list');


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
                  {  <div class="card-box">
                    <div class="card1">
                      <h2>₹23,50,570</h2>
                      <p>26 Estimates</p>
                    </div>
                    <div class="card2">
                      <div class="activity-heading">
                        {/* <h2>Unbilled Last 365 Days</h2> */}
                      </div>
                      <h2>₹0</h2>
                      <p>0 Unbilled Activity</p>
                    </div>
                    <div class="card3">
                      <div class="activity-heading">
                        {/* <h2>Unpaid Last 365 Days</h2> */}
                      </div>
                      <h2>₹21,00,609</h2>
                      <p>12 Overdue</p>
                    </div>
                    <div class="card4">
                      <h2>₹23,50,570</h2>
                      <p>13 Open Invoices</p>
                    </div>
                    <div class="card5">
                      <div class="activity-heading">
                        {/* <h2>Paid</h2> */}
                      </div>
                      <h2>₹23,600</h2>
                      <p>2 Paid Last 30 Days</p>
                    </div>
                  </div>
                 }

                </div>

                <div class="col-md-7 col-sm-7"><div class="header-rightside hh">
                  <ul class="list-inline header-top">
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                    </a>
                    <li class="edit-text"><a href="#">Edit</a></li>

                    <li class="hidden-xs new-customer">
                      <DropdownButton className='fltR' alignRight
                        title="New Customer"
                        id="dropdown-menu-align-right"

                        onSelect={e => onInputChangeD(e)}>
                        <Dropdown.Item eventKey="option-1" >New Customer</Dropdown.Item>
                        <Dropdown.Item eventKey="option-2">Invoice</Dropdown.Item>
                      </DropdownButton>
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
                  {/* <DropdownButton className='fltR' alignRight
                    title="filter"
                    id="dropdown-menu-align-right"

                    onSelect={e => onInputChange(e)}>
                    <Dropdown.Item eventKey="option-1">Customer</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">Company</Dropdown.Item>
                  </DropdownButton> */}
                 <div class="col-md-5 col-sm-5">
                    <div id="custom-search-input">
                      <div class="input-group">
                        <input type="text" class="  search-query form-control" placeholder="Search" />
                        <span class="input-group-btn">
                          <button class="btn btn-danger" type="button">
                            <i class="fa fa-search" aria-hidden="true"></i>

                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>GST REGISTRATION TYPE11</th>
                        <th>GSTIN </th>
                        <th>PHONE</th>
                        {/* <th>Minner Status</th> */}
                        <th>OPEN BALANCE</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        customerlist.map((item, i) => <tr>
                          <td>{i + 1}</td>
                          <td>{item.gst_registration_type}</td>
                          <td>{item.gstin}</td>
                          <td>{item.number}</td>
                          <td>{"00"}</td>
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

                </div>
              </div>
            </div>
          </div>
          <div id="add_project" class="modal fade" role="dialog">
            <div class="modal-dialog">
              <div>
                <Modal show={newCustomer} >
                  <Modal.Header closeButton >
                    <Modal.Title>{"cityData.name"}</Modal.Title>
                  </Modal.Header>
                  <div class="modal-content">
                    <div class="modal-header login-header">
                      <h4 class="modal-title">Customers Information</h4>
                      <button type="button" class="close" data-dismiss="modal" name='newCustomer' onClick={handleCloseCity}>×</button>

                    </div>
                    <div class="row mt-60">
                      <div class="col-md-6 col-sm-6">
                        <div class="modal-body">
                          <div class="form-content">
                            <div class="form-group name">
                              <label>Name</label>
                              <input type="text" name="name" value={name} class="form-control" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group first-name mr-10">
                              <label>First Name</label>
                              <input type="text" name="first_name" value={first_name} class="form-control" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group middle-name mr-10">
                              <label>Middle Name</label>
                              <input type="text" name="middle_name" value={middle_name} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group last-name mr-10">
                              <label>Last Name</label>
                              <input type="text" name="last_name" value={last_name} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group suffix mr-10">
                              <label>Suffix</label>
                              <input type="text" name="suffix" value={suffix} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                          </div>
                        </div>
                        <div class="form-group content-bg">
                          <label>Company</label>
                          <input type="text" name="company_name" value={company_name} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                        </div>
                        <div class="form-group display">
                          <label><sup>**</sup>Display name as</label>
                          <input type="text" name="display_name" value={display_name} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                        </div>
                        <div class="row">
                          <div class="md-6 col-sm-6">
                            <div class="form-group display">
                              <label>GST Registration Type</label>
                              <select name="gst_registration_type" id="fontType" value={gst_registration_type} class="form-control" onChange={e => handleShowDropdown(e)}>
                                <option value="GST_registered_Regular">GST registered- Regular</option>
                                <option value="GST_registered_Composition" >GST registered- Composition</option>
                                <option value="GST_unregistered">GST unregistered</option>
                                <option value="Consumer" >Consumer</option>

                                <option value="Overseas" >Overseas</option>
                                <option value="SEZ" >SEZ</option>
                                <option value="Deemed_exports" >Deemed exports- EOU's, STP's EHTP's etc</option>
                              </select>
                              <span>What is GST registration type?</span>
                            </div>
                          </div>
                          <div class="md-6 col-sm-6 gst-bg">
                            <div class="form-group">
                              <label>GSTIN</label>
                              <input type="text" name="gstin_no" value={gstin_no} class="form-control" placeholder="for eg.09AADCA1572H1ZS" disabled={gstin == false ? "disabled" : ""} onChange={(e) => onInputChange(e)} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <div class="modal-body">
                          <div class="form-group mail-bg">
                            <label>Email</label>
                            <input type="text" name="email" value={email} class="form-control" placeholder="Separate Multiple Email" onChange={(e) => onInputChange(e)} />
                          </div>
                          <div class="form-right">
                            <div class="form-group phone">
                              <label>Phone</label>
                              <input type="text" name="number" value={number} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group phone mr-10">
                              <label>Mobile</label>
                              <input type="text" name="mobile_no" value={mobile_no} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group fax mr-10">
                              <label>Fax</label>
                              <input type="text" name="fax" value={fax} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                          </div>
                          <div class="form-right">
                            <div class="form-group phone">
                              <label>Other</label>
                              <input type="text" name="other" value={other} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group website mr-10">
                              <label>Websites</label>
                              <input type="text" name="website" value={website} class="form-control" placeholder="" onChange={(e) => onInputChange(e)} />
                            </div>
                          </div>
                          <div class="form-group checkbox-content">
                            <input type="checkbox" id="html" defaultChecked={is_sub_customer} name='is_sub_customer' onChange={e => handleShowDropdown(e)} />
                            <label for="html">Is Sub-Customer</label>
                          </div>
                          <div class="form-box">
                            {/* <div class="form-group parent"> */}
                            {/* <input type="text" name="customer_meta" class="form-control" placeholder="Enter Parent Customer" disabled={is_sub_customer == false ? "disabled" : ""} /> */}

                            <select class="form-control" name="customer_meta" disabled={is_sub_customer == false ? "disabled" : ""}
                              onChange={e => onInputChange(e)} >
                              {customer.map(item => (
                                <option value={item}>{item.first_name}</option>
                              ))}

                              {/* <option value={"0"}>No</option> */}
                            </select>
                            {/* </div> */}
                            <div class="form-group phone bill-parent mr-10">
                              <select name="bill_with" class="form-control" disabled={is_sub_customer == false ? "disabled" : ""}
                                onChange={e => onInputChange(e)}>
                                <option value="bill_with_parent">Bill With Parent</option>
                                <option value="bill_with_this_customer">Bill With this customer</option>

                              </select>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row hh">
                      <div class="col-md-12 mb-4">
                        <Tabs
                          class="nav nav-tabs"
                          id="controlled-tab-example"
                          activeKey={key}
                          onSelect={(k) => setKey(k)}
                        >
                          <Tab eventKey="address" title="Address">
                            <div class="row">
                              <div class="col-md-6 col-sm-6">
                                <div class="UserRight">
                                  <h3>Billing address <span>map</span></h3>
                                  <form>
                                    <div class="row">
                                      <div class="form-group col-sm-12">
                                        <textarea rows="5" class="form-control" name="b_street" value={b_street} placeholder="Street" onChange={(e) => onInputChangeAddress(e)}></textarea>
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="b_city" value={b_city} class="form-control" placeholder="City/Town" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="b_state" value={b_state} class="form-control" placeholder="State" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="b_pin" value={b_pin} class="form-control" placeholder="PIN Code" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="b_country" value={b_country} class="form-control" placeholder="Country" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                <div class="UserRight background-bg">
                                  <h3>Shipping Address <span>map</span><input type="checkbox" id="html" defaultChecked={Shipping_Address_copy} name='Shipping_Address_copy' onChange={e => handleShowDropdown(e)} /><label for="html">Same as Billing address</label></h3>
                                  <form>
                                    <div class="row">
                                      <div class="form-group col-sm-12">
                                        <textarea rows="5" name="s_street" value={s_street} class="form-control" placeholder="Street" onChange={(e) => onInputChangeAddress(e)}></textarea>
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="s_city" value={s_city} class="form-control" placeholder="City/Town" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="s_state" value={s_state} class="form-control" placeholder="State" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="s_pin" value={s_pin} class="form-control" placeholder="PIN Code" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                      <div class="form-group col-sm-6 pd-0">
                                        <input type="text" name="s_country" value={s_country} class="form-control" placeholder="Country" onChange={(e) => onInputChangeAddress(e)} />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Tab>
                          <Tab eventKey="notes" title="Notes">
                            <label>Notes</label>
                            <div class="tab-pane" >
                              <textarea type="text" name="notes" value={notes} class="form-control" placeholder="2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in m.
                         "  onChange={(e) => onInputChange(e)}></textarea>
                            </div>
                          </Tab>
                          <Tab eventKey="Tax-Info" title="Tax Info">
                            <div class="form-group col-sm-6 pd-0">
                              <label>Tax Rego. N.</label>
                              <input type="text" name="tax_rego_no" value={tax_rego_no} class="form-control" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group col-sm-6 pd-0">
                              <label>CST reg. no.</label>
                              <input type="text" name="cst_reg_no" value={cst_reg_no} class="form-control" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group col-sm-6 pd-0">
                              <label>PAN No.</label>
                              <input type="text" name="pan_no" value={pan_no} class="form-control" onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="form-group checkbox-content">
                              <input type="checkbox" id="html" defaultChecked={apply_tds_customer} name='apply_tds_customer' onChange={e => handleShowDropdown(e)} />
                              <label for="html">Apply TDS for this customer</label>
                            </div>
                          </Tab>
                          <Tab eventKey="Payment-and-Billing" title="Payment and Billing" >
                            <div class="md-6 col-sm-6">
                              <div class="form-group display">
                                <label>Preferred payment method</label>
                                <select name="preferred_payment_method" value={preferred_payment_method} id="fontType" class="form-control" onChange={e => handleShowDropdown(e)}>
                                  <option value="cash">Cash</option>
                                  <option value="cheque" >Cheque</option>
                                  <option value="credit_Card">Credit Card</option>
                                </select>
                                {preferred_payment_method == 'credit_Card' ? <button name="carddetails" onClick={e => openCardModal(e)}>enter credit card detail</button> : ""}
                              </div>
                              <div class="form-group display">
                                <label>Preferred delivery method</label>
                                <select name="preferred_delivery_method" value={preferred_delivery_method} id="fontType" class="form-control" onChange={e => handleShowDropdown(e)}>
                                  <option value="print_later">Print later</option>
                                  <option value="send_later" >Send later</option>
                                </select>
                              </div>

                              <div class="form-group display">
                                <label>Terms</label>
                                <select name="term" value={term} id="fontType" class="form-control" onChange={e => handleShowDropdown(e)}>
                                  <option value="due_on_receipt">Due on receipt</option>
                                  <option value="net_15" >Net 15</option>
                                  <option value="net_30">Net 30</option>
                                  <option value="net_60">Net 60</option>
                                </select>
                              </div>
                            </div>
                            <div class="md-6 col-sm-6">
                              <div class="form-group display">
                                <label>Opening balance</label>
                                <input type="text" name="oppning_balance" value={oppning_balance} class="form-control" onChange={(e) => onInputChange(e)} ></input>
                              </div>
                            </div>
                            <div class="md-6 col-sm-6 gst-bg">
                              <div class="form-group">
                                <label>as of</label>
                                <input type="date" name="as_of_date" value={as_of_date} class="form-control" onChange={(e) => onInputChange(e)} />
                              </div>
                            </div>
                          </Tab>
                          <Tab eventKey="Attachments" title="Attachments" >
                            <div className="md-6 col-sm-6 gst-bg"></div>
                            <input type="file" name="doc" class="form-control" onChange={e => onSetFile(e)} ></input>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                    {/* <div class="row hh">
                      <div class="col-md-12 mb-4">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-expanded="true">Address</a>
                          </li>
                          <li class="nav-item pl-15">
                            <a class="nav-link" data-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-expanded="false">Notes</a>
                          </li>
                          <li class="nav-item pl-15">
                            <a class="nav-link" data-toggle="tab" href="#tax-info" role="tab" aria-controls="tax-info" aria-expanded="false">Tax Info</a>
                          </li>
                          <li class="nav-item pl-15">
                            <a class="nav-link" data-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-expanded="false">Payment and Billing</a>
                          </li>
                          <li class="nav-item pl-15">
                            <a class="nav-link" data-toggle="tab" href="#attachment" role="tab" aria-controls="attachment" aria-expanded="false">Attachments</a>
                          </li>
                        </ul>

                        <div class="tab-content bill-address">
                          <div class="tab-pane active" id="address" role="tabpanel" aria-expanded="true">

                          </div>
                          <div class="tab-pane" id="notes" role="tabpanel" aria-expanded="false">
                            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                          <div class="tab-pane" id="tax-info" role="tabpanel" aria-expanded="false">
                            3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                          <div class="tab-pane" id="payment" role="tabpanel" aria-expanded="false">
                            4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                          <div class="tab-pane" id="attachment" role="tabpanel" aria-expanded="false">
                            5. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <div class='footer-side'>
                    <Modal.Footer>
                      <Button variant="secondary" name='newCustomer' onClick={handleCloseCity}>
                        Close
                      </Button>
                      <Button variant="primary"
                        onClick={e => onSubmit(e)}
                      >
                        Submit
                      </Button>
                    </Modal.Footer>
                  </div>

                </Modal>

              </div>

            </div>
          </div>

          {/* <!-- Bootstrap and necessary plugins --> */}
          <script src="js/jquery.min.js"></script>
          <script src="js/popper.min.js"></script>
          {/* <!--   <script src="js/bootstrap.min.js"></script> -->
<!--   <script src="vendors/js/pace.min.js"></script>
  <script src="vendors/js/Chart.min.js"></script> -->
<!--   <script src="js/app.js"></script> -->
<!--   <script src="js/views/main.js"></script> --> */}



        </body>

      </html>
      <div  >
        <Modal show={cardModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title111111111111</Modal.Title>
          </Modal.Header>
          <div class="modal-header login-header">
            <h4 class="modal-title">Card Information</h4>
            <button type="button" class="close" data-dismiss="modal" name='cardDetail' onClick={handleCloseCity}>×</button>
          </div>

          <Modal.Body>
            Modal body text goeshgchgchggggggggggggggggggggcv
            vbvjhvjvjvnbnbkhvkhcvjgcgchchgcbvhg
            vjhvjhvjhvjhbkjhvkhvkhvjhvjhvjgvjh
            bvbjvjbmnbnbkhvhvbjhvjhvjhvjh here.
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" name='cardDetail' onClick={handleCloseCity}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>

      </div>
      <ToastContainer />

    </>
  )
}

export default Users
