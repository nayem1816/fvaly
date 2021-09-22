import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaRegTimesCircle } from 'react-icons/fa';
import { IProduct } from 'Models/types';

interface ICart {
    cartItem: IProduct;
}

const CartItem = ({ cartItem }: ICart) => {
    const { name, price, image } = cartItem;

    return (
        <Row>
            <Col md={1}>
                <img
                    className="img-fluid"
                    src={`https://res.cloudinary.com/shadincloudinarytraining/image/upload/${image}`}
                    alt=""
                />
            </Col>
            <Col>
                <h5 className="mt-4">{name}</h5>
            </Col>
            <Col
                md={2}
                className="d-flex justify-content-between align-items-center"
            >
                <button className="btn">
                    <FaRegTimesCircle />
                </button>
                <h6 className="m-0">৳ {price}</h6>
            </Col>
        </Row>
    );
};

export default CartItem;
