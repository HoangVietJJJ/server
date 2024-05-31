import * as postService from '../services/post'

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)
    } catch (e) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at post controller' + e
        })
    }
}