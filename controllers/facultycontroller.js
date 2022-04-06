const Faculty =require('./models/faculty');
const Student =require('./models/student');
facultyLogin:async(req,res,next)=>{
    try{
        const{registrationnumber,password}=req.data;
        const faculty=await Faculty.findOne({registrationnumber});
        if(!faculty)
        {
           return res.status(400).json({message:"registration number not found"})
        }
        const isCorrect=await bcrypt.compare(password,faculty.password);
        if(!isCorrect)
        {
            res.status(200).json({message:"incorrect password"})
        }
        const payload{
            id: faculty.id, name: faculty.name, email: faculty.email,
            contactNumber: faculty.contactNumber, avatar: faculty.avatar,
            registrationNumber: faculty.registrationNumber,
            joiningYear: faculty.joiningYear,
            department: faculty.department
        }






    }catch{

    }
}

updatePassword:async(req,res,next)=>{
    try{
       const {registrationnumber,oldpassword,newpassword,confirmNewPassword}=req.data;
       if(!oldpassword||!newpassword||!confirmNewPassword)
       {
           res.status(400).json({message:"all feild are required"});
       }
       if(newpassword!==confirmNewPassword)
       {
           return res.status(400).json({message:"unequal both"})
       }
       const faculty=await Faculty.find({registrationnumber})
       const isCorrect=await bcrypt.compare(oldpassword,faculty.password);
       if(!isCorrect)
       {
           return res.status(400).json({message:"password not matching"})
       }
       const hashedpassword=await bcrypt.hash(newpassword,10);
       faculty.password=hashedpassword;
       await faculty.save() 
       res.status(200).json({message:'password updated' });

        


    }catch(e){
       console.log("errors in updating password")
    }
}

updateProfile:async(req,res,next)=>{
    try{
        const{registrationnumber,profilepicture,gender,contactnumber,aadharnumber}=req.data;
        const faculty=await Faculty.findOne({registrationnumber});
        if(gender)
        {
            faculty.facultyGender=gender;
            await faculty.save();
        }
        if(contactnumber)
        {
            faculty.facultyContactNumber=contactnumber;
            await faculty.save();
        }
        if(aadharnumber)
        {
            faculty.facultyAadharNumber=aadharnumber;
            await faculty.save();
        }

        res.status(200).json({message:"updated successfully"});
    }
    catch{
        console.log("error in updating profile");
    }
}
markAttendence:async(req,res,next)=>{
    try{
       const { selectedStudents, subjectCode, department,year,section } = req.body
       const students=await Student.find({department,year,section});
       var filteredArr = allStudents.filter(function (item) {
        return selectedStudents.indexOf(item.id) === -1
    });

    }catch{

    }
}


uploadMarks:async(req,res,next)=>{
    try{
         
    }catch{

    }
}

forgetPassword:async(req,res,next)=>{

}