import React from 'react'

import '../styles/BadgesList.css'
import { Link } from 'react-router-dom'

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("")
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase())
        })

        setFilteredBadges(result)
    }, [ badges, query ])

    return { query, setQuery, filteredBadges }
}

function BadgesList (props) {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter badges</label>
                    <input value={query}
                        onChange={(event) => { setQuery(event.target.value) }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <br/>
                <h3>No encontramos badges</h3>
                <Link className="btn btn-success" to="/badges/new">Crea tu primer Badge</Link>
            </div>
        )
    }
    return(
        <React.Fragment>
            <div className="form-group">
                <label>Filter badges</label>
                <input value={query}
                       onChange={(event) => { setQuery(event.target.value) }}
                       type="text"
                       className="form-control"
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <Link className="text-reset text-decoration-none" to={`badges/${badge.id}`} >

                            <li className="card" key={badge.id}>
                                <div className="avatar">
                                    <img className="badge-avatar" src={badge.avatarUrl} alt="Avatar"/>
                                    {/* <Gravatar className="badge-avatar" email={badge.avatarUrl} /> */}
                                </div>
                                <div className="description">
                                    <p><strong>{badge.firstName} {badge.lastName}</strong></p>
                                    <p className="twitter"><strong>Twitter: </strong> @{badge.twitter}</p>
                                    <p>{badge.jobTitle}</p>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </React.Fragment>
    )

}

export default BadgesList
