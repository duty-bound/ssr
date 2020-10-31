import React from "react"

export default () => {
    const env = __isClientSide__ ? 'client' : 'server'
    return (
        <>
            <div>Hello world from {env}!</div>
            <img src="/static/kitten.jpg" alt="kitten" />
        </>
    )
}
