import React from 'react';
import '../styles/BadgeForm.css'

class BadgeForm extends React.Component {

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleClick = (event) => {
        console.log('button was clicked')
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state)
    // }

    render() {
        return (
            <div>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                               className="form-control" 
                               name="firstName" 
                               value={this.props.formValues.firstName} 
                               type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} 
                               className="form-control" 
                               name="lastName" 
                               value={this.props.formValues.lastName} 
                               type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                               className="form-control" 
                               name="email" 
                               value={this.props.formValues.email} 
                               type="email"/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} 
                               className="form-control" 
                               name="jobTitle" 
                               value={this.props.formValues.jobTitle} 
                               type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                               className="form-control" 
                               name="twitter" 
                               value={this.props.formValues.twitter} 
                               type="text"/>
                    </div>

                    {/* un boton dentro de un formulario se comporta con el tipo submit, lo que hace que 
                    al clickearlo se recargue la pagina. Para evitar tenemos dos opciones: 
                    1.- declarar el tipo del boton como button 
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    2.- evitar el comportamiento por defecto en la funcion con event.preventDefault() como en handleSubmit(e) */}
                    
                    {/* if (this.props.error) { <p></p> } */}
                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}

                    <button  onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm