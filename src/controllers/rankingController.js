import db from '../db.js';

export async function getRanking(req, res) {

    const { user } = res.locals;

    const ranking  = await db.query(`SELECT users.id AS id, users.name AS name, COUNT(urls.clicks) AS "linksCount", SUM(urls.clicks) AS "visitCount" FROM urls 
                                        LEFT JOIN users on users.id = urls."userId"
                                        GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10`);

    ///const urls  = await db.query(`SELECT id, "shortUrl", url, clicks as "visitCount" FROM urls WHERE "userId" = $1`, [user.id]);

    return res.status(200).send(ranking.rows);
}