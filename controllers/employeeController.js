const data = {
    employees : require('../model/employees.json'),
    setEmployees: function (data) {this.employees = data}
};

const getAllEmployees = (req,res)=>{
    res.json(data.employees);
}
const createNewEmployee = (req,res)=>{
    const newEmployee = {
        id: data.employees?.length ? data.employees[data.employees.length - 1 ].id + 1 : 1,
        firstname : req.body.firstname,
        lastname: req.body.lastname
    }

    if(!newEmployee.firstname || !newEmployee.lastname){
        return res.status(400).json({'message': 'First and Last names are required.'})
    }
    data.employees(...data.employees, newEmployee);
    res.status(201).json(data.employees)

}

const updateEmployee = (req,res)=>{
    res.json({
        "firstName": req.body.firstname,
            "lastName": req.body.lastname
    })
}

const deleteEmployee = (req,res)=>{
    res.json({
        "id": req.body.id
    })
}

const getEmployee = (req,res)=>{
    res.json({"id":req.params.id})
}

module.exports = {getAllEmployees,createNewEmployee,updateEmployee,deleteEmployee,getEmployee}