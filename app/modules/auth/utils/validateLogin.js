import validatejs from 'validate.js';

const constraint = {
    email: {
        presence: {
            message: "is required",
            allowEmpty: false,
        },
    },
    password: {
        presence: {
            message: "is required",
            allowEmpty: false,
        }
    },
}

export function validateLogin(inputs) {
    return validatejs(inputs, constraint);
}