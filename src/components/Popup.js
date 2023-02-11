import React  from "react";
import { useLocation } from "react-router-dom";
import { Alert } from 'antd';

function Popup(){
    const location = useLocation();
    return (<Alert message='Perfromance'description={`speed = ${location.state.speed}  & accuracy = ${location.state.accuracy}`}closabale></Alert>)
}

export default Popup;