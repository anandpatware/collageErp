const mongoose=require('mongoose');
const attendenceSchema=new mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    year:{
        type:Number,
    },
    section:{
        type:String,
        required:true
    },
    subjectCode:{
        type:Number,
        required:true
    },

})

const Attendence=new mongoose.model('Attendence',attendenceSchema);
module.exports=Attendence;