import logo from './logo.svg';
import './App.css';
import signup from './component/signup';
import login from './component/login';
import dashboad from './component/dashboad';
import validate from './component/validate';
import DetailPerfume from "./component/DetailPerfume";
import DetailCustomer from "./component/DetailCustomer";
import React from 'react';
import FormCustomer from "./component/FormCustomer";
// import {HeaderNew} from "./component/HeaderNew";
import Header from "./component/Header";

import Footer from './component/Footer';
import DashboadPerfume from "./component/DashboadPerfume";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Chat from "./component/chat/Chat";

class App extends React.Component {
  render() {

    return (
      
      <Router>
        <Header/>
           <Switch>
             <Route path="/signup" exact component={signup}/>
             <Route path="/chat" exact component={Chat}/>
             <Route path="/" exact component={login}/>
             <Route path="/validate" exact component={validate}/>
             <Route path="/dashboad" exact component={dashboad }/>    
             <Route path="/formcustomer" exact component={FormCustomer }/>  
             <Route path="/DashboadPerfume" exact component={DashboadPerfume}/>  
             <Route path="/detailperfume" exact component={DetailPerfume }/> 
             <Route path="/detailcustomer" exact component={DetailCustomer  }/> 
                   
           </Switch>  
           <Footer/>
    </Router>

    );
  }
}

export default App;
