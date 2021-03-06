import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {

    choosing = (luaChon) => {
        const action = {
            type: 'chon',
            luaChon
        }
        this.props.dispatch(action)
    }
    render() {
        // console.log(this.props);

        // console.log(choosing);
        return (
            <div className="col-3">
                <div style={{
                    position: 'relative'
                }}>
                    <img src={this.props.yourchoose} className="choose" />
                    <div className="arrow-down" />
                </div>

                <img src="./img/player.png" alt="" style={{ width: 200, marginTop: 12 }} />
                <div>
                    <img src="./img/bua.png" className="choose" style={{ width: 'calc(90%/3)', cursor: 'pointer', marginRight: 5 }}
                        onClick={() => {
                            this.choosing("./img/bua.png")
                        }}
                    />
                    <img src="./img/bao.png" className="choose" style={{ width: 'calc(90%/3)', cursor: 'pointer', marginRight: 5 }}
                        onClick={() => {
                            this.choosing("./img/bao.png")
                        }}
                    />
                    <img src="./img/keo.png" className="choose" style={{ width: 'calc(90%/3)', cursor: 'pointer', marginRight: 5 }}
                        onClick={() => {
                            this.choosing("./img/keo.png")
                        }}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        yourchoose: state.gamePlay.yourChoosing
    }
}

export default connect(mapStateToProps)(Player)
