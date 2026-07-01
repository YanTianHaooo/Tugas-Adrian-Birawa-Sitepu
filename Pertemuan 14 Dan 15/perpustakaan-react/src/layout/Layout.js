import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Layout extends Component {

    render() {

        return (

            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

                    <div className="container">

                        <Link
                            className="navbar-brand fw-bold"
                            to="/"
                        >
                            📚 Book Library
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >

                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/"
                                    >
                                        Home
                                    </Link>

                                </li>

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/about"
                                    >
                                        About
                                    </Link>

                                </li>

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/guestbook"
                                    >
                                        Guest Book
                                    </Link>

                                </li>

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/faq"
                                    >
                                        FAQ
                                    </Link>

                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>

                <main className="container mt-4">

                    <Outlet />

                </main>

                <footer
                    className="bg-dark text-white text-center mt-5 py-3"
                >

                    <p className="mb-0">

                        © 2026 Book Library

                    </p>

                    <small>

                        Dibuat menggunakan React JS & Bootstrap

                    </small>

                </footer>

            </>

        );

    }

}

export default Layout;