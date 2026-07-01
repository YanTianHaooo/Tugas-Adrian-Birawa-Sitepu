import React, { Component } from "react";
import Catalog from "../component/Catalog";

class Main extends Component {

    render() {

        return (

            <>

                <div className="text-center mb-5">

                    <img
                        src="img/book-edu.png"
                        className="logo-book"
                        alt="Book Education"
                    />

                        <h1 className="logo-title">

                         BOOK EDUCATION

                     </h1>

                     <p className="logo-subtitle">

                         Website Katalog Buku Menggunakan React JS

                    </p>

                </div>

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-body">

                        <h3 className="mb-3">

                            📚 Our Books

                        </h3>

                        <Catalog />

                    </div>

                </div>

            </>

        );

    }

}

export default Main;