import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';


export default function EditBook({book, handleEdit}) {

    const { saveUpdate } = useContext(GlobalContext)

    const [updateBook, setUpdateBook] = useState({
        id: book.id,
        title: book.title,
        rating: book.rating
    })

    const onChangeEdit = e => {
        setUpdateBook({...updateBook, [e.target.name]: e.target.value})
    }
    
    const handleSubmitEdit = e => {
        e.preventDefault()
        if(updateBook.title !== "" || updateBook.rating !== ""){
            saveUpdate(updateBook.id, updateBook)
        }
        handleEdit()
    }
  
    return (
        <Form>
            <FormGroup>
                <Label for="title">Book Title</Label>
                <Input 
                    type="text" 
                    name="title" 
                    placeholder="Book Title..." 
                    defaultValue={book.title} 
                    autoComplete="off" 
                    onChange={onChangeEdit} 
                />
            </FormGroup>
            <FormGroup>
                <Label for="rating">Rating</Label>
                <Input 
                    type="text" 
                    name="rating" 
                    placeholder="Book Rating..." 
                    defaultValue={book.rating} 
                    autoComplete="off"
                    onChange={onChangeEdit} 
                />
            </FormGroup>
            <FormGroup>
                <Button color="primary" onClick={handleSubmitEdit}
                // onClick={() => {
                //     saveUpdate(book.id, book.title, book.rating)
                // }}
                >Save Changes</Button>{' '}
                <Button color="secondary" className="float-right" onClick={handleEdit}>Cancel</Button>
            </FormGroup>
        </Form>
    )
}
