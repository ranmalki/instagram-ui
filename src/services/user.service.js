import config from '../config/index';

async function register(user) {
    const res = await fetch(config.apiUrl + '/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

async function checkUsernameAvailability(username) {
    const res = await fetch(`${config.apiUrl}/user/availability`, { 
        method: 'POST',
        body: JSON.stringify({username}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const isAvailable = await res.json();
    return isAvailable;
}

async function login(user) {
    const res = await fetch(config.apiUrl + '/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}



export { register, login, checkUsernameAvailability };