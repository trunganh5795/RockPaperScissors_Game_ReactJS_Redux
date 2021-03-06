import React, { Component } from 'react'
import Character from './Character'
import './style.css'

export default class GameOanTuTi extends Component {
    render() {
        return (
            <div>
                <div className="bgGame" />
                <div className="container pt-5">

                    <Character />

                </div>

            </div>
        )
    }
}
