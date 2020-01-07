import React from 'react'
import {Avatar, Divider, Icon, Tooltip} from 'antd'
import '../public/style/component/author.scss'
export default function Author() {
    return (
        <div className='author'>
            <div className="avatar">
                <Avatar icon="user" size={64}></Avatar>
            </div>
            <p className="author-intro">
                一个热爱前端的大学生，参照<a href="https://www.jspang.com/detailed?id=52" target="_blank">技术胖的教程</a>做了一个博客，记录一些学习生涯中遇到的问题以及一些重要的知识。
            </p>
            <Divider></Divider>
            <div className="social">
                <Tooltip placement="top" title="https://github.com/iradw">
                    <a href="https://github.com/iradw" target="_blank" rel="noopener noreferrer"><Icon className="icon" type="github" theme="outlined"/></a>
                </Tooltip>

                <Tooltip placement="top" title="1237197">
                    <Icon type="qq" className="icon" />
                </Tooltip>
            </div>
            <Divider></Divider>
        </div>
    )
}