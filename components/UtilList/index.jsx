import React from 'react';
import './UtilList.scss'
import {Row, Col} from 'antd'

const UtilItem = ({utilLogo, utilName, utilSite}) => {
    return (
        <Col className="util-item" xs={24} sm={12} md={8} lg={6} xl={4}>
            <a className="util-item-wrap" href={utilSite} target="_blank">
                <div className="img-wrap">
                    <img src={utilLogo} alt={utilName}/>
                </div>
                <p className="util-item-name">{utilName}</p>
            </a> 
        </Col>
    )
}

const UtilList = ({utilCateName, list}) => {

    return (
        <div className="util-list">
            <h4 className="util-cate">{utilCateName}</h4>
            <Row className="util-item-list">
                {
                    !!list && list.map( item => <UtilItem key={item.utilId} {...item}></UtilItem>)
                }
                
            </Row>
        </div>
    )
}

export default UtilList