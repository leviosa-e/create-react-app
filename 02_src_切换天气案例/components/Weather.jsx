import React, { Component } from "react";

export default class Weather extends Component {
    state = { isHot: true }
    changeWeather = () => {
        const {isHot} = this.state
        this.setState({ isHot: !isHot })
    }
    render() {
        return (
        <div>
            <h2>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h2>
            <button onClick={this.changeWeather}>点击切换天气</button>
        </div>
        )
    }
}