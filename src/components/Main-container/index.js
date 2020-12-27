import React, { useState, useEffect } from 'react'
import './styles.css'

function MainContainer() {
    const [currentHours, setCurrentHours] = useState()
    const [currentMin, setCurrentMin] = useState()
    const [currentSec, setCurrentSec] = useState()

    setInterval(() => {
        let time = new Date()
        setCurrentHours(time.getUTCHours())
        setCurrentMin(time.getMinutes())
        setCurrentSec(time.getSeconds())
    }, 1000)

    useEffect(() => {

        console.log('I am Awais Niazz')
    }
    )

    return (
        < div className="conatiner">
            <div className="conatiner2">
                <div className="time-header">
                    <div>HH</div>
                    <div>MM</div>
                    <div>SS</div>
                </div>
                <div className="actual-time">
                    <div>{currentHours}</div>
                    <div>{currentMin}</div>
                    <div>{currentSec}</div>
                </div>
            </div>
        </div >
    )
}

export default MainContainer
