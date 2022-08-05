import {urlSchema} from "../schemas/urlsSchema.js";


export async function urlsMiddleware(req, res, next) {
    
    const validate = urlSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

  next();
}