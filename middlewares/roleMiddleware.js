
const authorizedRoles = (role)=>{
    return (req, res, next)=>{
         try {
            const userRole = req.user.role;

            if(userRole === role){
                return next();
            }

            return res.status(403).json({ message: 'You are not authorized for this role' });
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong', error: err.message });
        }
    };
};

module.exports = authorizedRoles;