let _singleton = Symbol();

const PROFILE_API_URL ='http:localhost:4000/';

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
        return fetch('http://localhost:4000/child', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
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