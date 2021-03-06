import React, { Component } from 'react'
import Player from './character/Player'
import Computer from './character/Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
export default class Character extends Component {
    render() {
        return (
            <div className="row justify-content-between">
                <Player/>
                <KetQuaTroChoi/>
                <Computer/>
            </div>
        )
    }
}
