import {signUpSchema, signInSchema} from "../schemas/authSchema.js";

export async function signUpMiddleware(req, res, next) {
    
    const validate = signUpSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

  next();
}

export async function signInMiddleware(req, res, next) {
    
    const validate = signInSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

  next();
}