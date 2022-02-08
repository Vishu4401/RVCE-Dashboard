const mongoose = require('mongoose');
// const bcyptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// User Schema or Document Structure
const notesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true 
    },

    desc : {
        type : String,
        required : true,
        unique : true,
    },

    upload : {
        type : String,
        required : true
    },

    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})

//Hashing Password to secure
// notesSchema.pre('save', async function(next){
//     if(this.isModified('desc')){
//         this.desc = bcyptjs.hashSync(this.desc, 10);
//     }
//     next();
// })

//Generate Tokens to Verify User
// notesSchema.methods.generateToken = async function(){
//     try{
//         let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token : generatedToken});
//         await this.save();
//         return generatedToken;
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// Create Model
const Notes = new mongoose.model("NOTES", notesSchema);

module.exports = Notes;