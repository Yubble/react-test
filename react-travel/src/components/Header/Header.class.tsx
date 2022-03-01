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
import store from '../../redux/store'
import { LanguageState } from '../../redux/language/languageReducer'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
  changeLanguageActionCreator,
  addLanguageActionCreator
} from '../../redux/language/languageActions'

interface State extends LanguageState {
  navList: Array<string>
}

class HeaderComponent extends React.Component<WithTranslation, State> {
  constructor(props: any) {
    super(props)
    const storeState = store.getState()

    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
      navList: [
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
    }

    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    const storeState = store.getState()
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList
    })
  }

  menuClickHandler = (e: any) => {
    if (e.key === 'new') {
      // 处理新语言添加action
      const action = addLanguageActionCreator('新语言', 'new_language')
      store.dispatch(action)
    } else {
      const action = changeLanguageActionCreator(e.key)
      store.dispatch(action)
    }
  }

  render(): React.ReactNode {
    const { t } = this.props
    return (
      <div className={styles['app-header']}>
        {/* top header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>{t('header.slogan')}</Typography.Text>
            <Dropdown.Button
              style={{marginLeft: 15}}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {
                    this.state.languageList.map(l => <Menu.Item key={l.code}>{l.name}</Menu.Item>)
                  }
                  <Menu.Item key={"new"}>
                    {t('header.add_new_language')}
                  </Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.state.language === 'zh' ? '中文' : '英文'}
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              {/* <Button onClick={() => this.props.navigate('/register')}>注册</Button>
              <Button onClick={() => this.props.navigate('/signIn')}>登录</Button> */}
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles['main-header']}>
          <span>
            <img src={logo} alt="" className={styles['App-logo']} />
            <Typography.Title
              level={3}
              className={styles.title}
            >
              {t('header.title')}
            </Typography.Title>
          </span>
          <Input.Search
            placeholder='请输入旅游目的地，主题，或关键字'
            className={styles['search-input']}
          />
        </Layout.Header>
        <Menu mode='horizontal' className={styles['main-menu']}>
          {
            this.state.navList.map((m, i) =>  <Menu.Item key={i}>{m}</Menu.Item>)
          }
        </Menu>
      </div>
    );
  }
}

export const Header = withTranslation()(HeaderComponent)