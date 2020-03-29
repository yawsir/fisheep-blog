import React, { useState, useEffect}from 'react';
import './Progress.scss'
const Progress = (props) => {

    const [isHalf, setIsHalf] = useState(false)
    const [pr1Deg, setPr1Deg] = useState(-180)
    const [pr2Deg, setPr2Deg] = useState(-180)

    const setProgress = (min, max, current) => {
        if (current > max) {
            current = max
        }
        const totalDeg = current / (max - min) * 360
        let pr1Deg, pr2Deg = -180
        let isHalf = false
        // console.log(current)
        if (totalDeg <= 180) {
            pr1Deg = -(180-totalDeg)
            pr2Deg = -180
            isHalf = false
        }else {
            pr1Deg = 0
            pr2Deg = -(360-totalDeg)
            isHalf = true
        }
        setPr1Deg(() => pr1Deg)
        setPr2Deg(() => pr2Deg)
        setIsHalf(() => isHalf)
        
    }
    useEffect( () => {
        setProgress(props.min, props.max, props.current)
    }, [props.current])

    return (
        <div className="progress-container" >
            <div className="circle-progress" >
                <div className="pr-content" style={{backgroundColor: props.ctColor}}>{props.label ? props.label : '自定义'}</div>
                <div className="bg2" style={{backgroundColor: props.bgColor}}></div>
                <div className="bg1" style={{backgroundColor: props.bgColor}}></div>
                <div className="pr2" 
                    style={{transform: `rotate(${pr2Deg}deg)`, 
                            visibility: `${isHalf ? 'visible' : 'hidden'}`, backgroundColor: props.prColor}}>
                </div>
                <div className="pr1" style={{transform: `rotate(${pr1Deg}deg)`, backgroundColor: props.prColor}}></div>
            </div>
        </div>
    )
}

export default Progress