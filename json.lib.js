const jwt = require('jsonwebtoken')

let user ={
    id: "abcd-101-sfsd-456461",
    name: "binod",
    email: "binod@gmail.com"
}
let payLoad = {
    id: user.id,
    name: user.name
}
let secret_key = "ssssshhhh"

// generate a new token 
let token = jwt.sign(payLoad, secret_key,  {expiresIn: 3600})
console.log(token);

// verify token
jwt.verify(token, secret_key, (err, decode) =>{
    if(err) throw err
    console.log(decode);
})

// generateJWT: (data) => {
//     let encryptText = key.encryptWithAES(data);
//     // let encryptText = data;
//     return jwt.sign({ user_id: encryptText}, key.decryptWithAES(process.env.SECRET), { expiresIn: '15min' });
//   },

//   generateRefreshJWT: (data) => {
//     let encryptText = key.encryptWithAES(data);
//     // let encryptText = data;
//     return jwt.sign({
//       user_id: encryptText,
//     }, key.decryptWithAES(process.env.SECRET), { expiresIn: '1h' });
//   },


// verifying --------------------------

// required: (req, res, next) => {
//     var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
//     var tokenModel = req.models.token_table;
//     // var modelObj = req.models.users;
//     let token = null;
//     if (req.headers.authorization || req.headers.Authorization) {
//       token = req.headers.authorization;
//       tokenModel.find({ token: token, ipAddress: ip }, (err, tokenVerification) => {
//         if (!err && tokenVerification && tokenVerification.length > 0) {
//           jwt.verify(token, key.decryptWithAES(process.env.SECRET), (err, decoded) => {
//             if (err) {
//               return res.status(422).json({
//                 errors: {
//                   code: 'session_expired',
//                   type: 1,
//                   message: 'Session Expired, Continue to login',
//                   error: {},
//                 },
//               });
//             } else {
//               if (!decoded.user_id) {
//                 return res.status(422).json({
//                   errors: {
//                     code: 'token_expired',
//                     message: 'Invalid Token (R)',
//                     error: {},
//                   },
//                 });
//               } else {
//                 let decryptText = key.decryptWithAES(decoded.user_id);
//                 decoded.user_id = decryptText;
//                 req.payload = decoded;
//                 tokenModel.find({ userId: decryptText, token: token, ipAddress: ip }, (err, tokens) => {
//                   if (!err && tokens && tokens.length > 0) {
//                     next();
//                   } else {
//                     return res.status(403).json({
//                       errors: {
//                         code: 'Invalid User',
//                         type: 1,
//                         message: 'Invalid User, Continue to login',
//                         error: {},
//                       },
//                     });
//                   }    
//                 });
//                 // next();
//               }
//             }
//           })
//         } else {
//           return res.status(403).json({
//             errors: {
//               code: 'Invalid User',
//               type: 1,
//               message: 'Invalid User, Continue to login',
//               error: {},
//             }
//           });
//         }
//       })
//     } else {
//       return res.status(403).json({
//         errors: {
//           code: 'token_required',
//           message: 'Token is Required',
//           error: {},
//         },
//       });
//     }
//   },