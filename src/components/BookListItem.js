import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';
import EditBook from './EditBook';

export default function BookListItem({ book }) {

    const { deleteBook } = useContext(GlobalContext)

    const [modal, setModal] = useState(false)

    const handleEdit = () => {
        setModal(!modal)
    }

    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.rating}</td>
            <td>
                <Button color="success" size="sm" className="mr-2" onClick={handleEdit}>Edit</Button>
                <Modal isOpen={modal} toggle={handleEdit}>
                    <ModalHeader toggle={handleEdit}>Edit Book</ModalHeader>
                    <ModalBody>
                        <EditBook handleEdit={handleEdit} book={book}/>
                    </ModalBody>
                </Modal>
                <Button color="danger" size="sm" onClick={() => {
                    deleteBook(book.id)
                }}>Delete</Button>
            </td>
        </tr>
    )
}
