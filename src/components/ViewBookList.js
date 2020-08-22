import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';
import BookListItem from './BookListItem';

export default function ViewBookList()  {

   const { loading , error, books } = useContext(GlobalContext)
    
    return (
        <>
        { loading ? 'Loading...'   
           : 
        <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
              <BookListItem  key={book.id} book={book} />
          ))}
        </tbody>
      </Table>
      }
      {error ? error : null}
      </>
    )
}
