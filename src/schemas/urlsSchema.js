import joi from 'joi';

const urlSchema = joi.object({
    url: joi.string().max(255).uri().required().messages({
        "string.base": `O campo "url" deve ser um texto.`,
        "string.empty": `O campo "url" não pode estar vazio.`,
        "string.max": `O campo "url" deve ter no máximo 255 caracteres.`,
        "string.uri": `O campo "url" deve ser uma url válida.`
    })
});

export { urlSchema};