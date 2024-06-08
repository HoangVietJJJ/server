import { raw } from 'express'
import db from '../models'
import { where } from 'sequelize'
require('dotenv').config()

export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] }
            ],
            attributes: ['id', 'title', 'star', 'address', 'description'],
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get Posts',
            response
        })
    } catch (e) {
        reject(e)
    }
})

export const getPostsLimitService = (page, query) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAndCountAll({
            where: query,
            raw: true,
            nest: true,
            offset: page * (+process.env.LIMIT) || 0,
            limit: +process.env.LIMIT,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] }
            ],
            attributes: ['id', 'title', 'star', 'address', 'description'],
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get Posts',
            response
        })
    } catch (e) {
        reject(e)
    }
})