import React from "react"
import { Link } from "react-router-dom"
import { search, update } from "../BooksAPI"


class Search extends React.Component {
  state = {
    query : "",
    result : []
  }
  
  
  handleChange = async (e)=>{
    const query  = e.target.value;
    this.setState({query: query});
    if(query){
      let result  = await search(query)
      if(result.error){
        result = []
      }
      this.setState({result : result})
    }else{this.setState({result : []})}
    
    
    
  }

  changeShelf = (i,shelf)=>{
    this.setState({
      result : this.state.result.map((v)=>{
        if(v.id===i.id){
          v.shelf = shelf
        }
        return v})
    })
  }

  render(){
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"><button className="close-search"  >Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"  value={this.state.query} onChange={this.handleChange}/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.result.length === 0 && this.state.query? 
                <div style={{font:"15px arial"}}>*No Result For Your Search*</div>
                :this.state.result && this.state.result.map((v)=>{
                  if(this.props.data.map(v=>v.id).includes(v.id)){
                    v.shelf = this.props.data.filter((l=>l.id===v.id))[0].shelf
                    }else{v.shelf = "None"}
                  return (<li key={v.id}>
                    <div className="book" >
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: v.imageLinks?`url(${v.imageLinks.smallThumbnail})`:"none" }}></div>
                        <div className="book-shelf-changer">
                        <select  onChange={(e)=>{update(v,e.target.value);this.props.changeDataShelf(v,e.target.value); this.changeShelf(v,e.target.value)}} value={v.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read" >Read</option>
                                <option value="None">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{v.title}</div>
                    <div className="book-authors">{v.authors}</div>
                    </div>
                  </li>
        )})}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search