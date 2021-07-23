import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const MasterProduct = () => {
    let history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: "",
        hsn_sac: "",
        discription: "",
        price: "",
        tax: 0,
        tax_type: ""
    });
    const options = {
        headers: { 'token': localStorage.getItem('token') }
    };
    const { name, hsn_sac, discription, price, tax,tax_type } = product;
    const onInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //     loadData();
    // }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", product)
        product.created_by =  localStorage.getItem('subadminid')
        // data.login_type = 'manual'
        console.log("request", product)
        let response = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-product-service`, product, options);
       console.log("response", response)
        if (response.data.code == 200) {
            toast("add successfully");
            setProduct({
                name: "",
                hsn_sac: "",
                discription: "",
                price: "",
                tax: 0,
                tax_type: ""
            });
        } else {
            toast("somthing went wrong");
        }
    };

    // const loadData = async () => {

    //     // const result = 
    //     await axios.get(`${CONSTANT.baseUrl}/api/admin/get-price`, options).then((res) => {
    //         // console.log("response", res.data)
    //         setProduct(res.data.data[0]);
    //     }).catch(err => {
    //         console.warn(err)
    //     })

    // };
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">
            <h3>Add Master/Service</h3>
                        <form onSubmit={e => onSubmit(e)}>
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label>Name </label>
                                    <input type="text" name="name" class="form-control" placeholder="Name Product/service" value={name}
                                        onChange={e => onInputChange(e)} />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>HSN/SAC</label>
                                    <input type="text" name="hsn_sac" class="form-control" placeholder="" value={hsn_sac}
                                        onChange={e => onInputChange(e)} />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Price</label>
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" name="price" class="form-control" placeholder="" value={price}
                                        onChange={e => onInputChange(e)} />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Tax in %</label>
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" name="tax" class="form-control" placeholder="" value={tax}
                                        onChange={e => onInputChange(e)} />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Tax_type</label>
                                    <select name="tax_type" id="fontType" class="form-control" onChange={e => onInputChange(e)}>
                                                                                        <option value="Gst">GST</option>
                                                                                        <option value="Igst" >IGST</option>
                                                                                    </select>
                                    {/* <input type="text" name="tax_type" class="form-control" placeholder="" value={tax_type}
                                        onChange={e => onInputChange(e)} /> */}
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Discription</label>
                                    <textarea type="text" name="discription" class="form-control" placeholder="" value={discription}
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
                   
                <ToastContainer />
            </html>
        </>


    );
};

export default MasterProduct;