import React from 'react';
import serialize from 'form-serialize';

class AddPersonel extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newPersonel = serialize(e.target, { hash: true });
        //console.log(newMovie);
        this.props.onAddPersonel(newPersonel);
    }


    render() {

        return  (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add an Employees.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"/>
                    </div>
                    </div>
                    
                   
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Surname</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="surname"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Gender</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="gender"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Birthday</label>
                        <input 
                                type="date" 
                                className="form-control" 
                                name="birthday"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">E-Mail</label>
                        <input 
                                type="mail" 
                                className="form-control" 
                                name="email"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Password</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="password"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">About me</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="aboutme"/>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Personel" />
            </form>
        </div>
        )

    }
}


export default AddPersonel;