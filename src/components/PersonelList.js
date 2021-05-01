import React from 'react';
import { Link } from 'react-router-dom';

const PersonelList = (props) => {


    const employees=props.employees.map((personel, i) => {
        
        return (
            <div className="row">  
                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            
                            <div className="card-body">
                                <h5 className="card-title">{personel.firstName}</h5>
                                <h5 className="card-title">{personel.lastName}</h5>
                                <p className="card-text">{personel.gender}</p>
                                <p className="card-text">{personel.birhday}</p>
                                <p className="card-text">{personel.email}</p>
                                <p className="card-text">{personel.password}</p>
                                <p className="card-text">{personel.about}</p>      
                                                                   
                                </div>
                            </div>
                        </div>          
            </div>
        )})
        return(
            <div>
                {employees}
            </div>
        ) }
        



export default PersonelList;