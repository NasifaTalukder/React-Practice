import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App.jsx'
import Test from "./pages/Test.jsx"
import './index.css';
import Clock from "./pages/Clock.jsx"
// import CompCheck from "./pages/CompCheck.jsx";
// import FormTest from './pages/FormTest.jsx';
import Form from './pages/Form.jsx';


ReactDOM.render(
  <>
  <Test/>
  <Clock/>
  {/* <CompCheck/> */}
  {/* <FormTest/> */}
  <Form/>
  </>
,document.getElementById("root"))


