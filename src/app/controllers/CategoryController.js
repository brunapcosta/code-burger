const Yup = require("yup");
const Category = require("../models/Category");
const User = require("../models/User");

// import * as Yup from 'yup'
// import Category from '../models/Category.js'
// import User from '../models/User.js'
class CategoryController {
    async store(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            const { admin: isAdmin } = await User.findByPk(request.userId)

            if (!isAdmin) {
                return response.status(401).json()
            }

            const { name } = request.body
            console.log(request.file)

            const { filename: path } = request.file


            const categoryExists = await Category.findOne({
                where: {
                    name,
                },
            })

            if (categoryExists) {
                return response.status(400).json({ error: 'Category already exists' })
            }

            const { id } = await Category.create({ name, path });

            return response.json({ name, id })
        } catch (err) {
            console.log(err)
        }
    }

    async index(request, response) {
        const category = await Category.findAll()

        console.log(request)
        return response.json(category)
    }

    async update(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string(),
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            const { admin: isAdmin } = await User.findByPk(request.userId)

            if (!isAdmin) {
                return response.status(401).json()
            }

            const { name } = request.body

            const { id } = request.params

            const category = await Category.findByPk(id)

            if (!category) {
                return response.status(401).json({ error: "Make sure your category id is correct" })
            }

            let path
            if (request.file) {
                path = request.file.filename
            }

            await Category.update({ path, name }, { where: { id } })

            return response.status(200).json()
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new CategoryController()

// export default new CategoryController()