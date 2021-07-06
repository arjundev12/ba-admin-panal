import React, { useState, useEffect } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import axios from "axios";
import *as  CONSTANT from '../../constant'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WidgetsDropdown = () => {
  // const [total, setTotal] = useState([]);
  // const [totalCount, setTotalCount] = useState({
  //   allTotal :0
  // });
  // const options = {
  //   headers: {'token': localStorage.getItem('token')}
  // };
  // const color =["gradient-primary","gradient-info", "gradient-primary"]
  // useEffect(() => {
  //   getdata()
  // }, []);

  // const getdata = async (id) => {
  //   const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-total`, options);
  //   console.warn("response", res.data)
  //   if (res.data.code != 200) {
  //     toast("Somethig went wrong");
  //   } else {
  //     toast("Get successfully");
  //     for (const item of res.data.data) {
  //       totalCount.allTotal += item.COUNT
  //     }
  //     setTotal(res.data.data);
  //   }
  // }

  // render
  return (
    <>
      <CRow>
        {/* {
          total.map((item, i) => <CCol sm="6" lg="3">
            <CWidgetDropdown 
              color={color[i]}
              header={item.COUNT}
              text={item._id.block_user== 1 ? "Block Users": item._id.minner_Activity == true? "Online Users" : "Ofline Users" }
              footerSlot={
                <ChartLineSimple
                  pointed
                  className="c-chart-wrapper mt-3 mx-3"
                  style={{ height: '70px' }}
                  dataPoints={[65, 59, 84, 84, 51, 55, 40]}
                  pointHoverBackgroundColor="primary"
                  label="Members"
                  labels="months"
                />
                
              }
              
            >
            </CWidgetDropdown>
          </CCol>
          )
        } */}
         <CCol sm="6" lg="3">
            <CWidgetDropdown
              color="gradient-primary"
              header="50000"
              text={"Total Users" }
              footerSlot={
                <ChartLineSimple
                  pointed
                  className="c-chart-wrapper mt-3 mx-3"
                  style={{ height: '70px' }}
                  dataPoints={[65, 59, 84, 84, 51, 55, 40]}
                  pointHoverBackgroundColor="primary"
                  label="Members"
                  labels="months"
                />
              }
            >
            </CWidgetDropdown>
          </CCol>
      </CRow>
    </>
  )
}

export default WidgetsDropdown
