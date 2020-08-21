import React, { useState, useContext } from 'react'
import { FormGroup, Form, Button, Input, Label, Alert } from 'reactstrap';
import {v4 as uuidv4} from 'uuid';
import { GlobalContext } from '../context/GlobalState';

export default function AddBook(){

    const { addNewBook } = useContext(GlobalContext);
    
    const [books, setBooks] = useState({
        title: "",
        rating: 0
    })
   
    const [visible, setVisible] = useState(false);
    
    const { title, rating } = books
    
    const onChangeBooks = e => {
        setBooks({...books, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(title !== "" || rating !== ""){
            const newBook = {
                id: uuidv4(),
                title,
                rating: rating * 1.00
            }
            addNewBook(newBook)

            setBooks({
                title: "",
                rating: 0
            })

            setVisible(!visible)
        }
    }
    
    return (
        <div className="mt-3">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="title">Book Title</Label>
                <Input 
                    type="text" 
                    name="title" 
                    placeholder="Book Title..." 
                    value={title}  
                    autoComplete="off" 
                    onChange={onChangeBooks} />
                </FormGroup>
                <FormGroup>
                <Label for="rating">Rating</Label>
                <Input 
                    type="text" 
                    name="rating" 
                    placeholder="Book Rating..." 
                    value={rating} 
                    autoComplete="off" 
                    onChange={onChangeBooks} />
                </FormGroup>
                <FormGroup>
                    <Button className="float-right" color="primary" type="submit">Add Book</Button>
                </FormGroup>
            </Form>

             <Alert color="success" isOpen={visible}>
                    New Books Added!
                </Alert>    
        </div>
        
    )
}
