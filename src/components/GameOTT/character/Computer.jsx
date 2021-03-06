import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        return (

            <div className="col-3">
                <div style={{
                    position: 'relative'
                }}>
                    <img src={this.props.computerChoose} className="choose" style={{height: 150}} />
                    <div className="arrow-down" />
                </div>

                <img src='./img/playerComputer.png'alt="" style={{ width: 200, marginTop: 12 }} />


            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        computerChoose: state.gamePlay.computerChoosing
    }
}

export default connect(mapStateToProps)(Computer)
