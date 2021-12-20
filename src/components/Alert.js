import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <div style={{height: '80px'}}>
                {alert &&  <div style={{width:"40%", margin: "0 auto", 'text-align': "center","z-index": "1000"}} class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Sorry!</strong> No More Data To Show.
                </div>}
            </div>
        )
    }
}
