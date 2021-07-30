import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown, Modal, Form, Tabs, Tab, } from 'react-bootstrap'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'
import mail1 from '../../assets/email.png'
import call1 from '../../assets/call.png'
import fileIcon from '../../assets/fileIcon.png'
import folderIcon from '../../assets/blueFildericon.png'
import FileViewer from "react-file-viewer";
import { CustomErrorComponent } from 'custom-error';

import '../../css/style.css'
const AddFolder = () => {
    //httpEquiv
    let history = useHistory();
    const { id } = useParams();
    const [show, setShow] = useState(false);
    useEffect(() => {
        loadData(id)
    }, [folders, files])
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
    const [folders, setFolder] = useState([]);
    const [files, setFiles] = useState([]);
    const [filetype, setFileType] = useState('outer');
    const loadData = async (id) => {
        let response = await axios.get(`${CONSTANT.baseUrl}/api/admin/customer-details/${id}`);
        console.log(response.data.data.tax_info)
        if (response.data.code == 200) {
            toast("Add successfully");
            await setCustomer(response.data.data)
        } else {
            console.log("response", response)
        }
        let responsefolder = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-folder?customer_id=${id}`);
        console.log(responsefolder.data.data)
        if (responsefolder.data.code == 200) {
            toast("Add successfully");
            await setFolder(responsefolder.data.data)
        }
        let responsefile = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-file?customer_id=${id}`);
        console.log(responsefile.data.data)
        if (responsefile.data.code == 200) {
            toast("Add successfully");
            await setFiles(responsefile.data.data)
        }
    }

    const [filepath, setFilepath] = useState();
    let folder_id = ''
    const onSetFile = async e => {
        console.warn("............image....", [e.target.name], e.target.files[0])
        const formData = new FormData();
        formData.append(
            "file",
            e.target.files[0],
        );
        console.warn("file", formData)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/aws/upload/image`, formData, { "Content-Type": "multipart/form-data" });
        console.log("response", res.data)
        if (res.data.code == 200) {
            setFilepath(res.data.result)
        } else {
            console.warn("error", res.data.message)
        }
        console.log("filepath", filepath)
    }
    const onSaveFile = async (e) =>{
        e.preventDefault()
        console.log("folder_name" , file_name, id, folder_id,filepath)

        let data = {}
        data.name = file_name
        data.customer_id= id
        data.is_file = true
        data.file_path = filepath
        if (folder_id !=''){
            data.parent_folder_id =folder_id
        }
        console.log("request",data)
         let responsefolder = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-folder-file`, data);
        if (responsefolder.data.code == 200) {
            await setFileType('outer')
            await loadData(id)
            // await setOpenFileModal(false)
        } else {
            console.log("error", responsefolder.data)
        }
    }
    //////////////////////////////add folder///////////////////////////////
    // const [folder_name, setOpenModal] = useState(false)
    let folder_name = ''
    let file_name = ''
    const [openModal, setOpenModal] = useState(false)
    const [openFileModal, setOpenFileModal] = useState(false)
    const modalHaldeler = async (e) => {
        if (e.target.name == 'file_upload') {
            e.target.value == 'false' ? await setOpenFileModal(false) : await setOpenFileModal(true)
            await loadData(id)
        } else {
            e.target.value == 'false' ? await setOpenModal(false) : await setOpenModal(true)
        }
    }
    const onInputChange = (e) => {
        if(e.target.name =='file_name'){
            file_name = e.target.value
        }else if(e.target.name =='folder_id'){
            folder_id = e.target.value
        }else{
            folder_name = e.target.value
        }
       
        console.log("e.targat.name", e.target.name, e.target.value)
    }
    const saveData = async (e) => {
        e.preventDefault()
        console.log("folder_name", folder_name)
        let data = {};
        data.name = folder_name
        data.customer_id = id
        data.is_file = false
        data.created_by = id
        let responsefolder = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-folder-file`, data);
        if (responsefolder.data.code == 200) {
            await setFileType('outer')
            await loadData(id)
            await setOpenModal(false)
        } else {
            console.log("error", responsefolder.data)
        }
    }
    //////////////////////////////////////////
    const handelClickfolder = async (e, item) => {
        // e.preventDefault()
        console.log("hisbsjbjds", item)
        if (item.is_file == false) {
            console.log("hisbsjbjds", item._id)
            let responsefolder = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-folder-byid?customer_id=${id}&folder_id=${item._id}`);
            if (responsefolder.data.code == 200) {
                setFolder(responsefolder.data.data)
                await setFileType('inner')
            } else {
                setFolder([])
            }
            let filsedata = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-file-byid?customer_id=${id}&folder_id=${item._id}`);
            if (filsedata.data.code == 200) {
                let arradatasdassdf = filsedata.data.data
                await setFileType('inner')
                await setFiles(filsedata.data.data)
                files.push(arradatasdassdf[0])
            } else {
                setFiles([])
            }
        }

        console.log("afterset", files)


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

                            </div>
                            <Button className='fltR' alignRight value={true} onClick={modalHaldeler}>Create Folder</Button>

                            {filetype == 'outer' ? <div>
                                <div>folders</div>
                                <div class="card-box">

                                    {folders.map((item) => <div class="folder1">
                                        <a name="folder" onClick={e => handelClickfolder(e, item)}>
                                            {/* <img src = {folderIcon}  height= "50" width = "150"></img> */}
                                            <h5>Name:{item.name}</h5>
                                            <p className="paid">Type: folder</p>
                                        </a>

                                    </div>)}
                                </div>
                                <div>file</div>
                                <div class="card-box">
                                    {files.map((item) => (item.is_file == true && !item.parent) ? <div class="folder1">
                                        {console.log(item)}
                                        <a name="file" href={item.file_path}  >
                                            <h5> Name:{item.name}</h5>
                                            <p className="paid">Type: file</p>
                                        </a>

                                    </div> : console.log(item)
                                    )}
                                </div>

                            </div> : folders.length == 0 ? <div>
                                <div>file</div>
                                <div class="card-box">
                                    {files.map((item) => <div class="folder1">
                                        <a name="file" href={item.file_path} >
                                            <h5> Name:{item.name}</h5>
                                            <p className="paid">Type: file</p>
                                        </a>

                                    </div>
                                    )}
                                </div>
                            </div> : <div>
                                <div>folders</div>
                                <div class="card-box">

                                    {folders.map((item) => <div class="folder1">
                                        <a name="folder" onClick={e => handelClickfolder(e, item)}>
                                            <h5> Name:{item.name}</h5>
                                            <p className="paid">Type: folder</p>
                                        </a>

                                    </div>)}
                                </div>
                                <div>file</div>
                                <div class="card-box">
                                    {files.map((item) => <div class="folder1">
                                        <a name="file" href={item.file_path}  >
                                            <h5> Name:{item.name}</h5>
                                            <p className="paid">Type: file</p>
                                        </a>

                                    </div>
                                    )}
                                </div>

                            </div>
                            }
                            <Button className='fltR' alignRight value={true} name='file_upload' onClick={modalHaldeler}>upload file</Button>
                        </div>
                    </div>
                    <Modal show={openFileModal} >
                        <Modal.Header closeButton >
                            <Modal.Title>{"cityData.name"}</Modal.Title>
                        </Modal.Header>
                        <div class="modal-header login-header">
                            <h4 class="modal-title">Add file</h4>
                            <button type="button" class="close" data-dismiss="modal" value={false} name='file_upload' onClick={modalHaldeler}>×</button>
                            {/*  value={false} onClick={opneAddorderModal} */}

                        </div>
                        <div class="row mt-60">
                            <div class="col-md-12 col-sm-12">
                                <div class="modal-body">
                                    <Form>

                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            {/* <input  type="text" placeholder="Client PO Number" ></input> */}
                                            <Form.Control type ="file" placeholder="selet file" name="file" onChange={onSetFile} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            {/* <input  type="text" placeholder="Client PO Number" ></input> */}
                                            <Form.Control placeholder="Enter Folder Name" name="file_name" onChange={onInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            <select class="form-control" name="folder_id"
                                                onChange={e => onInputChange(e)} >
                                                {folders.map(item => (
                                                    <option value={item._id}>{item.name}</option>
                                                ))}
                                            </select>
                                        </Form.Group>
                                    </Form> </div>
                            </div>
                        </div>
                        <div class='footer-side'>
                            <Modal.Footer>
                                <Button variant="secondary" value={false} name='file_upload' onClick={modalHaldeler} > Close </Button>
                                <Button variant="primary" onClick={onSaveFile} > save</Button>
                            </Modal.Footer>
                        </div>

                    </Modal>

                    <Modal show={openModal} >
                        <Modal.Header closeButton >
                            <Modal.Title>{"cityData.name"}</Modal.Title>
                        </Modal.Header>
                        <div class="modal-header login-header">
                            <h4 class="modal-title">Add Folder</h4>
                            <button type="button" class="close" data-dismiss="modal" value={false} onClick={modalHaldeler}>×</button>
                            {/*  value={false} onClick={opneAddorderModal} */}

                        </div>
                        <div class="row mt-60">
                            <div class="col-md-12 col-sm-12">
                                <div class="modal-body">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            {/* <input  type="text" placeholder="Client PO Number" ></input> */}
                                            <Form.Control placeholder="Enter Folder Name" name="folder_name" onChange={onInputChange} />
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
                    <script src="js/jquery.min.js"></script>
                    <script src="js/popper.min.js"></script>
                    {/* {filedata == true ? <FileViewer
                        fileType={'pdf'}
                        filePath={"https://atpl-education.s3.amazonaws.com/customer-document/sample.pdf-1627481640976.pdf"}
                        errorComponent={CustomErrorComponent}
                        onError={e => onError(e)} /> : ""} */}
                </body>

            </html>

            {/* <ToastContainer /> */}

        </>
    )
}

export default AddFolder
