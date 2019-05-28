import React, { Component } from 'react';
import './PageOne.scss';
import { observer, inject } from 'mobx-react';
import { Form, Input, Button } from 'antd';

// @inject('Store')
// @observer
class PageOne extends Component {

    componentDidMount() {
        if (localStorage.getItem("user")) {
            this.props.history.push('/page-two')
            return
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.Store.setUser(values)
                this.props.history.push('/page-two')
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="page-one">
                <div className="box-content">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input your name!' }],
                            })(
                                <div className="page-input">
                                    <Input placeholder="Your Name" />
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <div className="page-button">
                                <Button type="primary" htmlType="submit">Next</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create()(inject('Store')(observer(PageOne)))