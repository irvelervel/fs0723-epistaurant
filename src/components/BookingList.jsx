import { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'

class BookingList extends Component {
  state = {
    // questo state prima di tutto servirà a salvare i dati raccolti con la chiamata fetch()
    reservations: [], // all'inizio del caricamento del componente, facciamo posto per successivamente
    // salvare i dati, ma visto che la fetch deve ancora partire il suo valore è un array vuoto
  }

  render() {
    return (
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <h2>Prenotazioni Esistenti</h2>
            {/* ora voglio far vedere l'array di prenotazioni recuperato, sotto forma di lista */}
            {/* tuttavia se non ci fossero prenotazioni da far vedere, invece di una lista vuota
            voglio mostrare un Alert di informazione */}
            {/* per fare questo utilizzo un "if/else" in JSX, che si effettua con l'operatore ternario */}
            {/* la domanda è: "la lunghezza dell'array reservations nello state è maggiore di 0?" */}
            {/* se sì, prendi l'array, mappalo e ritorna un list item per ogni prenotazione */}
            {/* se no, mostra un Alert di bootstrap informando l'utente che al momento non ci sono ancora prenotazioni */}
            {this.state.reservations.length > 0 ? (
              <ListGroup>
                {this.state.reservations.map((booking) => {
                  return <ListGroup.Item>Cras justo odio</ListGroup.Item>
                })}
              </ListGroup>
            ) : (
              <Alert variant="warning">Nessuna prenotazione inserita</Alert>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookingList
