import express from 'express';

const app = express();

app.get('/', (res,req)=> {
    console.log('hello from express')
    res.status(200)
    res.json({message: 'hello'})
})

export default app;