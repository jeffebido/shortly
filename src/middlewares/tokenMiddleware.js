import db from "../db.js";

export async function tokenMiddleware(req, res, next) {

    const authorization = req.headers.authorization;

    const token = authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }
    
    const session = await db.query(`SELECT * FROM sessions WHERE token = $1`, [token]);

    if (session.rows.length == 0) {
      return res.sendStatus(401);
    }
    
    const user = await db.query(`SELECT * FROM users WHERE id = $1`, [session.rows[0].userId]);

    if (user.rows.length == 0) {
        return res.sendStatus(404);
    }

    delete user.rows[0].password;
    
    res.locals.user = user.rows[0];
  
    next();
}