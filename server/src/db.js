const mongoose=require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://shine:shine123@cluster0.6qz608e.mongodb.net");
};
