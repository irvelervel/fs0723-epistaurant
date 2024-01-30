import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import pastasciutte from '../data/menu.json'
// pastasciutte è un array di oggetti

const HomepageCarousel = () => {
  // qui posso mettere del JS!
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Carousel>
            {pastasciutte.map((pasta) => {
              return (
                <Carousel.Item key={pasta.id}>
                  <img src={pasta.image} alt="pasta pic" />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default HomepageCarousel
