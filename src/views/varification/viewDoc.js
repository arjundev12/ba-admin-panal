import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
const ViewDoc = ({ match }) => {
    let history = useHistory();
    // const user = usersData.find( user => user.id.toString() === match.params.id)
    const [doc, setDoc] = useState([]);
    const [status, setStatus] = useState({
        _id: "",
        isDocumentVerify: ""
    });
    const { id } = useParams();
    const options = {
        headers: {'token': localStorage.getItem('token')}
      }; 
    useEffect(() => {
        // console.warn("params", match.params.id)
        getdata()
    }, []);
    const getdata = async () => {

        const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-kyc?id=${id}`,options);
        const res1 = await axios.get(`${CONSTANT.baseUrl}/api/admin/user-details?_id=${id}`,options)
        console.warn("responseviewDoc", res.data)
        if (res.data.code != 200) {
            toast("Somethig went wrong");
            console.warn(res.data)
        } else {
            toast("Get successfully");
            await setDoc(res.data.data.document);
            await setStatus({
                _id: res1.data.data._id,
                is_complete_kyc: res1.data.data.is_complete_kyc
            })
            //   console.warn("set stattatatat", status)
        }
    }
      const onSubmit = async e => {
        e.preventDefault();
        console.warn("onsubmit", e)
        let data = {}
        if (status.is_complete_kyc) {
          data.is_complete_kyc = status.is_complete_kyc
        }
        data._id = status._id
        console.log("daaaaaaa", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-user`, data, options);
        // console.log("daaaaaaa", response)
        // history.push(`/user/${user.owner._id}`);
          // setTimeout(function () { history.push("/users"); }, 50000);

        if (response.data.code == 200) {
          toast("Update successfully");
          setTimeout(function () {history.push(`/verification`) }, 50000);

        }
        else {
          toast("Somthing went wrong");
          console.warn(response)
        }
      }
    const onInputChange = async e => {
        console.warn("oninput change data before ", status)
        await setStatus({
            _id: status._id,
            is_complete_kyc: e.target.value
        });
        console.warn("oninput change data after ", status)
    };

    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">

                <body>
                    <div class="home-doctors  clearfix">

                        <div class="container">

                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                                    <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                                        {
                                            doc.map((item, i) =>
                                                // <li>{CONSTANT.img_url+'/'+item}</li>
                                                <figure>

                                                    {i + 1} <img width="670" height="300" src={CONSTANT.img_url + item} class="doc-img animate attachment-gallery-post-single wp-post-image" alt="doctor-2" />
                                                </figure>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form class="btn-form" >
                        <div class="form-group col-sm-12">
                            {/* <label"">Status</label> */}
                            <h4 class="heading-status"><select class="form-control fron-select" name="is_complete_kyc" value={status.is_complete_kyc} onChange={e => onInputChange(e)}
                            >
                                <option value={'1'} >approved</option>
                                <option value={'2'}>Panding</option>
                                <option value={'0'}>Not Upload</option>

                            </select>
                                <button class ="btn-sumbit" onClick={e=> onSubmit(e)}>Submit</button>
                            </h4>

                        </div>
                    </form>
                </body>
                {/* <Button className="btn btn-primary" value= "true">Current Status</Button>
        <Button className="btn btn-primary" value= "verify">Verify</Button>
        <Button className="btn btn-primary" value= "reject">Reject</Button>
        <Button className="btn btn-primary" value= "pending">Pending</Button> */}
            </html>
            <ToastContainer />
        </>
    )
}

export default ViewDoc
