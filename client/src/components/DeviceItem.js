import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/icons/star.png'
import { useNavigate } from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className='mt-3' onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} style={{objectFit: 'contain'}}/>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <div className='text-black-50'>Samsung...</div>
                    <div className='d-flex align-items-center' >
                        <div style={{marginRight: '5px'}}>{device.rating}</div>
                        <Image src={star} width={15} height={15}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
