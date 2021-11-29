import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    playGame = () => {
        const action = {
            type: 'play',
        }
        this.props.dispatch(action)
    }
    render() {
        return (
            <div className="ketQua">
                <h2 className="text-warning text">I'm Iron Man !!!</h2>
                <h2 className="text-success text">Số Bàn Thắng: {this.props.ketQua.soBanThang}</h2>
                <h2 className="text-success text">Số Bàn Chơi: {this.props.ketQua.soBanChoi}</h2>
                <button className="btn btn-success p-3" style={{ fontSize: 40 }}
                    onClick={this.playGame}
                >Play game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua : state.gamePlay.ketQua
    }
}


export default connect(mapStateToProps)(KetQuaTroChoi)
