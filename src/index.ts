import express, { Express, Request, Response } from "express";
import path, { dirname } from "path";

const app = express()

app.use(express.static('./src/view'))

app.all('*', (req: Request, res: Response) => {
  res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})