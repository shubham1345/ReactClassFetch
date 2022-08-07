import React, { Component } from 'react'
import Table from './Components/Table';
import { Link } from "react-router-dom";

export default class GetAll extends Component {

    constructor(){
      super();
      this.state ={          
      student : []
      }               
    }
    

    async componentDidMount(){
      let url = `https://localhost:44392/api/student/getall`;
      let data = await fetch(url);
      let parsedData = await data.json();   
      console.log(parsedData);   
      this.setState({ student: parsedData });      
    }
    
  render() {
    
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="align-center">STUDENT's</h1>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <button><Link to="/Create">Create</Link></button>
            </div>
          </div>
          <div>
            <Table student={this.state.student} />
          </div>
        </div>
      </div>
    );
  }
}
