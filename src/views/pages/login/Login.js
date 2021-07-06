import React, { useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import navigation from '../../../containers/_nav'
import *as  CONSTANT  from '../../../constant'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allEntry, setAllEntry] = useState([])
  const history = useHistory();
  const submitForm = async (e) => {
    e.preventDefault()
    const newEntry = { email: email, password: password }
    setAllEntry([...allEntry, newEntry])
    const res = await axios.post(`${CONSTANT.baseUrl}/api/subadmin/login`, newEntry);
    console.warn(res.data)
    if (res.data.code == 200) {
      // toast("Get successfully");
      localStorage.setItem('Auth', true);
      localStorage.setItem('subadminid', res.data.data._id);
      localStorage.setItem('token', res.data.data.token);
      setTimeout(function(){history.push('/'); }, 500);
      setTimeout(function(){ localStorage.clear(); }, 1000 * 60 * 48);
    }
    console.warn(allEntry)
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm action="" onSubmit={submitForm}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="email" autoComplete="email"
                       value={email} onChange={(e) => setEmail(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" 
                       value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4"  type="submit">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
   <ToastContainer/>
    </div>
  )
}

export default (withRouter(Login))