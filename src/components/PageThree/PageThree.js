import React, { Component } from 'react';
import './PageThree.scss';
import { observer, inject } from 'mobx-react';
import GetBitCoinService from '../../services/GetBitCoinService';
import { decorate, observable } from 'mobx';

export class PageThree extends Component {
    bitcoin = 0

    componentDidMount() {
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                this.props.history.replace('/page-two')
                return
            }

        }, false);

        if (this.props.Store.currency === "") {
            this.props.history.replace('/page-two')
            return
        }
        GetBitCoinService.getBitCoinValue(this.props.Store.currency).then(resp => {
            this.bitcoin = 1 / resp.data
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="page-three">
                {Boolean(this.bitcoin) && <div className="bitcoin-box">
                    {`1 BitCoin = ${this.bitcoin} ${this.props.Store.currency}`}
                </div>}
            </div>
        );
    }
}
decorate(PageThree, {
    bitcoin: observable
})

export default inject('Store')(observer(PageThree))