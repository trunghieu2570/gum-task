import validatejs from 'validate.js';

const constraint = {
    email: {
        presence: {
            message: "is required",
            allowEmpty: false,
        },
        email: {
            message: "format is not valid",
        },

    },
    password: {
        presence: {
            message: "is required",
            allowEmpty: false,
        },
        length: {
            minimum: 6,
            tooShort: "^ Your password too weak",
        }
    },
    confirmPassword: {
        presence: {
            message: "is required",
            allowEmpty: false,
        },
        equality: {
            attribute: "password",
            message: "^Passwords do not match",
        }
    }
}

export function validateRegister(inputs) {
    return validatejs(inputs, constraint);
}