import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'

import api from '../api'

import Loader from '../components/Loader'

class Badges extends React.Component {
    
    // el constructor se llama primero
    // es el lugar ideal para inicializar estado
    // Siempre que usemos el constructor debemos pasar como argumento los props
    // y llamar a la superclase con props para que se inicialice la superclase
    constructor(props) {
        super(props)
        console.log('1. constructor()')

        this.state = {
            data: undefined, 
            loading: true, 
            error: null
        }

    }

    // se llama cada vez que el componenten se actualiza
    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()')

        console.log({
            prevProps: prevProps, 
            prevState: prevState
        })

        console.log({
            props: this.props, 
            state: this.state
        })
    }

    // momento preciso antes de que el componente se vaya del DOM
    componentWillUnmount() {
        console.log('6. componentWillUnmount()')

        // cancelamos el setTimeout si el componente se desmontara
        // esto sirve para limpiar memoria
        clearTimeout(this.timeoutId)
        clearInterval(this.intervalId)
    }

    // finalmente el componentDidMount se llama
    // componentDidMount es el lugar perfecto para realizar peticiones a APIs
    // pues tenemos por seguro que el codigo de nuestro componente ya esta listo
    componentDidMount() {
        console.log('3. montaje()')

        // simulacion de un pedido http
        // setTimeout regresa un id al completarse 
        // ese id sirve para que si existe el id y el trabajo esta
        // pendiente puede cancelar el setTimeout
        // this.timeoutId = setTimeout(() => {
        //     this.setState({
        //         data: [
        //             {
        //                 id:'2de30c42-9deb-40fc-a41f-05e62b5939a7',
        //                 firstName:'Freda',
        //                 lastName:'Grady',
        //                 email:'Leann_Berge@gmail.com',
        //                 jobTitle:'Legacy Brand Director',
        //                 twitter:'FredaGrady22221-7573',
        //                 avatarUrl:'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon'
        //             },
        //             {
        //                 id:'d00d3614-101a-44ca-b6c2-0be075aeed3d',
        //                 firstName:'Major',
        //                 lastName:'Rodriguez',
        //                 email:'Ilene66@hotmail.com',
        //                 jobTitle:'Human Research Architect',
        //                 twitter:'ajorRodriguez61545',
        //                 avatarUrl:'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon'
        //             },
        //             {
        //                 id:'63c03386-33a2-4512-9ac1-354ad7bec5e9',
        //                 firstName:'Daphney',
        //                 lastName:'Torphy',
        //                 email:'Ron61@hotmail.com',
        //                 jobTitle:'National Markets Officer',
        //                 twitter:'DaphneyTorphy96105',
        //                 avatarUrl:'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon'
        //             },
        //         ],
        //     });
        // }, 3000);

        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    fetchData = async () => {
        // cambiamos el estado porque puede que llamemos a este metodo varias veces
        this.setState({
            loading: true, 
            error: null
        })

        // hacemos la llamada a la API
        try {
            const data = await api.badges.list()
            this.setState({
                loading: false, 
                data: data
            })
        } catch (error) {
            this.setState({
                loading: false, 
                error: error
            })
        }
    }

    // el render se llama de segundo
    render() {
        if (this.state.loading === true && !this.state.data) {
            return <Loader></Loader>
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        console.log('2/4. render()')
        return(
            <React.Fragment>

                <div className="Badges">
                    <div className="Badges-hero">
                        <div className="Badges-container">
                            <img className="Badges-conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="col-md-6 col-sm-12 offset-md-3">

                        <div className="Badge-container">
                            <div className="Badges-button">
                                <Link className="btn btn-success" to="/badges/new">New Badge</Link>
                            </div>
                        </div>

                        <div className="Badges-list">
                            <div className="Badges-container">
                                <BadgesList badges={this.state.data} />
                            </div>
                        </div>

                    </div>
                </div>

                {this.state.loading && 'Loading...'}

            </React.Fragment>
        )
    }
}

export default Badges