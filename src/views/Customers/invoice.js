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

const InvoiceAdd = () => {
    const { id } = useParams();
    let history = useHistory();
    var someDate = new Date();
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    useEffect(() => {
        loadData(id)
    }, [tableRow, recurrForm, formData1])
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
        customer_id: "",
        bill_with: "",
        // sent_later: "no",
        // invoice_number: "",
        // invoice_type: "basic_invoice",
        // total: 0,
        // subtotal: 0,
        // balance_due: 0
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
        , gstin_no, email, number, mobile_no, fax, other, website, Shipping_Address_copy, notes, sent_later } = formData

    const { b_street, b_city, b_state, b_pin, b_country, s_street, s_city, s_state, s_pin, s_country } = address
    // const { tax_rego_no, cst_reg_no, pan_no, apply_tds_customer } = textInfo


    const [customer, setCustomer] = useState([])
    const [product, setProduct] = useState([{ label: "Add Product", value: "Add Product" }])
    const [taxInfo1Gst, setTaxInfo1Gst] = useState([{ label: "18% Gst", value: 18 },
    { label: "6% Gst", value: 6 },
    { label: "12% Gst", value: 12 }])
    const [taxInfo1Igst, setTaxInfo1Igst] = useState([{ label: "18% Igst", value: 18 },
    { label: "6% Igst", value: 6 },
    { label: "12% Igst", value: 12 }])
    const loadData = async (id) => {
        let response0 = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-customer?_id=${localStorage.getItem('subadminid')}`);
        console.log("responsedayaa", response0)
        if (response0.data.code == 200) {
            toast("Add successfully");
            setCustomer(response0.data.data)
        }
        let invoice_no = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-invoice-no`);
        console.log("invoice_no", invoice_no)
        if (invoice_no.data.code == 200) {
            toast("Add successfully");
            setFormData1({ ...formData1, invoice_number: invoice_no.data.data })
        }
        let response1 = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-product-service?_id=${localStorage.getItem('subadminid')}`);
        console.log("product", response1)
        if (response1.data.code == 200) {
            toast("Add successfully");
            for (const iterator of response1.data.data) {
                product.push({ label: iterator.name, value: iterator })

            }
            // setProduct(response1.data.data)
        }
        let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/customer-details/${id}`);
        console.log("response", response.data.data)
        if (response.data.code == 200) {
            toast("Add successfully");
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
            await customer.unshift(response.data.data)
            // await setTexInfo(response.data.data.tax_info)
            // await setPaymentMethod(response.data.data.payment_and_billing)
            await setStartDate(moment().format("YYYY-MM-DD"))
            // let nedate =moment(startDate).add(5, 'days')
            await setEndDate(moment().format("YYYY-MM-DD"))
        } else {
            console.log("response", response)
        }

        console.log("customercustomercustomer", customer, invoice_number)
    }
    const onInputChangeAddress = async (e) => {
        console.log("targat", e.target.name, e.target.value)
        setAddress({ ...address, [e.target.name]: e.target.value });
    }
    const [gstTaxAmount, setGstTaxAmount] = useState('true')
    const onInputChangeDate = async (e) => {
        if (e.target.value == 'due_on_receipt') {
            setEndDate(startDate)
        }
        if (e.target.value == 'net_15') {
            setEndDate(moment(startDate).add(15, 'days').format("YYYY-MM-DD"))
        }
        if (e.target.value == 'net_30') {
            setEndDate(moment(startDate).add(30, 'days').format("YYYY-MM-DD"))
        }
        if (e.target.value == 'net_60') {
            setEndDate(moment(startDate).add(60, 'days').format("YYYY-MM-DD"))
        }
        if (e.target.name == 'amounts_are') {
            console.log('e.target.amounts_are', e.target.name, typeof e.target.value)
            setGstTaxAmount(e.target.value)
            tableRow.map((item) =>{

            })
        }
    }
    const onInputChange = async (e) => {
        console.log("formData", formData)
        console.log("targat", e.target.name, e.target.value)
        if (e.target.name == 'email') {
            handleFormValidation()
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        if (e.target.name == 'sent_later') {
            setFormData({ ...formData, [e.target.name]: "yes" })
        }
        if (e.target.name == 'invoice_type') {
            setFormData1({ ...formData1, [e.target.name]: "recurring_invoice" })
            window.scrollTo(0, 0);
        }
        if (e.target.name == 'invoice_number') {
            setFormData1({ ...formData1, [e.target.name]: e.target.value })

            checkInvoiceValidation(Number(e.target.value))
            console.log("dddddddddd", [e.target.name], e.target.value)
        }
        if (e.target.name == 'customer_id') {
            console.log("targat", e.target.value)

            let obj = customer.find(element => element._id == e.target.value);
            setFormData({ ...formData, first_name: obj.first_name })
            console.log("customer", obj)
            loadData(e.target.value)
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })

        }

    };
    const [formErrors, setFormErrors] = useState({});
    const { emailErr, invoice_number_error } = formErrors
    const checkInvoiceValidation = async (number) => {
        console.log("checkInvoiceValidation", typeof number, number, (number === 0))
        let formErrors = {};
        let formIsValid = true;
        if (number) {
            console.log("checkInvoiceValidation", typeof number, number)
            var mobPattern = new RegExp(/^[0-9]{4,4}$/i);
            console.log("invoice_no", mobPattern.test(number), number)
            if (!mobPattern.test(number)) {
                formIsValid = false;
                formErrors["invoice_number_error"] = "Please enter valid1111 number ";
            }
            let invoice_no = await axios.post(`${CONSTANT.baseUrl}/api/admin/check-invoice-no`, { invoice_number: number });
            console.log("invoice_no", invoice_no)
            if (invoice_no.data.code == 400) {
                console.log("invoice_no", invoice_no.data)
                formIsValid = false;
                formErrors["invoice_number_error"] = "this number is already exist";
            }

            // if(invoice_no.data.code == 422){
            //     formErrors["invoice_number_error"] =  invoice_no.data.errors[0].error_msg
            // }

        }

        setFormErrors(formErrors);
        console.log("hiiiiiiiiiiiiiiii", formErrors, formIsValid)
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

    const [region, setRegion] = useState();
    const selectRegion = async (val) => {
        console.log("region", val)
        await setRegion(val);
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
        console.log("response", res.data)
        if (res.data.code == 200) {
            setFilepath(res.data.data)
        } else {
            console.warn("error", res.data.message)
        }
        // console.log("filepath", filepath)
    }
    ///////////////////////////////Manege Table////////////////////////////
    const [formData1, setFormData1] = useState({
        sent_later: "no",
        invoice_number: "",
        invoice_type: "basic_invoice",
        total: 0,
        subtotal: 0,
        balance_due: 0
    })
    const { total, subtotal, balance_due, invoice_number, invoice_type, } = formData1
    const rowInput = {
        id: "",
        service_date: "",
        product_service: "",
        description: "",
        qty: "",
        rate: "",
        amount: "",
        subtotal: "",
        tax: "",
        tax_type: ""
    }
    // const {service_date,product_service,description,qty,rate,amount,tax}=rowInput
    const [tableRow, setTableRow] = useState([{ ...rowInput }]);
    const onInputChangeTable = async (e, i, type) => {
        //    console.log("onInputChangeTable", e.target.name, e.target.value, e.label)
        if (type == 'product_service') {
            console.log("e.label", e.label,)
            console.log("e.value", e.value)
            if (e.label == 'Add Product') {
                // console.log("adddpppppppppppppppppp")
                history.push("/master-product");
            } else {
                tableRow[i]['product_service'] = e.value.name
                tableRow[i]['description'] = e.value.discription
                let taxAmount = Number(e.value.price) * (Number(e.value.tax) / 100)
                tableRow[i]['amount'] = e.value.price + taxAmount
                tableRow[i]['subtotal'] = Number(e.value.price)
                tableRow[i]['tax'] = Number(e.value.tax)
                tableRow[i]['qty'] = 1
                tableRow[i]['tax_type'] = e.value.tax_type
                // tableRow[i]['rate'] = 1
                // tableRow[i]['description'] = e.value.name
            }
        } else if (type == 'tax') {
            console.log("type", type, e.label)

            if(tableRow[i].amount ==""){
                tableRow[i]['tax'] = e.value
                let amount = Number(tableRow[i].qty) * Number(tableRow[i].rate)
                tableRow[i]['subtotal'] = amount
                let taxAmount = amount * (e.value / 100)
                tableRow[i].amount = taxAmount + amount
                if (e.label == '6% Gst' || e.label == '12% Gst' || e.label == '18% Gst') {
                    tableRow[i].tax_type = "Gst"
                } else {
                    tableRow[i].tax_type = "Igst"
                }
            }else{
                tableRow[i]['tax'] = e.value
                let amount = tableRow[i].amount
                tableRow[i]['subtotal'] = amount
                let taxAmount = amount * (e.value / 100)
                tableRow[i].amount = taxAmount + amount
                if (e.label == '6% Gst' || e.label == '12% Gst' || e.label == '18% Gst') {
                    tableRow[i].tax_type = "Gst"
                } else {
                    tableRow[i].tax_type = "Igst"
                }
            }
           
        } else {
            if ('amount' == e.target.name) {
            //     console.log( "amount",e.target.name , typeof e.target.name)
                console.log( "amounttttttttt",e.target.value ,tableRow[i].tax, typeof e.target.value)
                console.log("totala", Number(e.target.value) *(tableRow[i].tax /100))

            //    let amount = Number(e.target.value) *(tableRow[i].tax /100)
                tableRow[i]['amount'] =   Number(e.target.value) +Number(e.target.value) *(tableRow[i].tax /100)
                tableRow[i]['subtotal'] = Number(e.target.value)
            }
            if ('rate' == e.target.name) {
                let amount = Number(e.target.value) * Number(tableRow[i].qty)
                tableRow[i]['subtotal'] = amount
                let taxAmount = amount * (tableRow[i].tax / 100)
                tableRow[i]['amount'] = amount + taxAmount
                tableRow[i][e.target.name] = Number(e.target.value)
            }
            if ('qty' == e.target.name) {
                console.log("qtyqtyqty", e.target.name, typeof e.target.value, e.target.value, tableRow[i])
                let amount = Number(e.target.value) * Number(tableRow[i].rate)
                tableRow[i]['subtotal'] = amount
                let taxAmount = amount * (tableRow[i].tax / 100)
                tableRow[i]['amount'] = amount + taxAmount
                tableRow[i][e.target.name] = Number(e.target.value)
            }
            // else {
            //     tableRow[i][e.target.name] = e.target.value
            // }

        }
        let calculatSum = await tableRow.reduce((accumulator, current) => accumulator + current.amount, 0)
        let calculatSubTotal = await tableRow.reduce((accumulator, current) => accumulator + current.subtotal, 0)
        formData1.subtotal = calculatSubTotal
        // formData1.total = calculatSum
        await setFormData1({ ...formData1, total: calculatSum })
        console.log("tableRow", tableRow)
    }
    const addLineHandler = () => {
        console.log("AddLine Handler called")
        setTableRow([...tableRow, { ...rowInput }])
    }
    const clearAllLine = () => {
        setTableRow([rowInput])
    }
    ////////////////////////////////////////////////add orders  //////////////////////////////////////

    const [addOrders, setAddOrders] = useState(false)
    const paymentInput = {
        term: ""
    }
    const [paymentTerm, setPaymentTerm] = useState([{ ...paymentInput }])
    const addTermHandler = (e) => {
        setPaymentTerm([...paymentTerm, { ...paymentInput }])
    }
    const clearTermAllLine = (e) => {
        setPaymentTerm([paymentInput])
    }
    const opneAddorderModal = async (e) => {
        e.target.value == 'false' ? await setAddOrders(false) : await setAddOrders(true)
    }
    //////////////////////////////////////////recurring///////////////////////////////////////////////////////////////////// 

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day_number = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th",
        "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "last"];
    const [recurrForm, setRecurrForn] = useState({
        interval_time: "Daily",
        day_name: "",
        day_no: "Day",
        every_day: "",
        every_week: "",
        every_months: "",
        start_date: "",
        month_name: ""
    })
    const { interval_time, day_name, day_no, start_date, every_day, every_week, month_name, every_months } = recurrForm
    const onInputChangeInterval = async (e) => {
        console.log("e.target.name", e.target.name, e.target.value)
        setRecurrForn({ ...recurrForm, [e.target.name]: e.target.value })
        console.log("e.target.namenamename", interval_time, day_name, day_no, start_date)
    }

    const onSubmit = async e => {
        e.preventDefault();
        let data = {}
        console.log("daaaaaaa", id, formData1, formData, tableRow, recurrForm)
        let interval = invoice_type == 'basic_invoice' ? {
            interval_time: "", day_name: "", day_no: "", every_day: "", every_week: "", every_months: "", start_date: "", month_name: ""
        } : recurrForm
        data = {
            customer_id: id,
            created_by: localStorage.getItem('subadminid'),
            invoice_number: invoice_number,
            invoice_type: invoice_type,
            invoice_date: startDate,
            due_date: endDate,
            total: total,
            subtotal: subtotal,
            balance_due: balance_due,
            invoice_message: formData.invoice_message,
            statement_message: formData.statement_message,
            attachments: filepath,
            products_meta: tableRow,
            recurring_interval: interval
        }
        console.log("daaaaaaa", data)
        let response = await axios.post(`${CONSTANT.baseUrl}/api/admin/create-invoice`, data);
        console.log("response", response)
        if (response.data.code == 200) {
            toast("create successfully");
        }
    };
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
                                        <h2><img src="img/wall-clock.png" /> Invoice</h2>
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
                                            <form class="cust-form">
                                                <div class="row">
                                                    <div class="form-group col-sm-12 cust-width3">
                                                        <label>Customerll <i class="fa fa-question-circle-o"></i></label>
                                                        <select class="form-control">
                                                            <option>Select a Customer</option>
                                                            <option>A</option>
                                                            <option>B</option>
                                                            <option>C</option>
                                                        </select>
                                                    </div>

                                                    <a class="add-all" href="#">Add all</a>
                                                    <div class="box-card">
                                                        <h3>Estimate #1045</h3>
                                                        <p>Nov 27, 2020</p>
                                                        <h3>₹4,36,600.00 | Taxable</h3>
                                                        <ul>
                                                            <li>More App & Software...</li>
                                                            <li>Software Development a...</li>
                                                        </ul>
                                                        <a class="more" href="#">More</a>
                                                        <a class="add-btn" href="#">add</a>
                                                        <a class="open-btn" href="#">open</a>
                                                    </div>
                                                </div>
                                            </form>
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
                                                    {/* <!--  <div class="tool-box">
                              <div class="tooltips">
                                 <h2>Select a Customer to Make Sure The Right
                                      Person Pays You On Time</h2>
                              </div>
                           </div> --> */}
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
                                                    <a href="#">Setup now</a>
                                                    <div class="form-group">
                                                        <input type="checkbox" id="html" />
                                                        <label for="html">razorpay </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {invoice_type == 'recurring_invoice' ? <div class="row">
                                                <div class="form-group col-sm-4">
                                                    <label>Interval </label>
                                                    <select class="form-control" name='interval_time' value={interval_time} onChange={e => onInputChangeInterval(e)}>
                                                        <option value='Daily'>Daily</option>
                                                        <option value='Weekly'>Weekly</option>
                                                        <option value='Monthly'>Monthly</option>
                                                        <option value='Yearly'>Yearly</option>
                                                    </select>
                                                    {interval_time == 'Daily' ?
                                                        <label>  Every <input type="number" name='every_day' pattern="[0-9]*" inputmode="numeric" onChange={e => onInputChangeInterval(e)} /> day(s)</label>
                                                        : interval_time == 'Weekly' ?
                                                            <div> <label>  Every <input type="number" name='every_week' pattern="[0-9]*" inputmode="numeric" onChange={e => onInputChangeInterval(e)} /> week(s) on</label>

                                                                <div >
                                                                    <select class="form-control" name='day_name' onChange={e => onInputChangeInterval(e)}>
                                                                        <option value='Sunday'>Sunday</option>
                                                                        <option value='Monday'>Monday</option>
                                                                        <option value='Tuesday'>Tuesday</option>
                                                                        <option value='Wednesday'>Wednesday</option>
                                                                        <option value='Thursday'>Thursday</option>
                                                                        <option value='Friday'>Friday</option>
                                                                        <option value='Saturday'>Saturday</option>
                                                                    </select>
                                                                </div>
                                                            </div> : interval_time == 'Monthly' ? <div>
                                                                <div >
                                                                    <select class="form-control" name='day_no' onChange={e => onInputChangeInterval(e)}>
                                                                        <option value='Day'>Day</option>
                                                                        <option value='First'>First</option>
                                                                        <option value='Second'>Second</option>
                                                                        <option value='Third'>Third</option>
                                                                        <option value='Fourth'>Fourth</option>
                                                                        <option value='Last'>Last</option>
                                                                        <option value='Third'>Third</option>
                                                                    </select>
                                                                </div>

                                                                {day_no == 'Day' ? <div >
                                                                    <select class="form-control" name='day_name' onChange={e => onInputChangeInterval(e)}>
                                                                        {day_number.map((item, i) => <option>{item}</option>)}

                                                                    </select>
                                                                </div> : <div >
                                                                    <select class="form-control" name='day_name' onChange={e => onInputChangeInterval(e)}>
                                                                        <option value='Sunday'>Sunday</option>
                                                                        <option value='Monday'>Monday</option>
                                                                        <option value='Tuesday'>Tuesday</option>
                                                                        <option value='Wednesday'>Wednesday</option>
                                                                        <option value='Thursday'>Thursday</option>
                                                                        <option value='Friday'>Friday</option>
                                                                        <option value='Saturday'>Saturday</option>
                                                                    </select>
                                                                </div>}

                                                                <label>  Every of <input type="number" name='every_months' pattern="[0-9]*" inputmode="numeric" onChange={e => onInputChangeInterval(e)} /> month(s)</label>

                                                            </div> : <div>
                                                                <label>Every</label>
                                                                <select class="form-control" name='month_name' onChange={e => onInputChangeInterval(e)}>
                                                                    {months.map((item, i) => <option>{item}</option>)}
                                                                </select>
                                                                <select class="form-control" name='day_name' onChange={e => onInputChangeInterval(e)}>
                                                                    {day_number.map((item, i) => <option>{item}</option>)}

                                                                </select>
                                                            </div>}
                                                    {/* <div class="form-group col-sm-4">
                                                        <select class="form-control" name='day_name' onChange={e => onInputChangeInterval(e)}>
                                                            <option value='Day'>Day</option>
                                                            <option value='First'>First</option>
                                                            <option value='Second'>Second</option>
                                                            <option value='Third'>Third</option>
                                                            <option value='Fourth'>Fourth</option>
                                                            <option value='Last'>Last</option>
                                                            <option value='Third'>Third</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-4">
                                                        <select class="form-control" name='day_no' onChange={e => onInputChangeInterval(e)}>
                                                            <option>Sunday</option>
                                                            <option>Monday</option>
                                                            <option>Tuesday</option>
                                                            <option>Wednesday</option>
                                                            <option>Thursday</option>
                                                            <option>Friday</option>
                                                            <option>Saturday</option>
                                                        </select>
                                                    </div>

                                                    <label>  Every of <input type="number" name='every_months' pattern="[0-9]*" inputmode="numeric" onChange={e => onInputChangeInterval(e)} /> month(s)</label> */}


                                                </div>

                                                <div class="form-group col-sm-4">
                                                    <label for="">Start Date</label>
                                                    <input type="date" name="start_date" value={start_date} onChange={e => onInputChangeInterval(e)} />
                                                </div>
                                                <div class="form-group col-sm-4">
                                                    <label for="">End</label>
                                                    <select class="form-control" name='end' onChange={e => onInputChangeInterval(e)}>
                                                        <option value={'none'}>None</option>
                                                        <option value={'by'}>By</option>
                                                        <option value={'after'}>After</option>
                                                    </select> </div>
                                            </div> : ""}
                                        </form>
                                    </div>

                                </div>
                                <div class="col-md-4 col-sm-4">

                                    <div class="custom-right">
                                        <p>BALANCE DUE</p>
                                        <h2>₹0.00</h2>
                                    </div>
                                    <div class="custom-right">
                                        <button value={true} onClick={e => opneAddorderModal(e)} >add orders</button>
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
                                                    <div class="form-group col-sm-3">
                                                        <label>Billing Address</label>
                                                        <textarea class="form-control" disabled="disabled" value={b_street} rows="5" id="comment"></textarea>
                                                    </div>
                                                    <div class="form-group col-sm-3 cust-width">
                                                        <label>Terms</label>
                                                        {/*  */}
                                                        <p><a href="#" data-tooltip="Terms Show How Many Days A Customer Has to Pay.You Can Change This Number Before You Send The Invoice."><i class="fa fa-question-circle-o"></i></a></p>
                                                        <select class="form-control" name="term" onChange={e => onInputChangeDate(e)}>
                                                            <option value={'due_on_receipt'}>Due on Receipt</option>
                                                            <option value={'net_15'}>Net 15</option>
                                                            <option value={'net_30'}>Net 30</option>
                                                            <option value={'net_60'}>Net 60</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-3 cust-width2">
                                                        <label for="">Invoice Date</label>
                                                        <input type="date" name="startDate" value={startDate} onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-3 cust-width2">
                                                        <label for="">Due Date</label>
                                                        <input type="date" name="endDate" value={endDate} onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-3 cust-width1">
                                                        <label>Place of Supply </label>
                                                        <p><a href="#" data-tooltip="You Can Send Later From The All Sales List. Filter By Delivery Method>Send Later."><i class="fa fa-question-circle-o"></i></a></p>
                                                        {/* <RegionDropdown
                                                            class="form-control"
                                                            country={"India"}
                                                            value={region}
                                                            onChange={(val) => selectRegion(val)} /> */}
                                                        <input type="text" name="b_state" disabled="disabled" value={b_state} onChange={e => onInputChange(e)} />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="invoice-box">
                                        <label>Invoice</label>
                                        <input type="number" name="invoice_number" value={invoice_number} class="form-control" placeholder="1001" onChange={e => onInputChange(e)} />

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
                                <div class="form-group col-sm-9"></div>
                                <div class="form-group col-sm-3 exclusive-right">
                                    <label class="tax">Amounts are  </label>
                                    <select class="form-control taxes1" name="amounts_are" onChange={e => onInputChangeDate(e)}>
                                        <option value={true}>Exclusive of Tax</option>
                                        <option value={true}>Inclusive of Tax</option>
                                        <option value={false}>Out of Scope of Tax</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="cone-table1">
                        <div class="container-fluid">
                            <div class="row clearfix">
                                <div class="col-md-12 column">
                                    <table border="1" cellspacing="0">
                                        <tr>
                                            {/* <th ><input class='check_all' type='checkbox' onclick="select_all()" /></th> */}
                                            {/* <button type="button" class='delete'><i class="fa fa-trash"></i>
                                            </button>
                                            <button type="button" class='addmore'><i class="fa fa-plus-circle"></i>
                                            </button> */}
                                            <th>#</th>
                                            <th>Service Date</th>
                                            <th>product/service <i class="fa fa-question-circle-o"></i></th>
                                            <th>HSN/SAC</th>
                                            <th>description</th>
                                            {gstTaxAmount == 'true' ? <th>Tax</th> : ""}
                                            <th>qty</th>
                                            <th>rate</th>
                                            <th>amount</th>

                                            {/* <th>Action</th> */}
                                        </tr>
                                        {tableRow && tableRow?.map((item, i) => <tr>
                                            <td><span id='snum'>{i + 1}</span></td>
                                            <input type="date" name="service_date" placeholder={moment().format("YYYY-MM-DD")} onChange={e => onInputChange(e)} />
                                            <td> <Select className="basic-single" options={product}
                                                onChange={e => onInputChangeTable(e, i, "product_service")} /></td>
                                            <td>{""}</td>
                                            <td><input type='text' name='description' value={item.description} onChange={(e) => onInputChangeTable(e, i, "")} /></td>
                                            {gstTaxAmount == 'true' ? <td> <Select className="basic-single" options={localStorage.getItem('state') == b_state ? taxInfo1Gst : taxInfo1Igst}
                                                onChange={e => onInputChangeTable(e, i, "tax")} /> </td> : ""}
                                            <td><input type="number" name='qty' pattern="[0-9]*" inputmode="numeric" value={item.qty} onChange={(e) => onInputChangeTable(e, i, "")} /> </td>
                                            <td><input type="number" name='rate' pattern="[0-9]*" inputmode="numeric" value={item.rate} onChange={(e) => onInputChangeTable(e, i, "")} /></td>
                                            <td><input type="number" name='amount'  value={item.subtotal} onChange={(e) => onInputChangeTable(e, i, "")} /> </td>
                                            {/* <td>button</td> */}
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
                                        <ul>
                                            <li><button onClick={() => addLineHandler()}>Add Lines</button></li>
                                            <li><button onClick={() => clearAllLine()}>Clear all lines</button></li>
                                            {/* <li><a href="">Clear all lines</a></li> */}
                                            <li><a href="">Add Subtotal</a></li>
                                        </ul>
                                        <div class="form-group col-sm-12 pd-0 message-invoice">
                                            <label>Message on invoice</label>
                                            <textarea class="form-control" rows="4" name='invoice_message'
                                                placeholder="This will show up on the invoice." onChange={e => onInputChange(e)}>
                                            </textarea>
                                        </div>
                                        <div class="form-group col-sm-12 pd-0 message-invoice">
                                            <label>Message on Statement</label>
                                            <textarea class="form-control" rows="3" name='statement_message'
                                                placeholder="If you send statements to customers, this will show up as the description for this invoice." onChange={e => onInputChange(e)}>
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
                                        <p>Subtotal<span class="amount-invoice"> ₹{subtotal}</span></p>
                                        {
                                            tableRow.map((item) => <div>
                                                {item.tax_type == 'Gst' ? <div>
                                                    <p>CGST {(item.tax / 2)} % on {item.subtotal}<span class="amount-invoice1"> ₹{((total - subtotal) / 2).toFixed(2)}</span></p>
                                                    <p>SGST {(item.tax / 2)} % on {item.subtotal}<span class="amount-invoice1"> ₹{((total - subtotal) / 2).toFixed(2)}</span></p>
                                                </div> : item.tax_type == 'Igst' ?
                                                    <p>IGST {(item.tax)} % on {item.subtotal}<span class="amount-invoice1"> ₹{(total - subtotal)}</span></p> : ""
                                                }
                                            </div>

                                            )
                                        }
                                        <p>Total<span class="amount-invoice1"> ₹{total}</span></p>
                                        <p>Balance Due<span> ₹{total}</span></p>
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
                                            |
                                            <li><a name='invoice_type' onClick={e => onInputChange(e)}>Make recurring</a></li>
                                            |
                                            <li><a href="#">Customise</a></li>
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

                    <Modal show={addOrders} >
                        <Modal.Header closeButton >
                            <Modal.Title>{"cityData.name"}</Modal.Title>
                        </Modal.Header>
                        <div class="modal-header login-header">
                            <h4 class="modal-title">Add Order Information</h4>
                            <button type="button" class="close" data-dismiss="modal" name='newCustomer' value={false} onClick={opneAddorderModal}>×</button>

                        </div>
                        <div class="row mt-60">
                            <div class="col-md-12 col-sm-12">
                                <div class="modal-body">
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Order No *</Form.Label>
                                                <Form.Control type="text" placeholder="Order No" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Client PO Number</Form.Label>
                                                <Form.Control type="text" placeholder="Client PO Number" />
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            <Form.Label> Descritpion</Form.Label>
                                            <Form.Control placeholder="Descritpion" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Total order value with gst</Form.Label>
                                            <Form.Control placeholder="Total order value with gst" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            <Form.Label>Payment Terms</Form.Label>
                                            {paymentTerm.map((item) => <div id="formGridCheckbox" class="mb-3 form-group">
                                                <div class="form-check">
                                                    <input type="text" class="form-check-input" placeholder="Add Term" />
                                                </div>
                                            </div>)}
                                        </Form.Group>
                                        <button variant="primary" onClick={e => addTermHandler(e)}>Add Term</button>
                                        <button variant="secondary" onClick={e => clearTermAllLine(e)}>clear Term</button>
                                    </Form> </div>
                            </div>
                        </div>
                        <div class='footer-side'>
                            <Modal.Footer>
                                <Button variant="secondary" name='newCustomer' onClick={opneAddorderModal}> Close </Button>
                                <Button variant="primary" onClick={e => onSubmit(e)}> Submit</Button>
                            </Modal.Footer>
                        </div>

                    </Modal>
                    {/* <!-- Bootstrap and necessary plugins --> */}
                    <script src="js/jquery.min.js" type="text/javascript"></script>
                    <script src="js/popper.min.js" type="text/javascript"></script>
                    <script src="js/custom.js" type="text/javascript"></script>
                    {/* <!--     <script src="js/bootstrap.min.js"></script> --> */}

                </body>

            </html>
        </>

    );
};

export default InvoiceAdd;