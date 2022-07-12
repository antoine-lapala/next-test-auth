import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "../../../src/utils/api/api-handler";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return handle();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function handle() {
        return res.json({
            title: 'You can access this data because you are logged-in',
        })
    }

}

export default apiHandler(handler);
