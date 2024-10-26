// Handling Routes

app.get('/hello',(req,res,next)=>{
    console.log("Hi this is SRIRAM GOKUL")
    next()
},(req,res)=>{
    res.send("BackStreet Boys")
}
)

// Chaining Process

const one = (req,res,next)=>{
    console.log("one")
    next()
}
const two = (req,res,next)=>{
    console.log("Two")
    next()
}
const three = (req,res)=>{
    console.log('Three')
    res.send("Finished")
}

app.get('/chain',[one,two,three]);
