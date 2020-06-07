import React, { Component } from 'react'
import { WebDev } from '../components/WebDev'
import Marketing from '../components/Marketing'
import Webabout from '../components/Webabout'
import Appdev from '../components/Appdev'

export default class Courses extends Component {
    render() {
        return (
            <div>
                <WebDev />
                <Webabout />
                <Marketing />
                <Appdev />
            </div>
        )
    }
}
