import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from "../assets/bigStar.png"

const DevicePage = () => {
    const device = {id: 1, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'}
    const description = [
        {id: 1, title: "Оперативная память", description: "6 Гб"},
        {id: 2, title: "Камера", description: "12 МП"},
        {id: 3, title: "Процессор", description: "A13 Bionic"},
        {id: 4, title: "Кол-во ядер", description: "4"},
        {id: 5, title: "Аккумулятор", description: "2800 mAh"}
    ]
    return (
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Image width={300} height={300} src={device.img} />
          </Col>
          <Col md={4}>
            <Row className="d-flex flex-column align-items-center">
              <h2>{device.name}</h2>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  background: `url(${bigStar}) no-repeat center center`,
                  width: 240,
                  height: 240,
                  backgroundSize: "cover",
                  fontSize: 64,
                }}
              >
                {device.rating}
              </div>
            </Row>
          </Col>
          <Col md={4}>
            <Card 
                className='d-flex flex-column align-items-center justify-content-around'
                style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}>
                <h3>
                    от {device.price} тенге
                </h3>
                <Button variant='outline-dark'>Добавить в корзину</Button>
            </Card>
          </Col>
        </Row>
        <Row className='d-flex flex-column m-3'>
            {description.map((info, index) => (
                <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent" }}>
                    {info.title}: {info.description}
                </Row>
            ))}
        </Row>
      </Container>
    );
};

export default DevicePage;