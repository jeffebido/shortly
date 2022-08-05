import db from '../db.js';
import { nanoid } from 'nanoid'

export async function shorten(req, res) {

    const { user } = res.locals;

    const shortUrl = nanoid(8);

    await db.query(`INSERT INTO urls ( url, "shortUrl", "userId") VALUES ($1, $2, $3)`, 
            [req.body.url, shortUrl, user.id ]
    );


    return res.status(201).send({shortUrl: shortUrl});
}

export async function getUrlById(req, res) {

    const { id } = req.params;


    const url  = await db.query(`SELECT id, "shortUrl", url FROM urls WHERE id = $1`, [id]);

    if(url.rows[0]){

        return res.status(200).send(url.rows[0]);
    }else{
        return res.sendStatus(404);
    }
    
}