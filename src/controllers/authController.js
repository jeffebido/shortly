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
    res.sendStatus(201);
}

export async function signUpAntigo(req, res) {

    /*Checa se usuário já existe*/
    const query  = await db.query(`SELECT * FROM users WHERE email = $1`, [req.body.email]);

    if(query.rows.length > 0){
        return res.sendStatus(409);
    }

    const hash = bcrypt.hashSync(req.body.password, 10);  

    
    await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, 
                    [req.body.name, req.body.email, hash ]
    );
    
    res.sendStatus(201);
}

export async function signIn(req, res) {

    const { email, password } = req.body;

    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);

    if (user.rows.length > 0 && bcrypt.compareSync(password, user.rows[0].password )) {
        
      const token = uuid();
  
      await db.query(`INSERT INTO sessions (token, "userId") VALUES ($1, $2)`, 
                    [token, user.rows[0].id  ]
      );

      delete user.rows[0].password;

      res.send({...user.rows[0], token: token});
    } else {
      res.sendStatus(401);
    }
}