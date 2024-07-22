import multer from 'multer';
import multerConfig from '../config/multer';
const Foto = require('../models/').Foto;

const upload = multer(multerConfig).single('foto');

const store = async (req, res) => {
  upload(req, res, async (error) => {
    if (error) {
      return res.status(400).json({
        errors: [error.code],
      });
    }

    const { file } = req;
    if (!file) {
      return res.status(400).json({
        errors: ['No file uploaded'],
      });
    }

    try {
      const { originalname, filename } = file;
      const { user_id } = req.body;

      if (!user_id) {
        return res.status(400).json({
          errors: ['User ID is required'],
        });
      }

      const foto = await Foto.create({ originalname, filename, user_id });
      return res.json(foto);
    } catch (err) {
      console.error(err); // Log the error for debugging
      return res.status(400).json({
        errors: err.errors.map((err) => err.message),
      });
    }
  });
};

export default {
  store,
};
