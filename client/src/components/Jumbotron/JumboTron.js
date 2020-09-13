import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Book Search</h1>
          <p className="lead">Search a Book Title </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;
