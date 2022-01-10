import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import {Button, Form} from "react-bootstrap";
import {createType} from "../../http/deviceApi";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(() => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Create Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder="Write type" type='input'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
