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
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import html2canvas from 'html2canvas';
import '../../css/style.css'
import setting1 from  '../../assets/settings.png'
import export1 from  '../../assets/export.png'
import print from  '../../assets/printer.png'


const CustomerList = () => {
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
        console.log("targat", e.target.name, e.target.value, localStorage.getItem('subadminid'))
        if (e.target.name == 'is_sub_customer') {
            if (!is_sub_customer) {
                let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-customer?_id=${localStorage.getItem('subadminid')}`);
                console.log("responsedayaa", response)
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
        if(e.target.name=='redirect'){
            if (e.detail === 0){
                history.push(e.target.value);
            }
        }
        if(e.target.name=='email'){
            handleFormValidation()
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
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
    const [formErrors, setFormErrors] = useState({});
    const handleFormValidation = async () => {
        let formErrors = {};
        let formIsValid = true;
        //price number    
        if (!email && email == "") {
            formIsValid = false;
            formErrors["emailErr"] = "email is required.";
        } else if (email) {
            var mobPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!mobPattern.test(email)) {
                formIsValid = false;
                formErrors["emailErr"] = "Please enter valid email address.";
            }
        }
        setFormErrors(formErrors);
        return formIsValid;
    }
    const { emailErr } = formErrors
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("form data", formData, address)
        let checkvalidation = await handleFormValidation()
        if (checkvalidation) {
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


    }
    const [key, setKey] = useState('address');
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
    /////////////////////////////////////////////////generatePdfFile////////////////////////////////
    const generatePdfFile = (array)=>{
        const doc = new jsPDF('p','pt');
        const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
        const tableRows = [["1","invoice","this is dird","active","tommarow"]];
        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        // tickets.forEach(ticket => {
        //     const ticketData = [
        //       ticket.id,
        //       ticket.title,
        //       ticket.request,
        //       ticket.status,
        //       // called date-fns to format the date on the ticket
        //       format(new Date(ticket.updated_at), "yyyy-MM-dd")
        //     ];
        //     // push each tickcet's info into a row
        //     tableRows.push(ticketData);
        //   });
        // doc.text("Hello world!", 10, 10);
        // doc.setFont('courier')
        // doc.setFontType('normal')
    //     doc.text( 10, 20 ,`${<div class="col-md-5 col-sm-5 pd-0">
    //     <h2 class="customer">Customers</h2>
    // </div>}`,);
        // html2canvas( doc.text).then(function(canvas) {
        //       doc.text.appendChild(canvas);
        // });
        // doc.save("a4.pdf");
        doc.save("generated.pdf");
    }
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
                            <div class="col-md-7 col-sm-7 pd-0">
                                <div class="header-rightside">
                                    <ul class="list-inline header-top">
                                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                        </a>
                                        <li class="hidden-xs new-customer">
                                            {/* <a href="#" class="add-project" data-toggle="modal" data-target="#add_project"><select name="fontType" id="fontType" class="form-control">
                                                <option value="">New Customer</option>
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
                                            <DropdownButton className='fltR' alignRight
                                                title="New Customer"
                                                id="dropdown-menu-align-right"

                                                onSelect={e => onInputChangeD(e)}>
                                                <Dropdown.Item eventKey="option-1" >New Customer</Dropdown.Item>
                                                <Dropdown.Item eventKey="option-2">Invoice</Dropdown.Item>
                                            </DropdownButton>
                                        </li>
                                    </ul>
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
                            <div class="col-md-5 col-sm-5 pd-0">
                                <div id="custom-search-input">
                                    <div class="input-group">
                                        <input type="text" class="  search-query form-control" placeholder="Search" name="text" onChange={e => onInputSearch(e)} />
                                        <span class="input-group-btn">
                                            <button class="btn btn-danger" type="button">
                                                <i class="fa fa-search" aria-hidden="true"></i>

                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-sm-7 pd-0">
                                <ul class="icon-right">
                                    <li><a ><img src={setting1}/></a></li>
                                    <li><a ><img src={export1}/></a></li>
                                    <li><button   onClick ={()=>generatePdfFile()} ><img src={print}/></button></li>

                                </ul>
                            </div>

                            <div class="container-fluid pd-0">
                                <div class="customer-table">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Customer/Company</th>
                                                <th>GST REGISTRATION TYPE</th>
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
                                                    <td><a href={`#/customer-details/${item._id}`}> {item.first_name}</a></td>
                                                    {/* <Link to={`/customer-details/${item._id}`}> <td>{item.first_name}</td></Link> */}
                                                    <td><a href={`#/customer-details/${item._id}`}> {item.gst_registration_type}</a></td>
                                                    <td><a href={`#/customer-details/${item._id}`}> {item.gstin}</a></td>
                                                    <td><a href={`#/customer-details/${item._id}`}> {item.number}</a></td>
                                                    <td><a href={`#/customer-details/${item._id}`}> {item.payment_and_billing.oppning_balance}</a></td>
                                                    {/* <td>{item.gst_registration_type}</td>
                                                    <td>{item.gstin}</td>
                                                    <td>{item.number}</td>
                                                    <td>{item.payment_and_billing.oppning_balance}</td> */}
                                                    {/* <td><Link to = {`/add/invoice/${item._id}`}>CREATE INVOICE</Link></td> */}
                                                    <td>
                                <select class="form-control" name="redirect" 
                                    onClick={e => onInputChange(e, item)}>
                                            {/* <option value= {""} ></option> */}
                                    <option value= {`/add/invoice/${item._id}`} >create invoice</option>
                                    <option value={`/recieve/invoice/${item._id}`}>recieve Invoice</option>
                                </select></td>
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
                                                        {emailErr &&
                                                            <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
                                                        }
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
                                            <div class="col-md-12 mb-4 panel-tabs-content">
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
                                                                                <textarea rows="5" name="s_street" value={s_street} class="form-control" placeholder="Street" disabled={Shipping_Address_copy == true ? "disabled" : ""} onChange={(e) => onInputChangeAddress(e)}></textarea>
                                                                            </div>
                                                                            <div class="form-group col-sm-6 pd-0">
                                                                                <input type="text" name="s_city" value={s_city} class="form-control" placeholder="City/Town" disabled={Shipping_Address_copy == true ? "disabled" : ""} onChange={(e) => onInputChangeAddress(e)} />
                                                                            </div>
                                                                            <div class="form-group col-sm-6 pd-0">
                                                                                <input type="text" name="s_state" value={s_state} class="form-control" placeholder="State" disabled={Shipping_Address_copy == true ? "disabled" : ""} onChange={(e) => onInputChangeAddress(e)} />
                                                                            </div>
                                                                            <div class="form-group col-sm-6 pd-0">
                                                                                <input type="text" name="s_pin" value={s_pin} class="form-control" placeholder="PIN Code" disabled={Shipping_Address_copy == true ? "disabled" : ""} onChange={(e) => onInputChangeAddress(e)} />
                                                                            </div>
                                                                            <div class="form-group col-sm-6 pd-0">
                                                                                <input type="text" name="s_country" value={s_country} class="form-control" placeholder="Country" disabled={Shipping_Address_copy == true ? "disabled" : ""} onChange={(e) => onInputChangeAddress(e)} />
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="notes" title="Notes">
                                                        <label>Notes</label>
                                                        <div class="tab-pane input-textarea" >
                                                            <textarea type="text" name="notes" value={notes} class="form-control" placeholder="2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in m.
                         "  onChange={(e) => onInputChange(e)}></textarea>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="Tax-Info" title="Tax Info">
                                                    <div className="row">
                                                        <div className="col-sm-6">
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
                                                        </div>
                                                        <div className="col-sm-6">
                                                        <div class="form-group checkbox-content1">
                                                            <input type="checkbox" id="html" defaultChecked={apply_tds_customer} name='apply_tds_customer' onChange={e => handleShowDropdown(e)} />
                                                            <label for="html">Apply TDS for this customer</label>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="Payment-and-Billing" title="Payment and Billing" >
                                                        <div className="row">
                                                        <div class="md-6 col-sm-6">
                                                            <div class="form-group display">
                                                                <label>Preferred payment method</label>
                                                                <select name="preferred_payment_method" value={preferred_payment_method} id="fontType" class="form-control" onChange={e => handleShowDropdown(e)}>
                                                                    <option value="cash">Cash</option>
                                                                    <option value="cheque" >Cheque</option>
                                                                    <option value="credit_Card">Credit Card</option>
                                                                </select>
                                                                {/* {preferred_payment_method == 'credit_Card' ? <button name="carddetails" onClick={e => openCardModal(e)}>enter credit card detail</button> : ""} */}
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
                                                     
                                                            <div class="form-group display">
                                                                <label>as of</label>
                                                                <input type="date" name="as_of_date" value={as_of_date} class="form-control" onChange={(e) => onInputChange(e)} />
                                                            </div>
                                                        </div>
                                                       
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="Attachments" title="Attachments" >
                                                        <div className="md-6 col-sm-6"></div>
                                                        <input type="file" name="doc" class="form-control attach" onChange={e => onSetFile(e)} ></input>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
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

                            </div> </div>
                    </div>
                </div>
                <script src="js/jquery.min.js"></script>
                <script src="js/popper.min.js"></script>
            </body>
        </>
    )
}

export default CustomerList
