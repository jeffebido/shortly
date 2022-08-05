import bcrypt from 'bcrypt';
import db from '../db.js';
import { v4 as uuid } from 'uuid';


export async function signUp(req, res) {

    const hash = bcrypt.hashSync(req.body.password, 10);  

    try {
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, 
                        [req.body.name, req.body.email, hash ]
        );
    } catch (err) {
        if (err.code == "23505") {
            return res.sendStatus(409);//Email já existe
        }
    }
    return res.sendStatus(201);
}


export async function signIn(req, res) {

 
    
    
}