import useAsync from 'hooks/useAsync';
import { IProduct } from 'Models/types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProductService from 'services/ProductService';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import imageUrlParser from 'utils/imageUrlParser';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/actions/cartAction';

interface IParams {
    id: string;
}

const ProductDetails = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    const { data, isLoading, isSuccess, isError, error } = useAsync<IProduct>(
        () => ProductService.getProductByID(id)
    );

    const { name, image, price, description } = (data || {}) as IProduct;

    return (
        <div className="product_details_component my-3">
            <Container>
                <div className="wrapper">
                    {isLoading && <h2>Loading....</h2>}
                    {isSuccess && (
                        <Row>
                            <Col md={4}>
                                <img
                                    className="img-fluid"
                                    src={imageUrlParser(data ? image : '')}
                                    alt={name}
                                />
                            </Col>
                            <Col md={8}>
                                <h2 className="mb-2">{name}</h2>
                                <p className="mb-2">{description}</p>
                                <h1 className="mb-2">Price: {price}</h1>
                                <button
                                    onClick={() =>
                                        dispatch(addToCart(data as IProduct))
                                    }
                                    className="btn btn-primary"
                                >
                                    <AiOutlineShoppingCart />
                                    Add to cart
                                </button>
                            </Col>
                        </Row>
                    )}
                    {isError && <h2>{error}</h2>}
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;
