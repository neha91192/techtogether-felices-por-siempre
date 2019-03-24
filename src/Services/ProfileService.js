let _singleton = Symbol();

const PROFILE_API_URL ='https://search-family-connect-yxkcvbyyu23nvxep2x42ntvjtm.us-east-2.es.amazonaws.com/';

const PROFILE_API_URL_2 ='https://search-family-connect-yxkcvbyyu23nvxep2x42ntvjtm.us-east-2.es.amazonaws.com/parent/profile';


class ProfileService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    createProfile(profile) {
        return fetch(PROFILE_API_URL, {
            body: JSON.stringify(profile),
            credentials : 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    findAllProfiles() {
        return fetch(PROFILE_API_URL+'/_search')
            .then(function(response){
                return response.json();
            });
    }

    updateChild(userId,user) {
        return fetch(PROFILE_API_URL  + userId, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(function (response) {
            return response.json();
        })}

    updateParent(userId,user) {
        return fetch(PROFILE_API_URL_2  + userId, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(function (response) {
            return response.json();
        })}


    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ProfileService(_singleton);
        return this[_singleton]
    }

}

export default ProfileService;