import React, { ReactElement, useState } from 'react';
import "./AlertBox.css";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible(props : any) : ReactElement {
  const [show, setShow] = useState(true);
  const prop = props;

  return (
    <div id='alert'>
      <Alert show={show} variant="">
        <Alert.Heading>{prop.heading}</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-dark">
            Done
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default AlertDismissible;