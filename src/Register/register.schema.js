import * as yup from 'yup';
import { checkUsernameAvailability } from '../services/user.service';

export const registerSchema = yup.object().shape({

    username: yup.string()
        .min(3)
        .max(16)
        .required()
        .test('username', 'This username is already taken', 
        async function(username) {
            return await checkUsernameAvailability(username)
        }),
    email: yup.string()
        .email()
        .required(),
    password: yup.string()
        .min(6)
        .max(20)
        .required()
});