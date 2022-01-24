
import React from "react"
import{ Switch,Route,BrowserRouter}from"react-router-dom"
import { StylesProvider } from "@material-ui/core/styles"
import  Header from "./components/Header"
//zhusih
import MarketingApp from "./components/MarketingApp"
export default()=>{
    return (
      <BrowserRouter>
    <div>
        <Header></Header>
      <MarketingApp></MarketingApp>
    </div>
      </BrowserRouter>  
   )
}