import React from "react"
import { Link } from "react-router-dom"
import Shelf from "./shelf"
class Home extends React.Component {
    state = {
      currentlyReading :this.props.data && this.props.data.filter((v)=>v.shelf==="currentlyReading"),
      wantToRead :this.props.data && this.props.data.filter((v)=>v.shelf==="wantToRead"),
      read:this.props.data && this.props.data.filter((v)=>v.shelf==="read")
    }
    render(){
        return (
         
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {!this.props.data ? <div className="loading">loading...</div> :
            <div className="list-books-content">
            <div>
            <Shelf name="Currently Reading" data={this.state.currentlyReading} changeShelf={this.props.changeShelf}/>
            <Shelf name="Want to Read" data={this.state.wantToRead} changeShelf={this.props.changeShelf}/>
            <Shelf name="Read" data={this.state.read} changeShelf={this.props.changeShelf}/>
            </div>
          </div>
            }
            
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
        )
    }
}

export default Home