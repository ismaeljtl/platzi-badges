import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import '../styles/BadgeDetails.css'

// custom Hook
function useIncreaseCounter(max) {
    const [ count, setCount ] = React.useState(0);

    if ( count > max) {
        setCount(0);
    }

    return [count, setCount];
}

function BadgeDetails (props) {
    const badge = props.badge;

    // const [ state, setState ] = React.useState(?initialState)
    const [ count, setCount ] = useIncreaseCounter(4);

    return (
        <React.Fragment>
            <div className="details-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={logo} alt="Logo de conferencia"/>
                        </div>
                        <div className="col-6">
                            <div className="attendant-name">
                                <h1>{badge.firstName}</h1>
                                <h1>{badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge {...badge} />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <button onClick={() => {
                                setCount(count + 1)
                            }} className="btn btn-primary mr-4">Increase Counter: {count}</button>
                            <Link className="btn btn-success mb-4" to={`/badges/${badge.id}/edit`}>
                                Edit
                            </Link>
                            <br/>
                            <button onClick={props.onOpenModal} className="btn btn-danger" >
                                Delete
                            </button>
                            <DeleteBadgeModal 
                                isOpen={props.modalIsOpen} 
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default BadgeDetails