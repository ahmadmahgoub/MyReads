import React from 'react'
import {update} from "../BooksAPI"
class Book extends React.Component {
    render(){
    return (
        this.props.data && this.props.data.map((v)=>(
            
            <li key={v.id}>
            <div className="book" >
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${v.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select  onChange={(e)=>{update(v,e.target.value);this.props.changeShelf(v,e.target.value)}} value={v.shelf}>
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
        ))
        
    )
}}

export default Book
