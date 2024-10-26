const express = require('express')
const router = express.Router();
const path = require('path')

router.get('^/$|/newindex(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','subdir','index.html'))
})

router.get('/hhh',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','subdir','test.html'))
})

module.exports = router;
