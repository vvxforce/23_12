import React from 'react'

import './Loader.css'

const Loader = ({fullScreen = false}) => {
    const fullScreenStyle = fullScreen ? {
        position: "sticky",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: "10"
    } : {}
    return (
        <div className="loader__container" style={fullScreenStyle}>
            <div className="loader">
                <div className="ball one">
                    <div className="inner" />
                </div>
                <div className="ball two">
                    <div className="inner" />
                </div>
                <div className="ball three">
                    <div className="inner" />
                </div>
                <div className="ball four">
                    <div className="inner" />
                </div>
                <div className="ball five">
                    <div className="inner" />
                </div>
                <div className="ball six">
                    <div className="inner" />
                </div>
                <div className="ball center">
                    <div className="inner" />
                </div>
            </div>
        </div>
    )
}

export default Loader
