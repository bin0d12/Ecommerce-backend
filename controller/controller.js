const Userschema = require("../modal/modal");
let bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const storeUserData = (req, res) => {
  console.log(req.body,  "reqsdfgh");
  let salt = bcryptjs.genSaltSync(10)
  let userDetails = new Userschema({
    name: req.body.name,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.password, salt)
  });
  userDetails.save();
  res.send({
    message: "data stored successfully"
  })
};
const getUserData = (req, res) => {
  let employee1 = req.body.email;
  // console.log(employee1, "emp");
let data = Userschema.findById(employee1)
console.log(data, "dattttttttttttttttttttaaaaaaaaaaa");
Userschema.findById(employee1).then(response => {
    // console.log(response, "responseeeeeeeeeeeeeeeeeee");
     res.send({
      response
  });
  }).catch(error => {
      res.json({
          message: "error in find indexxxx"
      })
  })
}
// const getUserData = (req, res) => {
//   // console.log(req.body, "reqbodyyyyyyyyyyyyy");
//   const email = req.body.email;
//   const password = req.body.password;
//   try {
//   const user = Userschema.find().then(res => {
//     res.send(res)
//   })
//   console.log(user[0], "user");
//   console.log(password, "passworddddddddd");
//   if(user[0].length !== 1){
//     const error = new Error("this email is not found")
//     error.statusCode = 401;
//     throw error
//   }
//   const storedUser = user[0][0]
//   console.log(storedUser, "stored userrrrrrrrrrrrrrrrrr");
//   const isEqual = bcryptjs.compare(password, storedUser.password);

//   if(!isEqual){
//     const error = new Error("password is incorrect")
//     error.statusCode = 401;
//     throw error
//   }
//   const token = jwt.sign({
//     email: storedUser.email,
//     userId: storedUser.id
//   }, "secretToken", 
//   {expiresIn: '1h'}
//   )
//   re.status(200).json({token: token, userId: storedUser.id})

//   } catch(err) {
//     if(!err.statusCode){
//       err.statusCode = 500
//     }

//     // res.send({
//     //   message: "login successfully"
//     // })
//   }
//   // console.log(req.body, "bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
//   // console.log(r, "resppp");
//   // res.send()
// }

module.exports = { storeUserData, getUserData };
