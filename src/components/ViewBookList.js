import React, { useContext } from 'react';
import { Table, Button } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';

export default function ViewBookList()  {

   const { loading , error, books, deleteBook } = useContext(GlobalContext)
      
    return (
        <>
        { loading ? 'Loading' :
        <Table>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              {/* <td>{book.id}</td> */}
              <td>{book.title}</td>
              <td>{book.rating}</td>
              <td>
                <Button color="success" size="sm" className="mr-2" disabled>Edit</Button>
                <Button color="danger" size="sm" onClick={() => {
                    deleteBook(book.id)
                }}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      }
      {error ? error : null}
      </>
    )
}
