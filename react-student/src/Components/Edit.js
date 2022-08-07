import React, { Component } from 'react'
import {Link,Navigate} from 'react-router-dom'


export default class Edit extends Component {
  
  constructor(props){
    super(props);
    this.state =({
      studentId: 0,
      name: "",
      age: 0,
      rollNo: 0,
      description: "",
      path:""
    });    
}
async componentDidMount(){
  
  let id = parseInt(window.location.href.substring(27));

  
  let url = `https://localhost:44392/api/student/edit/${id}`;
      let data = await fetch(url);
      let parsedData = await data.json();  
      console.log(parsedData[0]);   
      let{name,age,rollNo,description} = parsedData[0]; 
      this.setState({
        studentId: id,
        name :name,
        age:age,
        rollNo:rollNo,
        description:description      
      });      
}

  handelUpdate = () => {
    fetch(`https://localhost:44392/api/student/Create`,{
      method:`post`,
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "studentId": this.state.studentId,
        "name": this.state.name,
        "age":  parseInt(this.state.age),
        "rollNo": parseInt(this.state.rollNo),
        "description": this.state.description
    })
    
    });
    this.setState({
      path:"/"
    });
  }
  handelName = (e) => {
    this.setState({
      name: e.target.value
    });    
    e.preventDefault();
  }
  handelAge = (e) => {
    this.setState({
      age: e.target.value
    });
  }
  handelRollNo = (e) => {
    this.setState({
      rollNo: e.target.value
    });
  }
  handelDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }
  render() {
    if (this.state.path !== "") {

      return <Navigate to={this.state.path} />

  }
  
    return (
      <div>
        
        <h1>Edit Page</h1>
        {/* <Input name={this.state.student.name} age={this.state.student.age} rollno={this.state.student.rollNo} description={this.state.student.description} /> */}
        <div className="row">
          <div className="col-mb-3">
            <label className="form-label">Student Name</label>
            <input type="text" className="form-control" onChange={e => this.handelName(e)}  value={this.state.name} id="studentName" placeholder="Full Name" />
          </div>
          <div className="col-mb-3">
            <label className="form-label">Age</label>
            <input type="number" value={this.state.age} onChange={e => this.handelAge(e)} className="form-control" id="age" />
          </div>
        </div>
        <div className="row">
          <div className="col-mb-3">
            <label className="form-label">Roll.No</label>
            <input type="number" value={this.state.rollNo} onChange={e => this.handelRollNo(e)} className="form-control" id="rollNo" />
          </div>
          <div className="col-mb-3">
            <label className="form-label">Description</label>
            <input type="text" value={this.state.description} onChange={e => this.handelDescription(e)} className="form-control" id="description" />
          </div>
        </div>
        <button className="btn-primary mt-2" onClick={this.handelUpdate}>Edit</button>
        <button className="btn-Danger mt-2"><Link to="/GetAll">Cancel</Link></button>
      </div>
    )
  }

}