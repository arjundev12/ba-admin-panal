import React from 'react';
import DAsbosdbjsdf from './views/dashboard/Dashboard'
// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./views/base/tables/Tables'));

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// const getCategories = React.lazy(() => import('./views/categories/getCategories'));
// const addCategories = React.lazy(() => import('./views/categories/addCategories'));
// const getSubcategories = React.lazy(() => import('./views/subcategories/getSubcategories'));
// const AddSubcategories = React.lazy(() => import('./views/subcategories/addSubcategory'));
// const getChapters = React.lazy(() => import('./views/chapters/getChapters'));
// const AddChapter = React.lazy(() => import('./views/chapters/addChapter'));

// const GetQuestions = React.lazy(() => import('./views/questions/getQuestions'));
// const AddQuestions = React.lazy(() => import('./views/questions/addQuestion'));

// const GetFaq = React.lazy(() => import('./views/faq/getFaq'));
// const UpdateFaq = React.lazy(() => import('./views/faq/updateFaq'));

// const GetSubscription = React.lazy(() => import('./views/subscription/getSubscription'));
// const AddSubscription = React.lazy(() => import('./views/subscription/addSubscription'));

const Users = React.lazy(() => import('./views/users/Users'));
const Customerlist = React.lazy(() => import('./views/Customers/customerlist'));
const CustomerDetails = React.lazy(() => import('./views/Customers/customerDetails'));
const InvoiceAdd = React.lazy(() => import('./views/Customers/invoice'));
const MasterProduct = React.lazy(() => import('./views/Customers/masters'));
const DocumentsList = React.lazy(() => import('./views/Customers/documents'));
const AddFolder = React.lazy(() => import('./views/Customers/addfolder'));

const routes = [

  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/customerlist', exact: true, name: 'Customerlist', component: Customerlist },

  { path: '/customer-details/:id', exact: true, name: 'CustomerDetails', component: CustomerDetails },
  { path: '/add/invoice/:id', exact: true, name: 'invoice', component: InvoiceAdd },

  { path: '/master-product', exact: true, name: 'MasterProduct', component: MasterProduct },
  { path: '/documents', exact: true, name: 'documents', component: DocumentsList },

  { path: '/add/folder/:id', exact: true, name: 'AddFolder', component: AddFolder },
  // { path: '/add/chapter', exact: true, name: 'Add Chapter', component: AddChapter },

  // { path: '/questions', exact: true, name: 'questions', component: GetQuestions },
  // { path: '/add/question', exact: true, name: 'Add question', component: AddQuestions },

  // { path: '/faq', exact: true, name: 'faq', component: GetFaq },
  // { path: '/update/faq/:id', exact: true, name: 'reply', component: UpdateFaq },

  // { path: '/subscription', exact: true, name: 'Subscription', component: GetSubscription },
  // { path: '/add/subscription', exact: true, name: 'Add Subscription', component: AddSubscription },



  // { path: '/users/add-users', name: 'Add User', component: AddUsers },

  // { path: '/user/:id', exact: true, name: 'User Details', component: User },
  // { path: '/user/edit/:id', exact: true, name: 'Edit User', component: EditUser },

];

export default routes;
