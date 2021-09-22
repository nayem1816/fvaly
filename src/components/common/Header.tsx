import React from 'react';
import logo from 'assets/images/fvaly.png';
import {
    Button,
    Container,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { BiSearch, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { IProduct } from 'Models/types';

const Header = () => {
    const cart: IProduct[] = useSelector((state: AppState) => state.cart);

    return (
        <div>
            <div className="header-component">
                <div className="top-header py-2 bg-light border-bottom">
                    <Container className="d-flex align-items-center justify-content-between">
                        <ul className="list-unstyled d-flex align-items-center gap-4">
                            <li>
                                <FiPhoneCall />
                                <a href="tel:01841181011">01841181011</a>
                            </li>
                            <li>
                                <FaRegEnvelope />
                                <a href="mail-to:nayemhossainmd1@gmail.com">
                                    nayemhossainmd1@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="">
                            <BsPhone />
                            <a href="https://play.google.com/store/apps">
                                Save big on our app!
                            </a>
                        </div>
                    </Container>
                </div>
                <div className="middle-header">
                    <Container>
                        <div className="d-flex align-items-center py-3 gap-5">
                            <Link to="/">
                                <img className="branding" src={logo} alt="" />
                            </Link>
                            <InputGroup className="">
                                <FormControl
                                    className="border border-primary"
                                    placeholder="Search here...."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="primary" id="button-addon2">
                                    <BiSearch />
                                </Button>
                            </InputGroup>
                            <ul className="list-icon list-unstyled d-flex gap-4">
                                <li>
                                    <Link to="/checkout">
                                        <FiShoppingBag />
                                        <span className="badge bg-primary">
                                            {cart.length}
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#">
                                        <BiUser />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Categories</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">News Feed</Nav.Link>
                        <Nav.Link href="#features">Merchant Zone</Nav.Link>
                        <Nav.Link href="#pricing">Help</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
