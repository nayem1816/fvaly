import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const ProductsSkeleton = () => {
    return (
        <Row>
            {Array(12)
                .fill('')
                ?.map((product, index) => (
                    <Col md={3} className="mb-3" key={index}>
                        <Skeleton width={300} height={250} />
                    </Col>
                ))}
        </Row>
    );
};

export default ProductsSkeleton;
