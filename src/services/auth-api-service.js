import config from '../config'
import TokenService from './token-service'
import IdleService from './idle-service'

const AuthApiService = {
    postUser(user) {
        return fetch(`${config.APIENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postLogin(credentials) {
        return fetch(`${config.APIENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                IdleService.registerIdleTimerResets()
                TokenService.queueCallbackBeforeExpiry(() => {
                    AuthApiService.postRefreshToken()
                })
                return res;
            })
    },
    postRefreshToken() {
        return fetch(`${config.APIENDPOINT}/auth/refresh`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                TokenService.queueCallbackBeforeExpiry(() => {
                    AuthApiService.postRefreshToken()
                })
                return res
            })
            .catch(error => {
                alert('Token Request Error, please log in again: ' + error);
            })
    },
};

export default AuthApiService;