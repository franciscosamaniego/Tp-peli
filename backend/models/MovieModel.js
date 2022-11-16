import mongoose from "mongoose";

const CalifSchema = new mongoose.Schema({
    Calif : {"type" : Number, "required" : true}
},{ _id: false })

const MovieSchema = new mongoose.Schema({
    "Name" :{"type" : String, "required" : true},
    "Type" : {"type" : String, "required" : true},
    "Gender" : {"type" : String, "required" : true},
    "Sinopsis" : {"type" : String, "required" : true},
    "Califs" : [CalifSchema],
    "Image" : {"type" : File, "required" : true}
})

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
