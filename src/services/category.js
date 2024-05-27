import db from '../models'

// GET ALL CATEGORIES
export const getCategoriesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            raw: true,
            attributes: ['code', 'value']

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'failed to get category',
            response
        })
    } catch (e) {
        reject(e)
    }
})