const express= require('express');
const {json}= require('body-parser');

const app= express();
const port= 8090;


app.use( json() );

let messagesArray=[];


app.options(`/api/messages`,(req,res,next)=> {
  res.set({ 'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          }).send(messagesArray)
  });


app.get(`/api/messages`, (req, res, next) => {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' taryngabbert.github.io"
  }).send(messagesArray);
})


app.post(`/api/messages`, (req,res, next) => {
  messagesArray.push({
    message: req.body.message,
    time: new Date()
  });
  res.status(201).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' taryngabbert.github.io"
  }).send(messagesArray)
})








app.listen(port, ()=> {
  {console.log(`Express is running on ${port}`)}
});
