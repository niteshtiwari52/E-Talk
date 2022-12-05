const mongoose = require("mongoose");

const useSchema = mongoose.Schema({
    name:{type: String, required: true},
    email: {tupe: String, required: true},
    password: {type: String,required: true},
    pic: {type: String,required: true,
    default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg", 
    },
    
},
{timestamps: true}
);

const User = mongoose.model("user",useSchema);

module.exports = User;