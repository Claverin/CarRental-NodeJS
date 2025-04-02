import { Request, Response } from "express";

const mainState = async (req: Request, res: Response) => {
  console.log('Received request:', req.method, req.url);
  console.log('Request body:', req.body);
  res.status(404).send('<h1>Resource not found</h1>');
}

export {
  mainState
}