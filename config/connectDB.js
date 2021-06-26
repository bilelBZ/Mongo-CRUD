const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect (
        process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        .then(()=>console.log('database connected successfully'))
        .catch((err)=>console.error(err))
}
// const connectDB= async ()=>{
//     try {
//         await mongoose.connect(
//             process.env.MONGO_URL,
//             {
//                 useUnifiedTopology:true,
//                 useNewUrlParser:true,
//             }
//         );
//         console.log('db connected');
//     } catch (error) {
//         console.error(error)
//     }
// }

module.exports= connectDB;