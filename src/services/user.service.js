import { UserContext } from '../App';
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


async function login({username, password}) {
	const res = await fetch(config.apiUrl + '/login', {
		method: 'POST',
		body: JSON.stringify({username, password}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	return res.json();
}

async function me() {
	const token = localStorage.getItem('token');
	if (!token) {
		return {};
	}
	const res = await fetch(config.apiUrl + '/user/me', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	});
	return res.json();
}


async function getUser(username) {
	const token = localStorage.getItem('token');
	if (!token) {
		return {};
	}
	const res = await fetch(config.apiUrl + '/user/' + username, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	});
	return res.json();
}


async function checkUsernameAvailability(username) {
    const res = await fetch(`${config.apiUrl}/user/availability`, {
        method: 'POST',
        body: JSON.stringify({ username }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const isAvailable = await res.json();
    return isAvailable;
}

export { register, checkUsernameAvailability, login, me, getUser }