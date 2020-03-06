import React from 'react';

import '../styles/BadgeNew.css'
import confLogo from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import Loader from '../components/Loader'
import api from '../api'
import md5 from 'md5'

class BadgeNew extends React.Component {

    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '', 
            lastName: '', 
            email: '',
            jobTitle: '',
            twitter: '', 
            avatarUrl: ''
        } 
    } 

    handleChange = (event) => {
        // const nextForm = this.state.form
        // nextForm[event.target.name] = event.target.value
        
        this.setState({
            form: {
                ...this.state.form, 
                [event.target.name]: event.target.value, 
                avatarUrl: `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?id=identicon`
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            loading: true,
            error: null
        })

        try {
            await api.badges.create(
                this.state.form
            )
            this.setState({
                loading: false
            })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({
                loading: false, 
                error: error
            })            
        }
    }

    render() {
        if (this.state.loading) {
            return <Loader />
        }
        return (
            <React.Fragment>
                <div className="BadgeNew-hero">
                    <img src={confLogo} alt="Logo" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                // envio el objeto con el spread operator 
                                // { ...this.state.form }
                                // y hace lo mismmo que esta aqui debajo
                                firstName= {this.state.form.firstName || 'FIRST_NAME' }
                                lastName= {this.state.form.lastName || 'LAST_NAME' }
                                email= {this.state.form.email || 'EMAIL' }
                                jobTitle= {this.state.form.jobTitle || 'JOB_TITLE' }
                                twitter= {this.state.form.twitter || 'TWITTER' }
                                avatarUrl={this.state.form.avatarUrl}
                            />
                        </div>

                        <div className="col-6">
                            <h1 className="title"> <strong> New Attendant </strong> </h1>
                            <BadgeForm onChange={this.handleChange} 
                                       formValues={this.state.form}
                                       onSubmit = {this.handleSubmit}
                                       error = {this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew