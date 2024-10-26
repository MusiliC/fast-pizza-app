/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LinkButton = ({ children, to }) => {

    const className = "text-sm text-blue-500 hover:text-blue-800"

    const navigate = useNavigate();

    if (to === "-1") return <Link className={className} onClick={() => navigate(-1)}>{children}</Link>

    return (
        <Link to={to} className={className}> {children}</Link>
    )
}

export default LinkButton