/*
 * @Name: header组件
 * @Description: header组件
 * @Author: 刘燕保
 * @Date: 2022-02-05 14:47:11
 */
import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

export const Header : React.FC = () => {
  const navigate = useNavigate()
  const navList = [
    '旅游首页',
    '周末游',
    '跟团游',
    '自由行',
    '私家团',
    '游轮',
    '酒店+景点',
    '当地玩乐',
    '主题游',
    '定制游'
  ]

  return (
    <div className={styles['app-header']}>
      {/* top header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{marginLeft: 15}}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => navigate('/register')}>注册</Button>
            <Button onClick={() => navigate('/signIn')}>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigate('/')}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title
            level={3}
            className={styles.title}
          >
            React 旅游网
          </Typography.Title>
        </span>
        <Input.Search
          placeholder='请输入旅游目的地，主题，或关键字'
          className={styles['search-input']}
        />
      </Layout.Header>
      <Menu mode='horizontal' className={styles['main-menu']}>
        {
          navList.map((m, i) =>  <Menu.Item key={i}>{m}</Menu.Item>)
        }
      </Menu>
    </div>
  );
}
