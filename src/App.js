import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: "world", list: []};
    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    var state = [];
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  add(e){
    e.preventDefault();    
    var customer = {cname: this.state.cname, address: this.state.address, phone: this.state.phone, email: this.state.email};
    this.state.list.unshift(customer);   
    this.setState({list: this.state.list});
    var frm = document.getElementsByName('cform')[0];
    frm.reset();
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="App">
            Hello {this.state.name}
          </h1>
          <div className="cform">
            <form name="cform">
            <div className="field">
            <label>Name: </label>
            <input type="text" name="cname" value={this.state.list.cname} onChange={this.onChange} required />
            </div>
            <div className="field">
            <label>Address: </label>
            <input type="text" name="address" value={this.state.list.address} onChange={this.onChange} required />
            </div>
            <div className="field">
            <label>Phone: </label>
            <input type="text" name="phone" value={this.state.list.phone} onChange={this.onChange} required />
            </div>
            <div className="field">
            <label>Name: </label>
            <input type="email" name="email" value={this.state.list.email} onChange={this.onChange} required />
            </div>
            <button onClick={this.add}>Add</button>
            </form>
          </div>          
        </div>
        <div>
          {this.state.list.length>0 ? (
          <table border="1" cellpadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {this.state.list.map(item => 
              <tr key={item.cname}>
                <td>{item.cname}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            )}
            </tbody>
          </table>
          ) : (<div className="no-data">No data found</div>)}
        </div>
      </div>
    );
  }
}

export default App;
