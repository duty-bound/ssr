import React from 'react'
import { useParams } from 'react-router'

export default () => {
    const { color } = useParams()

    return (
        <p>
            ...and I am <strong>{color}</strong>!
        </p>
    )
}