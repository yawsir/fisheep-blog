import React from 'react'
import {Header} from '../components'
import {Row, Col} from 'antd'
export default function Life() {
    return (
        <div>
            <Header selectdKey='life'></Header>
            <Row className="content" type="flex" justify="center" >
                <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={15}>生活</Col>
                <Col className="content-right" xs={0} sm={0} md={7} lg={5} xl={5}>右</Col>
            </Row>
        </div>
    )
}