import db from '../models'

export const getAcreagesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Acreage.findAll({
            raw: true,
            attributes: ['code', 'value', 'order']

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'failed to get acreages',
            response
        })
    } catch (e) {
        reject(e)
    }
})