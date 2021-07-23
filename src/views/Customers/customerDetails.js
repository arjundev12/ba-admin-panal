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
const CustomerDetails = () => {
    //httpEquiv
    let history = useHistory();
    const { id } = useParams();
    const [show, setShow] = useState(false);
    useEffect(() => {
        loadData(id)
    }, [options])
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
    const [textInfo, setTexInfo] = useState({
        tax_rego_no: "",
        cst_reg_no: "",
        pan_no: "",
        apply_tds_customer: false

    })
    // const [paymentMethod, setPaymentMethod] = useState({
    //     preferred_payment_method: "",
    //     preferred_delivery_method: "",
    //     term: "",
    //     oppning_balance: "",
    //     as_of_date: ""

    // })

    // console.log("state 50=>",paymentMethod)
    // const { } = paymentMethod

    // console.log("state 53=>",paymentMethod)
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
        // tax_rego_no: "",
        // cst_reg_no: "",
        // pan_no: "",
        // apply_tds_customer: false,
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

    const { preferred_payment_method, preferred_delivery_method, term, oppning_balance, as_of_date, is_sub_customer, name, first_name, middle_name, last_name, suffix, company_name, display_name, gst_registration_type
        , gstin_no, email, number, mobile_no, fax, other, website, Shipping_Address_copy, notes, } = formData
    const { tax_rego_no, cst_reg_no, pan_no, apply_tds_customer } = textInfo
    const [invoiceList, setInvoiceList] = useState([])
    const loadData = async (id) => {
        let reqdata = {_id : id}
        let response0 = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-invoice-list`,reqdata);
        console.log("response0",response0.data.data)
        if(response0.data.code == 200){
            setInvoiceList(response0.data.data.docs)
        }


        let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/customer-details/${id}`);
        console.log(response.data.data.tax_info)
        if (response.data.code == 200) {
            toast("Add successfully");
            await setCustomer(response.data.data)
            await setFormData(response.data.data)

            await setAddress({
                b_street: response.data.data.billing_address.street,
                b_city: response.data.data.billing_address.city,
                b_state: response.data.data.billing_address.state,
                b_pin: response.data.data.billing_address.pin,
                b_country: response.data.data.billing_address.country,
                s_street: response.data.data.shipping_address.street,
                s_city: response.data.data.shipping_address.city,
                s_state: response.data.data.shipping_address.state,
                s_pin: response.data.data.shipping_address.pin,
                s_country: response.data.data.shipping_address.country
            })
            // //  setFormData({...formData ,tax_rego_no: response.data.data.tax_info.tax_rego_no, cst_reg_no: response.data.data.tax_info.cst_reg_no, pan_no: response.data.data.tax_info, apply_tds_customer: response.data.data.tax_info.apply_tds_customer })
            // await setFormData({ ...formData, tax_rego_no: response.data.data.tax_info.tax_rego_no })
            // await setFormData({ ...formData, cst_reg_no: response.data.data.tax_info.cst_reg_no })
            // await setFormData({ ...formData, pan_no: response.data.data.tax_info.pan_no })
            await setTexInfo(response.data.data.tax_info)
            // await setFormData(response.data.data.payment_and_billing)
            await setFormData({ ...formData, preferred_delivery_method: response?.data?.data?.payment_and_billing?.preferred_delivery_method })
            await setFormData({ ...formData, term: response?.data?.data?.payment_and_billing?.term })
            await setFormData({ ...formData, as_of_date: response?.data?.data?.payment_and_billing?.as_of_date })
            await setFormData({ ...formData, oppning_balance: response?.data?.data?.payment_and_billing?.oppning_balance })
            await setFormData({ ...formData, preferred_payment_method: response?.data?.data?.payment_and_billing?.preferred_payment_method })
        } else {
            console.log("response", response)
        }
    }

    const onInputChangeD = async (e) => {
        console.log("enchor tag data , ", e.target.name)
        let filter = {}
        if (e.target.name == 'option-1') {
            setOptions({ ...options, newCustomer: true })
        }
        if (e == 'option-1') {
            setOptions({ ...options, newCustomer: true })
        }
        if (e == 'option-2') {
            setOptions({ ...options, invoice: true })
        }

    };


    const [key1, setKeylist] = useState('transaction-list');
    //////////////////////////////////edit ///////////////////////////////////
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
    
    const onInputChangeAddress = async (e) => {
        console.log("targat", e.target.name, e.target.value)
        setAddress({ ...address, [e.target.name]: e.target.value });
    }
    const { b_street, b_city, b_state, b_pin, b_country, s_street, s_city, s_state, s_pin, s_country } = address
    const [customerbiId, setCustomerbiId] = useState([])
    const handleShowDropdown = async (e) => {
        console.log("targat", e.target.name, e.target.value, localStorage.getItem('subadminid'), is_sub_customer)
        if (e.target.name == 'is_sub_customer') {
            if (!is_sub_customer) {
                let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-customer?_id=${localStorage.getItem('subadminid')}`);
                if (response.data.code == 200) {
                    toast("Add successfully");
                    setCustomerbiId(response.data.data)
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
        if (e.target.name == 'email') {
            handleFormValidation()
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    // const onInputChangeD = async (e) => {
    //     let filter = {}
    //     if (e == 'option-1') {
    //         setOptions({ ...options, newCustomer: true })
    //     }
    //     if (e == 'option-2') {
    //         setOptions({ ...options, invoice: true })
    //     }

    // };
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
            data.tax_info = textInfo
            data.payment_and_billing = {
                preferred_payment_method: preferred_payment_method,
                preferred_delivery_method: preferred_delivery_method,
                term: term,
                oppning_balance: oppning_balance,
                as_of_date: as_of_date
            }
            data.created_by = await localStorage.getItem('subadminid')
            console.log("data", data)
            data._id = id
            let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-customer`, data);
            if (response.data.code == 200) {
                toast("Add successfully");
                // setTimeout(function () { history.push("/users"); }, 3000);
                //     loadData()
                //    await setOptions({ ...options, newCustomer: false })

                history.push(`/customerlist/`);
            } else {
                console.log("response", response)
            }
        }
    }
    const [key, setKey] = useState('address');
    // const [key1, setKeylist] = useState('transaction-list');
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

                                <div class="col-md-7 col-sm-7"><div class="header-rightside hh">
                                    <ul class="list-inline header-top">
                                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                        </a>
                                        {/* <li class="edit-text"><a href="#">Edit</a></li> */}
                                        <li class="edit-text"><a name='option-1' onClick={e => onInputChangeD(e)}>Edit</a></li>

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
                                                        {invoiceList.map((item, i) => <tr><td><input type="checkbox" value="" /></td>
                                                            {/* <td >{i + 1}</td> */}
                                                            <td ><a > {item.invoice_date}</a></td>
                                                            <td ><a >{item.type1}</a></td>
                                                            <td ><a > {item.invoice_number}</a></td>
                                                            <td ><a > {item.statement_message}</a></td>
                                                            <td ><a > {item.due_date}</a></td>

                                                            <td ><a > {item.total}</a></td>
                                                            <td ><a > {item.subtotal}</a></td>
                                                            <td ><a>{item.products_meta[0].tax}</a></td>
                                                            <td ><a > {item.total}</a></td>
                                                            <td ><a > {item.status}</a></td>
                                                            <td > <i class="fa fa-angle-down"></i></td></tr>)
                                                        }
                                                        {/* <tr>
                                                            
                                                        </tr> */}


                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="customer-details" title="Customers Details">
                                            {/* <li class="edit-text"><a name='option-1' onClick={e => onInputChangeD(e)}>Edit</a></li> */}
                                            <a class="edit-btn1" name='option-1' onClick={e => onInputChangeD(e)}>Edit</a>
                                            <form>
                                                <div class="row">

                                                    <div class="col-sm-6 ss">
                                                        <div class="form-group form-input">
                                                            <label>Customer</label>
                                                            <div class="data">{first_name}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Email</label>
                                                            <div class="data">{email}</div>

                                                        </div>
                                                        {/* <div class="form-group form-input">
                                 <label>Phone</label>
                                 <div class="data">{mobile_no}</div>
                              </div> */}
                                                        <div class="form-group form-input">
                                                            <label>Mobile</label>
                                                            <div class="data">{mobile_no}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Fax</label>
                                                            <div class="data">{fax}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Other</label>
                                                            <div class="data">{other}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Website</label>
                                                            <div class="data">{website}</div>
                                                        </div>
                                                        <div class="form-group custom-detail-input" >
                                                            <label>Notes</label>
                                                            <textarea type="text" name="notes" value={notes} class="form-control" placeholder="Add Notes" onChange={(e) => onInputChange(e)}></textarea>
                                                        </div>
                                                        <div class="form-group custom-detail-input">
                                                            <label>Attachments</label>
                                                            <input type="file" name="doc" class="form-control attach" onChange={e => onSetFile(e)} ></input>
                                                        </div>

                                                    </div>

                                                    <div class="col-sm-6 ss1">
                                                        <div class="form-group form-input">
                                                            <label>Billing Address</label>
                                                            <div class="data">{b_street}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Shipping Address</label>
                                                            <div class="data">{s_street}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Terms</label>
                                                            <div class="data">{term}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Payment Method</label>
                                                            <div class="data">{preferred_payment_method}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Preferred Delivery Method</label>
                                                            <div class="data">{preferred_delivery_method}</div>
                                                            {/* <input type="text" name="" class="form-control" placeholder="None" disabled /> */}
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>Tax reg.no</label>
                                                            <div class="data">{tax_rego_no}</div>
                                                        </div>
                                                        <div class="form-group form-input">
                                                            <label>CST Identifier.no</label>
                                                            <div class="data">{cst_reg_no}</div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </form>

                                        </Tab>
                                    </Tabs>
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
                                                                            {customerbiId.map(item => (
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

export default CustomerDetails
