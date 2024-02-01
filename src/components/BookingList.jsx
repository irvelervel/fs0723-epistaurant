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

  fetchReservations = () => {
    // questo è il metodo che si occuperà di recuperare le reservations dall'endpoint 'https://striveschool-api.herokuapp.com/api/reservation'
    fetch('https://striveschool-api.herokuapp.com/api/reservation')
      .then((response) => {
        if (response.ok) {
          // ora procedo all'estrazione del json dalla response
          return response.json()
        } else {
          throw new Error('Errore nella ricezione dati dal server')
        }
      })
      .then((arrayOfReservations) => {
        console.log('prenotazioni esistenti', arrayOfReservations)
        // cosa ci faccio ora con i dati? come li inserisco nell'interfaccia?
        // quello di cui mi devo occupare io è riempire l'array reservations nello stato
        this.setState({
          reservations: arrayOfReservations,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // abbiamo detto che render() è un metodo OBBLIGATORIO nei class components, in quanto senza di esso
  // non viene creata l'interfaccia

  // opzionalmente, potete però inserire anche ALTRI metodi in un componente a classe
  // i vostri, oppure ce ne sono anche altri di "predefiniti"
  // uno di questi si chiama "componentDidMount()"

  componentDidMount() {
    // componentDidMount() è un metodo molto importante per capire il "LIFECYCLE" dei componenti a CLASSE
    // ha una particolarità: viene eseguito sempre e solamente UNA VOLTA per ogni montaggio del componente
    // viene eseguito UNA VOLTA SOLA quindi, DOPO il PRIMO montaggio del componente (dopo il primo render())
    // 1) il componente viene istanziato dalla classe
    // 2) viene creato il suo stato iniziale
    // 3) viene eseguito render() per la prima volta
    // 4) se presente, viene eseguito per la prima e ultima volta componentDidMount()
    // 5) se nel componentDidMount, dopo il recupero dati, fate un this.setState() per aggiornare il contenuto
    // dello stato...
    // 6) ...il metodo render() si RI-LANCIA automaticamente! perchè? perchè render() viene AUTOMATICAMENTE
    // ri-eseguito nel componente a classe OGNI VOLTA che si aggiorna lo state o cambiano le props
    console.log('sono componentDidMount!')
    // poichè a questo punto, nel lancio di componentDidMount, le parti statiche della pagina hanno già raggiunto
    // il DOM e abbiamo la garanzia che questo metodo NON verrà più ri-eseguito, questo è il posto PERFETTO
    // per fare la nostra -fetch()- iniziale
    this.fetchReservations()
  }

  render() {
    console.log('sono render!')
    // -ATTENZIONE-
    // NON SETTARE MAI LO STATO DENTRO RENDER()
    // -> poichè un this.setState() automaticamente ri-lancia render(), e 100% ottenete un ciclo infinito
    // this.fetchReservations()
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
                  return (
                    <ListGroup.Item key={booking._id}>
                      {booking.name} per {booking.numberOfPeople} il:{' '}
                      {booking.dateTime}
                    </ListGroup.Item>
                  )
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
