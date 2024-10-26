const express = require('express');
const router = express.Router();
const path = require('path');

// File name with regular expressions

router.get('^/$|/newindex.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','newindex.html'))
})
// what if .html is omitted 
router.get('^/$|/newindex(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','newindex.html'))
})

// Redirecting to new page --> /newindex(.html)

router.get('/oldpage',(req,res)=>{
    res.redirect(301,'newindex.html')
})

module.exports = router;