import React, { Component } from 'react'
import {Navigate} from 'react-router-dom'
import { FaEdit } from 'react-icons/fa';
import {MdOutlineDeleteForever} from 'react-icons/md'


export default class Tr extends Component {

  constructor(){
    super();
    this.state ={      
       student : [],
       path:""
    }           
  }
   
  handelEdit=(Id)=>{
    this.setState({
      path:"/Edit/"+ Id
    });
  }

  handelDelete = (Id) =>{
    var a = window.confirm("Are want to delete?")
    if(a === true){
    fetch(`https://localhost:44392/api/student/Delete/${Id}`);

    this.setState({
      path:"/GetAll"
    });
  }
  }

  render() {
    let {Id, StudentName,Age,RollNo,Description} = this.props;
    if(this.state.path !== ""){
      //this.props.navigation.navigate("Edit",{id:this.state.student.studentId});
      return <Navigate to={this.state.path} />
    }
    return (
      <tr className="table-active">
        <td>{Id}</td>
        <td>{StudentName}</td>
        <td>{Age}</td>
        <td>{RollNo}</td>
        <td>{Description}</td>
        <td>
        {/* //<Link to="/Edit/{Id}" params={{id:Id}}><FaEdit /></Link> */}
          <button type="button" onClick={ () => this.handelEdit(Id) }><FaEdit /></button>
          <button type="button" onClick={ () => this.handelDelete(Id) }><MdOutlineDeleteForever /></button>
        </td>
      </tr>
    );
  }
}
