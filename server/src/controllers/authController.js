import { getPrismaInstance } from "../utilities/prismaClient.js";

const checkUser = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            res.json({ msg: 'Email is required', status: false });
        }

        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            res.json({ msg: 'User not found', status: false });
        }

        res.json({ msg: 'User found', status: true, data: user });

    } catch (error) {
        next(error);
    }
}

export {
    checkUser
};