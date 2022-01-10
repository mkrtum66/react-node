import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/icons/star.png'
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceApi";

const DevicePage = () => {
    // const device = {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'url'}
    // const description = [
    //     {id: 1, title: 'Ram', description: '4gb'},
    //     {id: 2, title: 'Camera', description: '12mp'},
    //     {id: 3, title: 'Processor', description: 'Core i9'},
    //     {id: 4, title: 'Battery', description: '4000'},
    // ]

    const [device, setDevice] = useState({info:[]})
    const {id} = useParams();
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    },[id])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize:'contain', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height:300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price} $</h3>
                        <Button variant={'outline-dark'}>Add To Basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Description</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
