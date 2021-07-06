import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const ViewPrice = () => {
    let history = useHistory();
    const { id } = useParams();
    const [price, setPrice] = useState({
        referral_ammount: "",
        earning_ammount: "",
        mining_rate: "",
        mining_ammount: "",
        number_reward: "",
        reddit_reward:"",
        status: "",
    });
    const options = {
        headers: {'token': localStorage.getItem('token')}
      };
    const { referral_ammount, earning_ammount, mining_rate, mining_ammount, number_reward,reddit_reward,status } = price;
    const onInputChange = e => {
        setPrice({ ...price, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadData();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", price)
        let data = {}
        if (price.referral_ammount) {
            data.referral_ammount = price.referral_ammount
        }
        if (price.mining_rate) {
            data.mining_rate = price.mining_rate
            data.mining_ammount = price.mining_rate * 24
            data.earning_ammount = 0.1 * data.mining_ammount   // 10 percent of x amount
        }
        if (price.number_reward) {
            data.number_reward = price.number_reward
        }

        if (price.reddit_reward) {
            data.reddit_reward = price.reddit_reward
        }
        // if (price.status) {
        //     data.status = price.status
        // }
        data.id = price._id 
        // data.login_type = 'manual'
        console.log("request", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-price`, data, options);

        if (response.data.code == 200) {
            toast("Update successfully");
            // setTimeout(function(){history.push("/users"); }, 3000);
            // history.push("/users");
        }else{
            toast("somthing went wrong");
        }
    };

    const loadData = async () => {

        // const result = 
        await axios.get(`${CONSTANT.baseUrl}/api/admin/get-price`, options).then((res) => {
            // console.log("response", res.data)
            setPrice(res.data.data[0]);
        }).catch(err => {
            console.warn(err)
        })

    };
    return (
        <>
        {/* <!DOCTYPE html> */}
        <html lang="en">
            <body>
                <section>
                    <div class="UserArea">
                        <div class="container">
                            <div class="row">
                                
                                <div class="col-sm-9">
                                    <div class="UserRight">
                                        <h3>Edit Price</h3>
                                        <form onSubmit={e => onSubmit(e)}>
                                            <div class="row">
                                                <div class="form-group col-sm-6">
                                                    <label>Referral Amount</label>
                                                    <input type="text" name="referral_ammount" class="form-control" placeholder="" value={referral_ammount}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                {/* <div class="form-group col-sm-6">
                                                    <label>earning_ammount</label>
                                                    <input type="text" name="earning_ammount" class="form-control" placeholder="" value={earning_ammount}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                 */}
                                                <div class="form-group col-sm-6">
                                                    <label>Mining Rate /hour</label>
                                                    <input type="text" name="mining_rate" class="form-control" placeholder="" value={mining_rate}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                {/* <div class="form-group col-sm-6">
                                                    <label>mining_ammount</label>
                                                    <input type="text" name="mining_ammount" class="form-control" placeholder="" value={mining_ammount}
                                                        onChange={e => onInputChange(e)} />
                                                </div> */}
                                                <div class="form-group col-sm-6">
                                                    <label>Number Reward</label>
                                                    <input type="text" name="number_reward" class="form-control" placeholder="" value={number_reward}
                                                        onChange={e => onInputChange(e)} />
                                                </div>

                                               <div class="form-group col-sm-6">
                                                    <label>Reddit Reward</label>
                                                    <input type="text" name="reddit_reward" class="form-control" placeholder="" value={reddit_reward}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                {/* <div class="form-group col-sm-6">
                                                    <label>status</label>
                                                    <select class="form-control" name="status" value={status}
                                                        onChange={e => onInputChange(e)}>
                                                        <option value={"active"}>active</option>
                                                        <option value={"inactive"}>inactive</option>
                                                    </select>
                                                </div> */}
                                               
                                                <div class="col-sm-12">
                                                    <button>Submit</button>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "></script>
                <script src="js/bootstrap.min.js "></script>
                <script src="js/owl.carousel.js "></script>

            </body>
            <ToastContainer/>
        </html>
    </>
  
    
    );
};

export default ViewPrice;