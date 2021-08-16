import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import moment from "moment";
import { Button, Row, Col, Form, Table, DropdownButton, Dropdown, Modal, Tabs, Tab, Sonnet } from 'react-bootstrap'
import { types } from "@babel/core";

const InvoiceRecieve = () => {
    const { id } = useParams();
    let history = useHistory();
    const [startDate, setStartDate] = useState()
    useEffect(() => {
        loadData(id)
        getInvoiceData(id)
    }, [invoiceList, recievData])

    const [formData, setFormData] = useState({
        email: "",
        sent_later: false,
       

    })
    const [recievData, setRecievData] = useState({
        recieve_total :0.00,
        apply_amount: 0.00,

    })
    const {  recieve_total , apply_amount} = recievData
    const { email, sent_later} = formData

    const [customer, setCustomer] = useState([])
    const [methods, setMethods] = useState([{ name: "+add new", value: "add_new" }])

    const loadData = async (id) => {
        let response0 = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-customer?_id=${localStorage.getItem('subadminid')}`);
        // console.log("responsedayaa", response0)
        if (response0.data.code == 200) {
            toast("Add successfully");
            setCustomer(response0.data.data)

        } else {
            console.log("error", response0)
        }
        let response1 = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-payment-method?_id=${localStorage.getItem('subadminid')}`);
        console.log("response1", response1)
        if (response1.data.code == 200) {
            toast("Add successfully");
            for (const iterator of response1.data.data) {
                methods.push(iterator)

            }
            // setMethods(response1.data.data)
            // methods.unshift({name : "+add new"})

        } else {
            console.log("error", response1)
            // methods.unshift({name : "+add new"})
        }
        let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/customer-details/${id}`);
        // console.log("response", response.data.data)
        if (response.data.code == 200) {
            toast("Add successfully");
            await setFormData(response.data.data)
            await customer.unshift(response.data.data)
            await setStartDate(moment().format("YYYY-MM-DD"))
            // getInvoiceData(id)
        } else {
            console.log("error", response)
        }
    }

    const [invoiceList, setInvoiceList] = useState([])
    const getInvoiceData = async (id) => {
        try {
            let request = { _id: id }
            if (searchData != "") {
                request.searchData = searchData
            }
            let invoiceList1 = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-invoice-list`, request);
            console.log("invoiceList", invoiceList1.data.data)
            if (invoiceList1.data.code == 200) {
                toast("Add successfully");
                let tempArray =[]
                for (const iterator of invoiceList1.data.data.docs) {
                    iterator.isCheck = false
                    tempArray.push(iterator)
                //    await setInvoiceList([... invoiceList,iterator])
                }
               await setInvoiceList(tempArray)
            }
            else {
                console.log("error", invoiceList1)
            }
        } catch (error) {
            console.log("error", error)
        }

    }
    /////////////////////////////////
    const [searchfilter, setSearchfilter] = useState({ searchData: "", })
    const { searchData } = searchfilter

    // let payment_method_name = ''
    const [paymetMethod1, setPaymentMethod1] = useState('')
    const onInputChange = async (e) => {
        console.log("targat", e.target.name, e.target.value)
        if (e.target.name == 'payment_method') {
            if (e.detail === 0) {
                if (e.target.value == 'add_new') {
                    await setOpenModal(true)
                }
            }
        }
        if (e.target.name == 'apply_amount') {
            setRecievData({...recievData, [e.target.name]:e.target.value })
        }
        
        if (e.target.name == 'payment_method_name') {
            // payment_method_name = e.target.value
            setPaymentMethod1(e.target.value)
            console.log("hiiiiiiiiiiiiiiiiiiii", paymetMethod1)
        }
        if (e.target.name == 'startDate') {
            console.log("e.target.name", e.target.value)
            setStartDate(e.target.value)
        }
        if (e.target.name == 'searchData') {
            console.log("e.target.name", e.target.value)
            setSearchfilter({ ...searchfilter, [e.target.name]: e.target.value })
        }
        if (e.target.name == 'email') {
            handleFormValidation()
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        if (e.target.name == 'sent_later') {
            setFormData({ ...formData, [e.target.name]: "yes" })
        }

        if (e.target.name == 'customer_id') {
            // console.log("targat", e.target.value)

            // let obj = customer.find(element => element._id == e.target.value);
            // setFormData({ ...formData, first_name: obj.first_name })
            // console.log("customer", obj)
            loadData(e.target.value)
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })

        }

    };






    const [textInfo, setTexInfo] = useState({
        tax_rego_no: "",
        cst_reg_no: "",
        pan_no: "",
        apply_tds_customer: false

    })

    const [paymentMethod, setPaymentMethod] = useState({
        preferred_payment_method: "",
        preferred_delivery_method: "",
        term: "",
        oppning_balance: "",
        as_of_date: ""

    })



    const [formErrors, setFormErrors] = useState({});
    const { emailErr, invoice_number_error } = formErrors
    const checkInvoiceValidation = async (number) => {
        // console.log("checkInvoiceValidation", typeof number, number, (number === 0))
        let formErrors = {};
        let formIsValid = true;
        if (number) {
            // console.log("checkInvoiceValidation", typeof number, number)
            var mobPattern = new RegExp(/^[0-9]{4,4}$/i);
            // console.log("invoice_no", mobPattern.test(number), number)
            if (!mobPattern.test(number)) {
                formIsValid = false;
                formErrors["invoice_number_error"] = "Please enter valid1111 number ";
            }
            let invoice_no = await axios.post(`${CONSTANT.baseUrl}/api/admin/check-invoice-no`, { invoice_number: number });
            // console.log("invoice_no", invoice_no)
            if (invoice_no.data.code == 400) {
                // console.log("invoice_no", invoice_no.data)
                formIsValid = false;
                formErrors["invoice_number_error"] = "this number is already exist";
            }
        }

        setFormErrors(formErrors);
        return formIsValid;
    }
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

    //////////////////////////////file Attachement ////////////////////////////////////////
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
        // console.log("response", res.data)
        if (res.data.code == 200) {
            setFilepath(res.data.data)
        } else {
            console.warn("error", res.data.message)
        }
        console.log("filepath", filepath)
    }
    ///////////////////////////////////////////////modal hendler///////////////////////////////////
    const [openModal, setOpenModal] = useState(false)
    const modalHaldeler = async (e) => {
        e.target.value == 'false' ? await setOpenModal(false) : await setOpenModal(true)
    }

    const saveData = async (e) => {
        e.preventDefault()
        console.log("payment_method_name", paymetMethod1)
        let data = {};
        data.name = paymetMethod1
        data.created_by = localStorage.getItem('subadminid')
        console.log("requestdata", data)
        let responsefolder = await axios.post(`${CONSTANT.baseUrl}/api/admin/payment-method-create`, data);
        if (responsefolder.data.code == 200) {
            await loadData(id)
            await setOpenModal(false)
        } else {
            console.log("error", responsefolder.data)
        }
    }
    const onSubmit = async e => {
        e.preventDefault();
        let data = {}
        // console.log("daaaaaaa", id, formData1, formData, tableRow, recurrForm)
        // let interval = invoice_type == 'basic_invoice' ? {
        //     interval_time: "", day_name: "", day_no: "", every_day: "", every_week: "", every_months: "", start_date: "", month_name: ""
        // } : recurrForm
        // data = {
        //     customer_id: id,
        //     created_by: localStorage.getItem('subadminid'),
        //     invoice_number: invoice_number,
        //     invoice_type: invoice_type,
        //     invoice_date: startDate,
        //     due_date: endDate,
        //     total: total,
        //     subtotal: subtotal,
        //     balance_due: balance_due,
        //     invoice_message: formData.invoice_message,
        //     statement_message: formData.statement_message,
        //     attachments: filepath,
        //     products_meta: tableRow,
        //     recurring_interval: interval
        // }
        // // console.log("daaaaaaa", data)
        // let response = await axios.post(`${CONSTANT.baseUrl}/api/admin/create-invoice`, data);
        // // console.log("response", response)
        // if (response.data.code == 200) {
        //     toast("create successfully");
        // }
    };
    const allselectInvoice = async (e, invoice_no) => {
        console.log("allselect >>>", e.target.name, e.target.checked)
        if (e.target.name == "allselect") {
            let tempArray =[...invoiceList]
            if (e.target.checked){
                for (const iterator of tempArray) {
                    iterator.payment =  iterator.total
                    iterator.isCheck =  true
                }
            }else{
                for (const iterator of tempArray) {
                   iterator.payment =0.00
                   iterator.isCheck =  false
                }
            }
            await setInvoiceList(tempArray)
            let calculatSum = await invoiceList.reduce((accumulator, current) => accumulator + current.total, 0)
            setFormData({...formData , recieve_total : calculatSum})
        }
        if (e.target.name == "payment"){
            let tempArray =[...invoiceList]
            if(e.target.checked){
                tempArray[invoice_no].payment = invoiceList[invoice_no].total
            await setRecievData({...recievData , recieve_total : recieve_total+tempArray[invoice_no].payment})

            }else{
                tempArray[invoice_no].payment = 0.00
            await setRecievData({...recievData , recieve_total : recieve_total-tempArray[invoice_no].total})

            }
            // console.log("recieve_total", recieve_total, )
            // console.log("tempArray[invoice_no].payment", tempArray[invoice_no].payment,)
            // console.log("recieve_total+tempArray[invoice_no].payment", recieve_total)
            await setInvoiceList(tempArray)
        }
        // console.log("recieve_total", recieve_total)

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
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,700,800" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
                    {/* <!-- Main styles for this application --/> */}
                    <link href="css/style.css" rel="stylesheet" />
                    <link href="css/custom.css" rel="stylesheet" />
                    {/* <!-- Styles required by this views --> */}
                </head>
                <body class="invoice-body">
                    <section class="header-invoice">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <div class="left-portion">
                                        <h2><img src="img/wall-clock.png" /> Invoice Recieve</h2>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="right-portion">
                                        <ul>
                                            <li><a href="javascript:void(0)" onclick="openNav()"><i class="fa fa-bars"></i></a></li>
                                            <li><a href="#"><img src="img/help.png" /> Help</a></li>
                                            <li><a href="#"><img src="img/settings.png" /> </a></li>
                                        </ul>
                                        <div id="mySidenav1" class="sidenav1">
                                            <a href="javascript:void(0)" class="Close" onclick="closeNav()">&times;</a>
                                            <h2 class="cust-invoice">Add to Invoice</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="custom-box">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8 col-sm-8">
                                    <div class="custom">
                                        <form>
                                            <div class="row">
                                                <div class="form-group col-sm-4 cust-width">
                                                    <label>Customer  </label>
                                                    <p><a href="#" data-tooltip="Select a Custom to Make SUre The Right Person Pays You On Time"><i class="fa fa-question-circle-o"></i></a></p>
                                                    <select class="form-control" name="customer_id"
                                                        onChange={e => onInputChange(e)} >
                                                        {customer.map(item => (
                                                            <option value={item._id}>{item.first_name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div class="form-group col-sm-4 cust-width">
                                                    <div class="separate-box">
                                                        <label>Customer Email</label>
                                                        <p><a href="#" data-tooltip="You Can Send to More Than One Address By Separating Emails With a Comma "><i class="fa fa-question-circle-o"></i></a></p>
                                                        <input type="text" name="email" disabled="disabled" value={email} class="form-control" placeholder="Separate emails with a comma" onChange={e => onInputChange(e)} />
                                                        <div class="form-group sent">

                                                            <label><input type="checkbox" id="html" name='sent_later' value={sent_later} onChange={e => onInputChange(e)} />  Sent Later</label>
                                                            <p><a href="#" data-tooltip="You Can Send Later From The All Sales List. Filter By Delivery Method>Send Later."><i class="fa fa-question-circle-o"></i></a></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group col-sm-4">
                                                    {/* <a href="#">find By Ivoice</a> */}
                                                    <br></br>
                                                    <div class="form-group">
                                                        <input type="text" disabled='true' placeholder="find invoice here" />
                                                    </div>

                                                </div>


                                            </div>
                                            <div class="float-right1">
                                                <p>AMOUNT RECEIVED</p>
                                                <h2> Rs: {apply_amount}</h2>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="billing-address">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8 col-sm-8">
                                    <div class="flex-content">
                                        <div class="UserRight1">
                                            <form>
                                                <div class="row">
                                                    <div class="form-group col-sm-3 cust-width2">
                                                        <label for="">Payment date</label>
                                                        <input type="date" name="startDate" value={startDate} onChange={e => onInputChange(e)} />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-3">
                                                        <label for="">Payment Methode</label>
                                                        <select class="form-control taxes1" name="payment_method" onClick={e => onInputChange(e)}>
                                                            {methods && methods.map((item) => <option value={item.name == '+add new' ? item.value : item.name}>{item.name}</option>)}
                                                            {/* <option value={''}>+ add New</option>
                                                            <option value={true}>Cash</option>
                                                            <option value={true}>Check</option>
                                                            <option value={false}>Credit card</option> */}
                                                        </select>
                                                        {/* <input type="text" name="endDate" value={endDate} onChange={e => onInputChange(e)} /> */}
                                                    </div>
                                                    <div class="form-group col-sm-3">
                                                        <label for="">Reference no.</label>
                                                        <input type="text" name="reference_no" value={""} onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-3">
                                                        <label for="">Deposit to</label>
                                                        <select class="form-control taxes1" name="amounts_are" onChange={e => onInputChange(e)}>
                                                            <option value={''}>Inventory Asset</option>
                                                            <option value={true}>Deferred Service Tax Input Credit</option>
                                                            <option value={true}>Deferred CGST</option>
                                                            <option value={false}>Deferred GST Input Credit</option>
                                                        </select>
                                                        {/* <input type="text" name="endDate" value={endDate} onChange={e => onInputChange(e)} /> */}
                                                    </div>

                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">

                                    <div class="invoice-box">
                                        <label>Amount Recieve</label>
                                        <input type="number" name="apply_amount" class="form-control" value={apply_amount} placeholder="0.00" onChange={e => onInputChange(e)} />

                                        {invoice_number_error &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{invoice_number_error}</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="exclusive-tax">
                        <div class="container-fluid">
                            <div class="row">
                                Outstanding Transactions
                                <div class="form-group col-sm-9"></div>
                                <div class="form-group col-sm-3 exclusive-right">
                                    <label class="tax">search </label>
                                    <input placeholder="find invoice number" name="searchData" value={searchData} onChange={e => onInputChange(e)}></input>
                                    <button onClick={e => getInvoiceData(id)}>search</button>
                                </div>  <div class="form-group col-sm-3 exclusive-right">
                                    <label class="tax">filter </label>
                                    <input placeholder="find invoice number" name="searchData" value={searchData} onChange={e => onInputChange(e)}></input>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="cone-table1">
                        <div class="container-fluid">
                            <div class="row clearfix">
                                <div class="col-md-12 column">
                                    <table border="1" >
                                        <tr>
                                            {/* <th ><input class='check_all' type='checkbox' onclick="select_all()" /></th> */}
                                            {/* <button type="button" class='delete'><i class="fa fa-trash"></i>
                                            </button>
                                            <button type="button" class='addmore'><i class="fa fa-plus-circle"></i>
                                            </button> */}
                                            <th>#</th>
                                            <th><input type='checkbox' name='allselect' onClick={e => allselectInvoice(e)}></input></th>
                                            <th>description</th>
                                            <th>due date <i class="fa fa-question-circle-o"></i></th>
                                            <th>orignal amount</th>
                                            <th>open balance</th>
                                            <th>payment</th>
                                        </tr>
                                        {invoiceList && invoiceList?.map((item, i) => <tr>
                                            <td><span id='snum'>{i + 1}</span></td>
                                            <td><input type='checkbox'  name = "payment" defaultChecked= {item.isCheck} onClick= {e=> allselectInvoice(e, i)}></input></td>
                                            <td><span id='snum'>invoice #{item.invoice_number} /{item.invoice_date}</span></td>
                                            <td><span id='snum'>{item.due_date}</span></td>
                                            <td><span id='snum'>{item.total}</span></td>
                                            <td><span id='snum'>{item.total}</span></td>
                                            <td><input id='snum'  value = {item.payment}></input></td>
                                        </tr>)}

                                    </table>
                                    {/* </form> */}
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="invoice-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="invoice-left">
                                        <div class="form-group col-sm-12 pd-0 message-invoice">
                                            <label>Memo</label>
                                            <textarea class="form-control" rows="3" name='note'
                                                placeholder="Note.." onChange={e => onInputChange(e)}>
                                            </textarea>
                                        </div>
                                        <div class="col-sm-6 pd-0 message-invoice">
                                            <form method="post" action="#" id="#">
                                                <div class="form-group files">
                                                    <label><i class="fa fa-paperclip"> Attachments</i> <span>Maximum Size:200MB</span>
                                                    </label>
                                                    <input type="file" class="form-control" name="doc" onChange={e => onSetFile(e)} />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="invoice-right">
                                        <p>Amount to Apply<span class="amount-invoice"> ₹{apply_amount}</span></p>
                                        <p>Amount to credit<span class="amount-invoice"> ₹{recieve_total? apply_amount- recieve_total:"0.00"}</span></p>
                                        {/* {gstTaxAmount == 'true' ? <div>   {

                                            tableRow.map((item) => <div>
                                                {item.tax_type == 'Gst' ? <div>
                                                    <p>CGST {(item.tax / 2)} % on {item.subtotal}<span class="amount-invoice1"> ₹{((total - subtotal) / 2).toFixed(2)}</span></p>
                                                    <p>SGST {(item.tax / 2)} % on {item.subtotal}<span class="amount-invoice1"> ₹{((total - subtotal) / 2).toFixed(2)}</span></p>
                                                </div> : item.tax_type == 'Igst' ?
                                                    <p>IGST {(item.tax)} % on {item.subtotal.toFixed(2)}<span class="amount-invoice1"> ₹{(total - subtotal).toFixed(2)}</span></p> : ""
                                                }
                                            </div>

                                            )
                                        }
                                            <p>Total<span class="amount-invoice1"> ₹{total.toFixed(2)}</span></p>
                                            <p>Balance Due<span> ₹{total.toFixed(2)}</span></p>
                                        </div> : <div><p>Total<span class="amount-invoice1"> ₹{subtotal}</span></p>
                                            <p>Balance Due<span> ₹{subtotal}</span></p></div>} */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <div class="footer-left">
                                        <ul>
                                            <li><a href="">Cancel</a></li>
                                            <li><a href="">Clear</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="footer-center">
                                        <ul>
                                            <li><a href="#">Print or Preview</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="footer-right">
                                        <ul>
                                            <li><button onClick={e => onSubmit(e)}>Save</button></li>
                                            <li class="save"><a href="#">Save and Send</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Bootstrap and necessary plugins --> */}

                    <Modal show={openModal} >
                        <Modal.Header closeButton >
                            <Modal.Title>{"cityData.name"}</Modal.Title>
                        </Modal.Header>
                        <div class="modal-header login-header">
                            <h4 class="modal-title">Add new method</h4>
                            <button type="button" class="close" data-dismiss="modal" value={false} onClick={modalHaldeler}>×</button>
                            {/*  value={false} onClick={opneAddorderModal} */}

                        </div>
                        <div class="row mt-60">
                            <div class="col-md-12 col-sm-12">
                                <div class="modal-body">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            {/* <input  type="text" placeholder="Client PO Number" ></input> */}
                                            <Form.Control placeholder="Enter Name" name="payment_method_name" onChange={onInputChange} />
                                        </Form.Group>
                                    </Form> </div>
                            </div>
                        </div>
                        <div class='footer-side'>
                            <Modal.Footer>
                                <Button variant="secondary" value={false} onClick={modalHaldeler} > Close </Button>
                                <Button variant="primary" onClick={saveData} > save</Button>
                            </Modal.Footer>
                        </div>

                    </Modal>

                    <script src="js/jquery.min.js" type="text/javascript"></script>
                    <script src="js/popper.min.js" type="text/javascript"></script>
                    <script src="js/custom.js" type="text/javascript"></script>
                    {/* <!--     <script src="js/bootstrap.min.js"></script> --> */}

                </body>

            </html>
        </>

    );
};

export default InvoiceRecieve;