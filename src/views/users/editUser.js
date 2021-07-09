import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
        website: "",
        minner_Activity:"",
        is_email_verify: "",
        is_number_verify: "",
        is_complete_kyc: "",
        country_code: ""
    });
    const options = {
        headers: {'token': localStorage.getItem('token')}
      }; 

    const { name, username, email, number, website,minner_Activity,is_email_verify,is_number_verify ,is_complete_kyc, country_code} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", user)
        let data = {}
        if (user.name) {
            data.name = user.name
        }
        if (user.username) {
            data.username = user.username
        }
        if (user.email) {
            data.email = user.email
        }
        if (user.number) {
            data.number = user.number
        }
        if (user.is_number_verify) {
            data.is_number_verify = user.is_number_verify
        }
        if (user.minner_Activity) {
            data.minner_Activity = user.minner_Activity
        }
        if (user.is_complete_kyc) {
            data.is_complete_kyc = user.is_complete_kyc
        }
        if (user.country_code) {
            data.country_code = user.country_code
        }
        data._id = user._id 
        data.login_type = 'manual'
        console.log("daaaaaaa", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-user`, data,options);

        if (response.data.code == 200) {
            toast("Update successfully");
            setTimeout(function(){history.push("/users"); }, 3000);
            // history.push("/users");
        }
    };

    const loadUser = async () => {

        // const result =
      
        await axios.get(`${CONSTANT.baseUrl}/api/admin/user-details?_id=${id}`,options).then((res) => {
            console.log("response", res.data)
            setUser(res.data.data);
        }).catch(err => {
            console.warn(err)
        })

    };
    return (
        <>
   {/* <!DOCTYPE html> */}
<html lang="en">
   <meta http-equiv="content-type" content="text/html;charset=utf-8" />
   <head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content=""/>
      <meta name="author" content=""/>
      <meta name="keyword" content=""/>
      <title>Winklix Internet</title>
      {/* <!-- Icons --> */}
      <link href="css/font-awesome.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,700,800" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
      {/* <!-- Main styles for this application --/> */}
      <link href="css/style.css" rel="stylesheet"/>
      <link href="css/custom.css" rel="stylesheet"/>
      {/* <!-- Styles required by this views --> */}
   </head>
   <body class="invoice-body">
      <section class="header-invoice">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-4 col-sm-4">
                  <div class="left-portion">
                     <h2><img src="img/wall-clock.png"/> Invoice</h2>
                  </div>
               </div>
               <div class="col-md-8 col-sm-8">
                  <div class="right-portion">
                     <ul>
                        <li><a href="javascript:void(0)" onclick="openNav()"><i class="fa fa-bars"></i></a></li>
                        {/* <!--  <li><a href="#"><img src="img/close.png"/></a></li> --> */}
                        <li><a href="#"><img src="img/help.png"/> Help</a></li>
                        <li><a href="#"><img src="img/settings.png"/> </a></li>
                        {/* <!--  <li><a href="#"><img src="img/download.svg" class="tour" alt=""> Take a Tour</a></li> --> */}
                     </ul>
                     <div id="mySidenav1" class="sidenav1">
                        <a href="javascript:void(0)" class="Close" onclick="closeNav()">&times;</a>
                        <h2 class="cust-invoice">Add to Invoice</h2>
                        <form class="cust-form">
                           <div class="row">
                              <div class="form-group col-sm-12 cust-width3">
                                 <label>Customer <i class="fa fa-question-circle-o"></i></label>
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
                              <label>Customer</label> 
                                <p><a href="#" data-tooltip="Select a Custom to Make SUre The Right Person Pays You On Time"><i class="fa fa-question-circle-o"></i></a></p>
                             {/* <!--  <div class="tool-box">
                              <div class="tooltips">
                                 <h2>Select a Customer to Make Sure The Right
                                      Person Pays You On Time</h2>
                              </div>
                           </div> --> */}
                              <select class="form-control">
                                 <option>Select a Customer</option>
                                 <option>A</option>
                                 <option>B</option>
                                 <option>C</option>
                              </select>
                           </div>

                           <div class="form-group col-sm-4 cust-width">
                              <div class="separate-box">
                                 <label>Customer Email</label> 
                                <p><a href="#" data-tooltip="You Can Send to More Than One Address By Separating Emails With a Comma "><i class="fa fa-question-circle-o"></i></a></p>
                                 <input type="text" name="" class="form-control" placeholder="Separate emails with a comma"/>
                                 <div class="form-group sent">
                                    
                                    <label><input type="checkbox" id="html"/>  Sent Later</label> 
                                <p><a href="#" data-tooltip="You Can Send Later From The All Sales List. Filter By Delivery Method>Send Later."><i class="fa fa-question-circle-o"></i></a></p>
                                 </div>
                              </div>
                           </div>
                           <div class="form-group col-sm-4">
                              <a href="#">Setup now</a>
                              <div class="form-group">
                                 <input type="checkbox" id="html"/>
                                 <label for="html">razorpay </label>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div class="col-md-4 col-sm-4">
                  <div class="custom-right">
                     <p>BALANCE DUE</p>
                     <h2>₹0.00</h2>
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
                                 <textarea class="form-control" rows="5" id="comment"></textarea>
                              </div>
                              <div class="form-group col-sm-3 cust-width">
                                 <label>Terms</label> 
                                <p><a href="#" data-tooltip="Terms Show How Many Days A Customer Has to Pay.You Can Change This Number Before You Send The Invoice."><i class="fa fa-question-circle-o"></i></a></p>
                                 <select class="form-control">
                                    <option>Due on Receipt</option>
                                    <option>Net 15</option>
                                    <option>Net 30</option>
                                    <option>Net 60</option>
                                 </select>
                              </div>
                              <div class="form-group col-sm-3 cust-width2">
                                 <label for="">Invoice Date</label>
                                 <input type="date" name="" id=""/>
                              </div>
                              <div class="form-group col-sm-3 cust-width2">
                                 <label for="">Due Date</label>
                                 <input type="date" name="" id=""/>
                              </div>
                              <div class="form-group col-sm-3 cust-width1">
                                 <label>Place of Supply</label> 
                                <p><a href="#" data-tooltip="You Can Send Later From The All Sales List. Filter By Delivery Method>Send Later."><i class="fa fa-question-circle-o"></i></a></p>
                                 <select class="form-control">
                                    <option>Select a Customer</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                 </select>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-4">
                  <div class="invoice-box">
                     <label>Invoice</label>
                     <input type="text" name="" class="form-control" placeholder="1001"/>
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
                <label class="tax">Amounts are</label>
                <select class="form-control taxes1">
                  <option>Exclusive of Tax</option>
                  <option>Inclusive of Tax</option>
                  <option>Out of Scope of Tax</option>
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
                        <th ><input class='check_all' type='checkbox' onclick="select_all()"/></th>
                        <button type="button" class='delete'><i class="fa fa-trash"></i>
                        </button>
                        <button type="button" class='addmore'><i class="fa fa-plus-circle"></i>
                        </button>
                        <th>#</th>
                        <th>Service Date</th>
                        <th>product/service <i class="fa fa-question-circle-o"></i></th>
                        <th>HSN/SAC</th>
                        <th>description</th>
                        <th>qty</th>
                        <th>rate</th>
                        <th>amount</th>
                        <th>Tax</th>
                     </tr>
                     <tr>
                        <td><input type='checkbox' class='case'/></td>
                        <td><span id='snum'>1.</span></td>
                        <td><input type='text' id='first_name' name='first_name[]'/></td>
                        <td><input type='text' id='middle_name' name='first_name[]'/></td>
                        <td><input type='text' id='last_name' name='last_name[]'/></td>
                        <td><input type='text' id='tamil' name='tamil[]'/></td>
                        <td><input type='text' id='english' name='english[]'/> </td>
                        <td><input type='text' id='computer' name='computer[]'/></td>
                        <td><input type='text' id='total' name='total[]'/> </td>
                        <td><input type='text' id='tax' name='tax[]'/> </td>
                     </tr>
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
                  <li><a href="">Add Lines</a></li>
                  <li><a href="">Clear all lines</a></li>
                  <li><a href="">Add Subtotal</a></li>
                </ul>
                <div class="form-group col-sm-12 pd-0 message-invoice">
                      <label>Message on invoice</label>
                      <textarea class="form-control" rows="4" id="comment" placeholder="This will show up on the invoice."></textarea>
                  </div>
                  <div class="form-group col-sm-12 pd-0 message-invoice">
                      <label>Message on Statement</label>
                      <textarea class="form-control" rows="3" id="comment" placeholder="If you send statements to customers, this will show up as the description for this invoice."></textarea>
                  </div>
                  <div class="col-sm-6 pd-0 message-invoice">
                    <form method="post" action="#" id="#">
                    <div class="form-group files">
                      <label><i class="fa fa-paperclip"> Attachments</i> <span>Maximum Size:200MB</span>
</label>
                      <input type="file" class="form-control" multiple=""/>
                    </div>
              </form>
            </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="invoice-right">
                <p>Subtotal<span class="amount-invoice"> ₹0.00</span></p>
                <p>Total<span class="amount-invoice1"> ₹0.00</span></p>
                <p>Balance Due<span> ₹0.00</span></p>
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
                        <li><a href="#">Make recurring</a></li>
                        |
                        <li><a href="#">Customise</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-4 col-sm-4">
                  <div class="footer-right">
                     <ul>
                        <li><a href="#">Save</a></li>
                        <li class="save"><a href="#">Save and Send</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- Bootstrap and necessary plugins --> */}
      <script src="js/jquery.min.js" type="text/javascript"></script>
      <script src="js/popper.min.js" type="text/javascript"></script>
	  <script src="js/custom.js" type="text/javascript"></script>
  {/* <!--     <script src="js/bootstrap.min.js"></script> --> */}

   </body>

</html> 
</>
        // <div className="container">
        //     <div className="w-75 mx-auto shadow p-5">
        //         <h2 className="text-center mb-4">Edit A User</h2>
        //         <form onSubmit={e => onSubmit(e)}>
        //             <div className="form-group">
        //                 <input
        //                     type="text"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your Name"
        //                     name="name"
        //                     value={name}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             <div className="form-group">
        //                 <input
        //                     type="text"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your Username"
        //                     name="username"
        //                     value={username}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             <div className="form-group">
        //                 <input
        //                     type="email"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your E-mail Address"
        //                     name="email"
        //                     value={email}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             <div className="form-group">
        //                 <input
        //                     type="text"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your number Number"
        //                     name="number"
        //                     value={number}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             {/* <div className="form-group">
        //     <input
        //       type="text"
        //       className="form-control form-control-lg"
        //       placeholder="Enter Your Website Name"
        //       name="website"
        //       value={website}
        //       onChange={e => onInputChange(e)}
        //     />
        //   </div> */}
        //             <button className="btn btn-warning btn-block">Update User</button>
        //         </form>
        //     </div>
        //     <ToastContainer />
        // </div>
    
    );
};

export default EditUser;