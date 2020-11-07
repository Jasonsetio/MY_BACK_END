import { Request, Response } from 'express';

export const index = async (req: Request, res : Response) => {
    console.log("req: ", req.body);
    res.send("Method GET jalan");
    return res.status(200).json({massage:"success!"});
}

export const create = async (req: Request, res : Response) => {
    console.log("req: ", req.body);
    res.send("Method GET jalan");
    return res.status(200).json({massage:"success!"});
}

export const remove = async (req: Request, res : Response) => {
    console.log("req: ", req.body);
    res.send("Method GET jalan");
    return res.status(200).json({massage:"success!"});
}

export const update = async (req: Request, res : Response) => {
    console.log("req: ", req.body);
    res.send("Method GET jalan");
    return res.status(200).json({massage:"success!"});
}