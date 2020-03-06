import React from 'react'
import Loader from '../components/Loader'
import NotFound from '../components/NotFound'
import api from '../api'
import BadgeDetails from '../pages/BadgeDetails'

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null, 
        data: undefined, 
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true, 
            error: null
        });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
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

    handleCloseModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    handleOpenModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    handleDeleteBadge = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            )

            this.props.history.push('/badges')
            this.setState({
                loading: false
            })
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

        if (this.state.error) {
            return <NotFound error={this.state.error} />
        }

        return(
            <BadgeDetails 
                onCloseModal={this.handleCloseModal} 
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                badge={this.state.data}
            />
        )
    }
}

export default BadgeDetailsContainer