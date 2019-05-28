import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export default ProtectedRoute => {
    class AuthHOC extends Component {
        constructor(props) {
            super(props)
            if (!localStorage.getItem("user") && localStorage.getItem("user") === null) {
                console.log(localStorage.getItem('user'));

                this.props.history.push('/page-one')
            }
        }
        render() {
            return <ProtectedRoute {...this.props} />
        }
    }
    return withRouter(AuthHOC)
}
