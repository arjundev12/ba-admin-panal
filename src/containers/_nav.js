import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Customers',
    to: '/customerlist',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Manage Price',
  //   to: '/price',
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Varifications',
  //   to: '/verification',
  //   icon: 'cil-puzzle',
  //   // _children: [
  //   //   {
  //   //     _tag: 'CSidebarNavItem',
  //   //     name: 'kyc verification',
  //   //     to: '/users',
  //   //   },
  //   //   {
  //   //     _tag: 'CSidebarNavItem',
  //   //     name: 'Number Verification',
  //   //     to: '/users',
  //   //   },
           
  //   // ]
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
    ]
  }
]

export default _nav
