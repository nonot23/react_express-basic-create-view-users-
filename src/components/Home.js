import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import List from './List'


const Home = () => {
    const [userField, setUserField] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const changeUser = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        })
        console.log(userField)
    }
    const onSumbitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/create' ,userField);
            alert("บันทึกสำเร็จ",response)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Container>
            <div className='w-100 d-flex justify-content-center p-3 fs-3' >React And Express Add Users Basic</div>
            <Row>
                <Col md={4}>
                    <div >
                        <h3 className='mt-3'>Add Yor Detail</h3>
                        <Form >
                           <Form.Group as={Row} className="mb-3" controlId="formHorizontalFristname" onChange={e => changeUser(e)}>
                              <Form.Label className='mt-3'>
                                 
                              </Form.Label>
                              <Col sm={10}>
                                 <Form.Control type="firstname" placeholder="Fristname" name="firstname"/>
                              </Col>
                           </Form.Group>

                           <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastname" onChange={e => changeUser(e)}>
                              <Form.Label >
                                 
                              </Form.Label>
                              <Col sm={10}>
                                 <Form.Control type="lastname" placeholder="Lastname" name="lastname"/>
                              </Col>
                           </Form.Group>

                           <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" onChange={e => changeUser(e)}>
                              <Form.Label>
                                 
                              </Form.Label>
                              <Col sm={10}>
                                 <Form.Control type="email" placeholder="Email" name="email"/>
                              </Col>
                           </Form.Group>

                           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange={e => changeUser(e)}>
                              <Form.Label>
                                 
                              </Form.Label>
                              <Col sm={10}>
                                 <Form.Control type="password" placeholder="Password" name="password"/>
                              </Col>
                           </Form.Group>
                           
                           <Form.Group as={Row} className="mb-3" >
                             <Col>
                               <Button type="submit" onClick={e => onSumbitChange(e)}>Add </Button>
                             </Col>
                           </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col md={8}> 
                    <div>
                        <List />
                    </div>
                </Col>
            </Row>
        </Container>
        
    );
}
export default Home;