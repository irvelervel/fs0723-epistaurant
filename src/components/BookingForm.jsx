// il mio backender mi ha detto come dev'essere strutturata una "prenotazione"

// "name" --> string, required
// "phone" --> string/number, required
// "numberOfPeople" --> string/number, required
// "smoking" --> boolean, required
// "dateTime" --> string in ISO format, required
// "specialRequest" --> string

import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class BookingForm extends Component {
  state = {
    // come sempre qui dichiaro lo STATO INIZIALE del componente
    // ogni volta che creerete un form in React, dovrete salvarne i valori dentro lo state del componente
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: '1',
      smoking: false,
      dateTime: '',
      specialRequest: '',
    },
  }

  render() {
    return (
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center">Prenota un tavolo</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Come ti chiami?"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Il tuo numero di telefono</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete?</Form.Label>
                <Form.Select aria-label="numero-persone" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tavolo fumatori?" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data e ora</Form.Label>
                <Form.Control type="datetime-local" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Richieste particolari</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Allergie, cani, gatti, etc."
                />
              </Form.Group>

              <Button variant="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookingForm
