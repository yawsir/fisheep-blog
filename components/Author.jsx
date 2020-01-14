import React from 'react'
import {Avatar, Divider, Icon, Tooltip} from 'antd'
import '../public/style/component/author.scss'
export default function Author() {
    return (
        <div className='author'>
            <div className="avatar">
                <Avatar icon="user" size={64} src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1846988227"></Avatar>
            </div>
            <p className="author-intro">
                我是一名即将毕业的大学生，自己开发了一个简约的博客网站，用来记录自己的学习和生活，喜欢我写的文章或者对我的文章有意见、建议的朋友，可以添下方qq。
            </p>
            <Divider></Divider>
            <div className="social">
                <Tooltip placement="top" title="https://github.com/iradw">
                    <a href="https://github.com/iradw" target="_blank" rel="noopener noreferrer"><Icon className="icon" type="github" theme="outlined"/></a>
                </Tooltip>

                <Tooltip placement="top" title="1846988227">
                    <Icon type="qq" className="icon" />
                </Tooltip>
            </div>
            <Divider></Divider>
        </div>
    )
}