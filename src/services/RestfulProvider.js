import axios from 'axios';

class RestfulProvider {
    get = url => {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}`)
                .then(res => resolve(res))
                .catch(error => {
                    reject(error);
                });
        });
    };

    post = (url, data, headers) => {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.commonUrl}/${url}`, data, {
                    headers: headers
                })
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    };

    put = (url, data, headers) => {
        return new Promise((resolve, reject) => {
            axios
                .put(`${this.commonUrl}/${url}`, data, {
                    headers: headers
                })
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    };

    delete = url => {
        return new Promise((resolve, reject) => {
            axios
                .delete(`${this.commonUrl}/${url}`)
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    };
}

export default new RestfulProvider();
