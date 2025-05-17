const mongoose=require('mongoose');
const numberSchema=new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        trim: true
    },
    password:{
        type:Number,
        required:true,
    
    },
    mobile:{
        type:Number,
        required:true,
    },
    
   
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('NumberItem',numberSchema);