require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port ='https://frontend-unbq.onrender.com';
// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

connectDB();

// Define Mongoose schema and model
const employeeSchema = new mongoose.Schema(
  {
    empNo: { type: Number, required: true, unique: true },
    empName: { type: String, required: true },  // Capital S String
    empEmail: {type:String,required:true},
    empSal: { type: Number, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Employee = mongoose.model('Employee', employeeSchema);

// Fix route spelling to '/api/employees'
app.post('/api/employees', async (req, res) => {
  try {
    
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();
    //res.stauts(201).json(savedEmployee)

    res.status(201).json({ message: 'Employee  Object added successfully' });
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
});

// get all employees
app.get('/api/employees',async(req,res) => {
    try
    {  
        const employees = await Employee.find();
        res.json(employees);
    }

    catch (error) 
    {
        res.status(500).json({message:error.message});
    }

});


// get  employee by ID 
app.get('/api/employees/:id',async(req,res) => {
    try
    {  
        const employee = await Employee.findById(req.params.id);
        if(!employee)
          return res.status(404).json({message:'Employee not found'});

        res.json(employee);
    }

    catch (error) 
    {
        res.status(500).json({message:error.message});
    }

});

// Delete  employee by ID 

app.delete('/api/employees/:id',async(req,res) => {
    try
    {  
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if(!deletedEmployee)
          return res.status(404).json({message:'Employee not found'});
        res.json({message:'Employee delete sucessfully'})

    }

    catch (error) 
    {
        res.status(500).json({message:error.message});
    }

});

// Update  employee by ID 
                                
app.put('/api/employees/:id',async(req,res) => {
    try
    {  
        const UpdateEmployee = await Employee.findByIdAndUpdate(req.params.id,
       
        req.body,
        {
            new:true,           // Update ke baad update document return kare.
            runValidators: true  // Schema ke validation rules ko enforce kare update ke waqt bhi

        });
        if(!UpdateEmployee)
          return res.status(404).json({message:'Employee not found'});
        res.json({message:'updateEmployee'})

    }

    catch (error) 
    {
        res.status(500).json({message:error.message});
    }

});



app.listen(port, () => {
  console.log('Server is running on http://localhost:3001');
});





