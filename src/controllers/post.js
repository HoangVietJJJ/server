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

export const getPostsLimitController = async (req, res) => {
    const { page, ...query } = req.query
    // console.log(req.query);
    try {
        const response = await postService.getPostsLimitService(page, query)
        return res.status(200).json(response)
    } catch (e) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at post controller' + e
        })
    }
}

export const getNewPostController = async (req, res) => {
    try {
        const response = await postService.getNewPostService()
        return res.status(200).json(response)
    } catch (e) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at post controller' + e
        })
    }
}