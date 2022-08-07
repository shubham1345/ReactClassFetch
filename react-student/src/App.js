import React, { Component } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import GetAll from './GetAll'
import Create from './Components/Create'
import Edit from './Components/Edit'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<GetAll />} />
            <Route exact path="/GetAll" element={<GetAll />} />
            <Route exact path="/Create" element={<Create />} />
            <Route exact path="/Edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
