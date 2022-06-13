import {Request, Response} from "express";
import User from "../entity/User"

export const getAllUser = async (_, res: Response) => {
    try {
        const users = await User.find()
        return res.json(users)
    } catch (err) {
        return res.status(500).json(err)
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { first_name, last_name, email, gender, date_of_birth, country_of_birth } = req.body
    try {
        const user = await User.create({ first_name, last_name, email, gender, date_of_birth, country_of_birth })
        await user.save()
        return res.json(user)
    } catch (err) {
        return res.json(err).status(500)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    console.log("calling")
    const {  first_name, last_name, email, gender, date_of_birth, country_of_birth } = req.body
    const id = req.params.id

    try {
        const user = await User.findOneByOrFail({ id })

        user.first_name = first_name || user.first_name
        user.last_name = last_name || user.last_name
        user.email = email || user.email
        user.gender = gender || user.gender
        user.date_of_birth = date_of_birth || user.date_of_birth
        user.country_of_birth = country_of_birth || user.country_of_birth

        await user.save()
        return res.json(user)

    } catch (err) {
        res.status(404).json(err)

    }
}
