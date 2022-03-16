import React from 'react'

const ErrorHandler = props => {

    return (
        <div className="error-handler">
            {props.errors.email && <p>{props.errors.email.message}</p>}
            {props.errors.password && <p>{props.errors.password.message}</p>}
            {props.loginErr.includes('auth/too-many-requests') && <p>Konto tymczasowo zablokowane - zbyt duża liczba nieudanych logowań</p>}
            {(props.errors.email || props.errors.password) ? '' : props.loginErr.includes('auth/wrong-data') && <p>Podano nieprawdziwe dane.</p>}
        </div>

    )
}

export default ErrorHandler