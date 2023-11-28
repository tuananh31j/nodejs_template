const Customers = require("../../models/Customers");
const bcrypt = require('bcrypt');

class CustomerController{
    getAll(req, res) {
            Customers.find({})
            .then(data => res.status(200).json({
                data
            }))
            .catch(err => res.status(500).json({message: "loi"}))
    }


// /:id?u=9&o=0 req.query.u
    get(req, res) {
        const id = req.params.id;
        Customers.findById(id)
        .then(data => res.status(200).json({
            data
        }))
        .catch(err => res.status(500).json({error: "looi", err}))
    }
 
    // tao moi nguoi dung
    async create(req, res) {
       try {
        const {password, ...newUser} = req.body;
       // thuat toan bam 
       const salt = await bcrypt.genSalt(10);

       // ma hoa mat khau 
       const hashed = await bcrypt.hash(password, salt);

       // tao user moi voi mat khau da duoc ma hoa
       const user = {...newUser, password: hashed};
       console.log(user);

       // them vao database
      const data = await Customers.create(user);
      res.status(200).json({
        message: "them moi thanh cong!",
        data
       })
       } catch (error) {
        res.status(500).json({message: "loi", error})
       }
      
    }

    // xoa nguoi dung
    remove(req, res) {
        const id = req.params.id;
        Customers.findByIdAndDelete(id)
        .then(() => res.status(200).json({message: "xao thanh cong!"}))
        .catch(err => res.status(500).json({message: "loi", err}))
    }


    // cap nhat nguoi dung
    update(req, res) {
        const id = req.params.id;
        Customers.findByIdAndUpdate(id, rep.body)
        .then(() => res.status(200).json({
            message: "update done!",
            data: req.body
        }))
        .catch(err => res.status(500).json({message: "loi", err}))
    }
}

module.exports = new CustomerController;