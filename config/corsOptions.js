// Cross Origin Resource sharing

const whitelist = ['https://www.google.com','https://www.127.0.0.1:5500','https://localhost:3500']
const corsOptions = {
    origin: (origin,callback)=>{
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error('Not allowed by cors'))
        }
    },
    optionsSuccessStatus: 200
}