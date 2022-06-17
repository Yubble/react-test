/*
 * @Author: Yubble hailen91@qq.com
 * @Date: 2022-06-17 15:50:59
 * @LastEditors: Yubble hailen91@qq.com
 * @LastEditTime: 2022-06-17 16:13:34
 * @FilePath: /react-test/react-pra/src/pages/test_HOC.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
const withState = WrappedComponent => {
    return class extends Component {
        componentWillMount() {
            let data = '高阶组件壳数据'
            this.setState({ data })
        }

        render() {
            return <WrappedComponent data={this.state.data}></WrappedComponent>
        }
    }
}

class child1 extends Component {
    render() {
        return (
            <div>
                <h3>第一子组件</h3>
                <p>传入的data is {this.props.data}</p>
            </div>
        )
    }
}

export const THOC = withState(child1)