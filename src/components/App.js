import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import Badges from '../pages/Badges'
import Layout from '../components/Layout'
import NotFound from './NotFound'

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/badges' component={Badges} />
                    <Route exact path='/badges/new' component={BadgeNew} />
                    <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
                    <Route exact path='/badges/:badgeId/' component={BadgeDetailsContainer} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App