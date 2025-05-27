
// Upload the file on the Cloudinary DB
const uploadFile = async (req, res) =>{
    try {
        if(!req.file){
            return res.status(400).json({ message: 'No file Uploaded' });
        }

        res.status(200).json({ 
            message: 'Image Uploaded Successfully',
            imageURL: req.file.path
         });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { uploadFile };