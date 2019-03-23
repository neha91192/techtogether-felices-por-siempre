let _singleton = Symbol();

const LOGIN_API ='https://search-family-connect-yxkcvbyyu23nvxep2x42ntvjtm.us-east-2.es.amazonaws.com/';

class LoginService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    login(profile) {
        return fetch(LOGIN_API, {
            body: JSON.stringify(profile),
            credentials : 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    signup() {
        return fetch(LOGIN_API+'/_search')
            .then(function(response){
                return response.json();
            });
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LoginService(_singleton);
        return this[_singleton]
    }

}

export default LoginService;