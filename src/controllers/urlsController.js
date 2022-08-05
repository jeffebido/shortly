import db from '../db.js';
import { nanoid } from 'nanoid'

export async function shorten(req, res) {

    const { user } = res.locals;

    const shortUrl = nanoid(8);

    await db.query(`INSERT INTO urls ( url, "shortUrl", "userId") VALUES ($1, $2, $3)`, 
            [req.body.url, shortUrl, user.id ]
    );


    res.status(201).send({shortUrl: shortUrl});
}