import React from 'react'
import { renderRoutes } from 'react-router-config'
import MenuLink from './MenuLink'

export default ({ route }) => {
    return (
        <>
            <p>
                <img src="/static/kitten.jpg" alt="kitten" />
            </p>
            <div>
                {route.routes.map(route => (
                    <MenuLink route={route} />
                ))}
            </div>
            {renderRoutes(route.routes)}
        </>
    )
}