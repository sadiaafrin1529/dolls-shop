import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
const Blog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='fs-4'>
                        <span className='fs-1 fw-bold text-warning'>Qus:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        <br />
                        <span className='fs-2 fw-bold text-success'>Ans:</span> Access Token:
                        <br />
                        An access token is a credential that is used to access protected resources on behalf of an authenticated user or client application. It is typically a string of characters that represents the authorization granted to the client. Access tokens are short-lived and have an expiration time.
                        <br />
                        Refresh Token:
                        <br />
                        A refresh token is a long-lived credential that is used to obtain a new access token after the current access token expires. It allows the client to refresh its access without requiring the user to re-authenticate.
                        <br />
                        The typical flow involving access tokens and refresh tokens is as follows:
                        <br />
                        <ol>
                            <li>The client authenticates with the authentication server, providing their credentials.</li>
                            <li>Upon successful authentication, the authentication server issues an access token and a refresh token.</li>
                            <li>
                                The client includes the access token in subsequent requests to access protected resources.
                            </li>
                            <li>The authentication server verifies the refresh token and issues a new access token to the client.</li>
                        </ol>
                        <br />
                        Store  the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
                    </Col>

                </Row>
                <Row>
                    <Col className='fs-4'>
                        <span className='fs-1 fw-bold text-warning'>Qus:</span> Compare SQL and NoSQL databases?
                        <br />
                        <span className='fs-2 fw-bold text-success'>Ans:</span> SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database systems with distinct characteristics and use cases. Here's a comparison of SQL and NoSQL databases based on several key factor.
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> SQL</th>
                                    <th>NoSQL</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        These databases have fixed or static or predefined schema.
                                    </td>
                                    <td>
                                        They have a dynamic schema.
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        These databases are not suited for hierarchical data storage.
                                    </td>
                                    <td>
                                        These databases are best suited for hierarchical data storage.
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        These databases are best suited for complex queries
                                    </td>
                                    <td>
                                        These databases are not so good for complex queries
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
                <Row>
                    <Col className='fs-4'>
                        <span className='fs-1 fw-bold text-warning'>Qus:</span> What is express js? What is Nest JS?
                        <br />
                        <span className='fs-2 fw-bold text-success'>Ans:</span> Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
                    </Col>

                </Row>
                <Row className='mb-5'>
                    <Col className='fs-4'>
                        <span className='fs-1 fw-bold text-warning'>Qus:</span> What is MongoDB aggregate and how does it work?
                        <br />
                        <span className='fs-2 fw-bold text-success'>Ans:</span> What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </Col>

                </Row>


            </Container>
        </div>
    );
};

export default Blog;