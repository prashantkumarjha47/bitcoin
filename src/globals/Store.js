import { observable } from 'mobx'

class Store {

    @observable user = {}
    @observable currency = ""

    setUser = user => {
        this.user = user
        localStorage.setItem('user', JSON.stringify(this.user))
    }

    setCurrency = currency => {
        this.currency = currency
    }
}

export default Store