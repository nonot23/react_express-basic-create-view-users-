import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col,Table } from 'react-bootstrap';


const List = () => {
    const [userData,setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []) /*[] คือเรียกใช้งาน ฟังชั่น fetchData ครั้งเดียวเมื่อคอมโพเนนด์โหลด*/

    const fetchData = async () => {
        try {
            const result = await axios('http://localhost:3001/users');
            setUserData(result.data)
          } catch (err) {
            console.error(err);
          }
    }
    return(
        <Container>
            <Row >
                <Col>

                    <h3 className='mt-3'>USERS DETAILS</h3>
                     <Table striped bordered hover size="sm">
                         <thead>
                            <tr>
                                <th>id</th>
                                <th>firstname</th>
                                <th>lastname</th>
                                <th>email</th>
                             </tr>
                         </thead>
                         <tbody>
                            {
                                userData.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    )
                                })
                            }
                         </tbody>
                      </Table>
                      
                </Col>
            </Row>
        </Container>
    );
}
export default List;