import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './PageTwo.scss';
import { decorate, observable } from 'mobx';
import { AutoComplete } from 'antd'

class PageTwo extends Component {
    dataSource = ["INR", "EUR", "USD", "AUD", "BMD", "CAD", "CNY", "DKK", "EGP", "JPY"]
    constructor(props) {
        super(props)
        this.props = props
        if (JSON.parse(localStorage.getItem('user')) === null) {
            localStorage.removeItem('user')
            this.props.history.push('/page-one')
            return
        }
        this.props.Store.setUser(JSON.parse(localStorage.getItem('user')))
    }

    onSelect = (value) => {
        this.props.Store.setCurrency(value)
        this.props.history.push('/page-three')
    }

    render() {
        return (
            <div className="page-two">
                <div className="box-content">
                    <div className="introduction">
                        Hello, {this.props.Store.user.name} !
                </div>

                    <div className="page-two-input">
                        <AutoComplete
                            dataSource={this.dataSource}
                            style={{ width: "100%" }}
                            onSelect={this.onSelect}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            placeholder="Select a currency"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

decorate(PageTwo, {
    dataSource: observable
})

export default inject('Store')(observer(PageTwo))