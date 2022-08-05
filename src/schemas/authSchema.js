import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().max(100).required().messages({
        "string.base": `O campo "nome" deve ser um texto.`,
        "string.empty": `O campo "nome" não pode estar vazio.`,
        "string.max": `O campo "nome" deve ter no máximo 100 caracteres.`
    }),
    email: joi.string().max(100).email().required().messages({
        "string.base": `O campo "e-mail" deve ser um texto.`,
        "string.empty": `O campo "e-mail" não pode estar vazio.`,
        "string.max": `O campo "e-mail" deve ter no máximo 100 caracteres.`,
        "string.email": `O campo "e-mail" deve ser um e-mail válido.`
    }),
    password: joi.string().max(50).required().messages({
        "string.base": `O campo "senha" deve ser um texto.`,
        "string.empty": `O campo "senha" não pode estar vazio.`,
        "string.max": `O campo "senha" deve ter no máximo 50 caracteres.`
    }),
    confirmPassword: joi.string().max(50).required().valid(joi.ref('password')).messages({
        "string.base": `O campo "confirme a senha" deve ser um texto.`,
        "string.empty": `O campo "confirme a senha" não pode estar vazio.`,
        "string.max": `O campo "confirme a senha" deve ter no máximo 50 caracteres.`
    })
});

const signInSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.base": `O campo "e-mail" deve ser um texto.`,
        "string.empty": `O campo "e-mail" não pode estar vazio.`,
        "string.max": `O campo "e-mail" deve ter no máximo 100 caracteres.`,
        "string.email": `O campo "e-mail" deve ser um e-mail válido.`
    }),
    password: joi.string().required().messages({
        "string.base": `O campo "senha" deve ser um texto.`,
        "string.empty": `O campo "senha" não pode estar vazio.`,
        "string.max": `O campo "senha" deve ter no máximo 50 caracteres.`
    })
});

export {signUpSchema, signInSchema};