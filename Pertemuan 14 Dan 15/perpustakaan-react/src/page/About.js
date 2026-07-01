import React, { Component } from "react";

class About extends Component {

    render() {

        return (

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <h1 className="fw-bold mb-4">

                            About Us

                        </h1>

                        <p className="lead">

                            Selamat datang di <strong>Book Education</strong>,
                            sebuah website katalog buku yang dibuat menggunakan
                            React JS.

                        </p>

                        <p>

                            Website ini bertujuan untuk membantu pengguna
                            mencari informasi buku berdasarkan judul,
                            penulis, penerbit, maupun tahun terbit.

                        </p>

                        <p>

                            Project ini dibuat sebagai tugas
                            Praktikum Perancangan Web
                            menggunakan React Router dan Bootstrap.

                        </p>

                        <button className="btn btn-primary">

                            Pelajari Lebih Lanjut

                        </button>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img
                            src="img/about.png"
                            alt="About"
                            className="img-fluid"
                            style={{
                                maxWidth: "450px"
                            }}
                        />

                    </div>

                </div>

            </div>

        );

    }

}

export default About;