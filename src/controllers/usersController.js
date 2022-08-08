import db from '../db.js';

export async function getUserInfo(req, res) {

    const { user } = res.locals;

    const sum  = await db.query(`SELECT SUM(clicks) AS "visitCount" FROM urls WHERE "userId" = $1`, [user.id]);

    const urls  = await db.query(`SELECT id, "shortUrl", url, clicks as "visitCount" FROM urls WHERE "userId" = $1`, [user.id]);

    return res.status(200).send({...user, ...sum.rows[0], shortenedUrls: urls.rows });

}