const mongoose = require('mongoose');
const drinkSchema = new mongoose.Schema({
    drink_name:{type:String,required:true,trim:true,enum:['String','Mangoo']},
    product_id:{type:String,Number,required:true,trim:true},
    description:{type:String,Number,required:true,trim:true},
    product_price:{type:Number,required:true,min:0},
    product_category:{type:String,required:true,enum:['Drinks','Others']},
});
 module.exports = mongoose.model('Drink',drinkSchema);