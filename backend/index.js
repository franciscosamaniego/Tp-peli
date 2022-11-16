// Imports
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import MovieRouter from "./routers/movieRouter.js";
import multer from 'multer';

const photoRouter = require('./routes/api/photo');

//config vars
const port = process.env.port || 4000;
const db   = process.env.DB   || 'mongodb://127.0.0.1/test';

//Instanciar servidor http y db

const app = express()
app.listen(port,() =>{
    console.log("Server andando en " + port);
})

mongoose.connect(db,() => {
    console.log("BASE DE DATOS ANDANDO " + db);
})

// Activar JSON y morgan

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));
app.use(express.static('public'));
//Montar Routers

app.use('/api', photoRouter);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const limits = {
    fileSize: 2 * 1024 * 1024
  };
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png")
      cb(null, true);
    else cb(null, false);
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
  });
  
  
  const PhotoSchema = new mongoose.Schema({
    title: String,
    date: { type: Date, default: Date.now },
    image: String
  });
  
  const Photo = mongoose.model('Photo', PhotoSchema);
  
  
  app.post('/uploads', upload.single("image"), (req, res) => {
    const photo = new Photo({
      title: req.body.title,
      image: req.file.path
    });
    photo.save(err => {
      res.status(201).json(photo);
    });
  });
  

app.use("/", MovieRouter);