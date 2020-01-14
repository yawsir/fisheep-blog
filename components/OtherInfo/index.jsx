import React, {useState, useEffect} from 'react'
import './OtherInfo.scss'
import axios from 'axios'
const OtherInfo = () => {

    const [infoList, setInfoList] = useState([]) 
    const getInfo = () => {
        const key = '826ffc457a09aed82d6c7ac9e8cc03e1'
        const date = new Date()
        let month = date.getMonth()+1
        let day = date.getDate()
        month = month < 10 ? '0'+month : month
        day = day < 10 ? '0'+day : day
        const dateStr = month + day
        axios.get(`http://api.tianapi.com/txapi/lishi/index?key=${key}&date=${dateStr}`)
        .then(res => {
            setInfoList(res.data.newslist)
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className="other-info">
            <h3 className="other-info-title">历史上的今天</h3>
            <ul className="info-list">
                
                {
                    infoList.map( (item, index) => (
                        <li className="info-item" key={index}>
                            <p className="item-date">{item.lsdate}</p>
                            <p className="item-content">{item.title}</p>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default OtherInfo