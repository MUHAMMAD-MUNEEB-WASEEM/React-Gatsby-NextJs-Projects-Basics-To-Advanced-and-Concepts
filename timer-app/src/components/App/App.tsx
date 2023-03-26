import React from 'react';

//importing timer component
import Timer from '../Timer/Timer';
import '../Timer/Timer'
import './App.css';
import { configNotification } from '../../firebase';

function App(){
    configNotification()
    return (
    <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    <div className='container'>
        <Timer />
    </div>
    </div >
    )
};
export default App;