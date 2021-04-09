import { defaultFormatUtc } from 'moment';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../styles/Ides.css';



const Ides = () =>
{
    return(
        <div>
            <body className="card_body" >
                <div className="contaier">

                    <h3 className="heading">
                        Welcome to IDES Guides!
                    </h3>
                    <div className="row">
                        <div className="card">
                           
                            <div className="vs_pic"></div>

                            <div className="card_body">
                                <p>Hello Students </p>

                            </div>
                        </div>

                        <div className="card">
                            <div className="vs_code"></div>

                            <div className="card_body">
                                <p>Hello Students </p>

                            </div>
                        </div>

                        <div className="card">
                            <div className="python"></div>

                            <div className="card_body">
                                <p>Hello Students </p>

                            </div>
                        </div>

                        <div className="card">
                            <div className="replit"></div>

                            <div className="card_body">
                                <p>Hello Students </p>

                            </div>
                        </div>

                        <div className="card">
                            <div className="virtualb"></div>

                            <div className="card_body">
                                <p>Hello Students </p>

                            </div>
                        </div>

                        <div className="card">
                            <div className="online"></div>

                            <div className="card_body">
                                <p>Hello Students </p>

                            </div>
                        </div>

                    </div>
                </div>
            </body>

            <small>VS code is what's up!!!</small>
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>
    );
}


export default Ides;