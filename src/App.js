import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from "./components/Home"
import Search from './components/search'
import { Route, Switch } from 'react-router'

class BooksApp extends React.Component {
  state = {
    data : null,
  }
 
  async componentDidMount(){
    const data = await BooksAPI.getAll();
    this.setState({
      data : data,
    })
  }


  changeShelf = (i,shelf)=>{
    
    this.setState(({
      data : this.state.data.map((v)=>{
        if(v.id === i.id ){v.shelf = shelf}
        return v ;  
      })
    }))
  }
  
  render() {
    return (
      <div className="app">
       <Switch>
         <Route exact path = "/" component={()=><Home data={this.state.data} changeShelf={this.changeShelf}/>}></Route>
         <Route path = "/search" component={()=><Search data={this.state.data} changeDataShelf={this.changeShelf}/>}></Route>
         
       </Switch>
      </div>
    )
  }
}

export default BooksApp
