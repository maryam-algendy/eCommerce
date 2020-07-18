# eCommerce-core

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [React-Bootstrap Example](#react-bootstrap-example)
* [Setup](#setup)


## General info
This project was bootstrapped with [React-bootstrap](https://react-bootstrap.github.io/).


## Technologies
Project is created with:
* [react.js](https://reactjs.org) version: 16.13.1
* [Bootstrap](getbootstrap.com) version: 4.4.1
* [react-bootstrap](https://react-bootstrap.github.io) version: 1.0.1


## React-Bootstrap Example

```jsx
import React from "react";
import { Card, Button } from "react-boostrap";

class Demo extends React.Component {
  render(){
    return
    (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="..." />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Demo;
```

## Setup
To run this project, install it locally using npm:

```
$ cd ../react-core 
$ yarn
$ yarn start
```
