const cloudinary = require ('cloudinary').v2;
const upload = require ('../config/multerConfig');
const fileUploadModel = require('../models/fileUploadModel');

exports.uploadDocuments = [
    upload.array('images', 5), // Accept up to 5 images
    async (req, res) => {
        try {
            const { name } = req.body;

            if (!name) {
                return res.status(400).json({ success: false, message: 'All fields are required' });
            }

            // Upload images to Cloudinary and get their URLs
            const imageUrls = [];
            for (const file of req.files) {
                const result = await cloudinary.uploader.upload(file.path);
                imageUrls.push(result.secure_url);
            }

            // Create product with Cloudinary image URLs
            const createProduct = await fileUploadModel.create({
                name,
                images: imageUrls
            });

            return res.status(201).json({ success: true, message: 'Documents uploaded successfully!', createProduct });
            
        } catch (error) {
            res.status(500).json({ success: false, message: `Internal server error: ${error}` });
        }
    }
];





//get all documents

exports.getAllDocuments = async (req, res) => {
    try {
        const getAllDocuments = await fileUploadModel.find({});
        if (getAllDocuments.length === 0) {
            return res.status(404).json({ success: false, message: 'No products found' });
        }
        return res.status(200).json({ success: true, message: 'All Documents found', getAllDocuments });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
}