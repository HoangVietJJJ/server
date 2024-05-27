import * as servicies from '../services/category'

export const getCategoriesController = async (req, res) => {
    try {
        const response = await servicies.getCategoriesService()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller' + e
        })
    }
}