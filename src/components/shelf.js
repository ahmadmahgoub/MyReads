import React from 'react'
import Book from './book'

function Shelf({name , data , changeShelf}){
    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book data={data} changeShelf={changeShelf}/>
                      
                    </ol>
                  </div>
                </div>
    )
}

export default Shelf
