const db = require('../bd')

class PostController {

    async createPost(req, res) {
        const { title, content, userId } = req.body
        const newPost = await db.query(`
            INSERT INTO post (title, content, user_id)
            values ($1, $2, $3) RETURNING *`,
            [title, content, userId]);
        res.json(newPost.rows[0])
    }

    async getPostsByUser(req, res) {
        const {title, content, userId} = req.body
    }

}

module.exports = new PostController()