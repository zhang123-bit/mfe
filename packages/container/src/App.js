
import React from "react"
import{ Switch,Route,BrowserRouter}from"react-router-dom"
import { StylesProvider } from "@material-ui/core/styles"

import MarketingApp from "./components/MarketingApp"
export default()=>{
    return <div>
     <MarketingApp></MarketingApp>
    </div>
}