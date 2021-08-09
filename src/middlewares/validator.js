'use strict';

function validator() {
 
    return (req, res, next) => {
        const userName = req.query.userName
        console.log(userName);
        console.log(typeof(userName));
      
        if (userName) {
            
            next()
        } else {
            next(`you have to enter userName`)
        }
        
    }
}

module.exports = validator;