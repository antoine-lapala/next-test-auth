import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "../../../src/utils/api/api-handler";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            return authenticate();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function authenticate() {
        const { email, password } = req.body;
        console.log(email, password);

        if (email !== 'antoine@lapala.io' || password !== '123456') throw 'Email or code is invalid';

        const token = sign({ email }, 'ma_phrase_secrete', { expiresIn: '7d' });

        return res.status(200).json({ token })
    }
}

export default apiHandler(handler);
