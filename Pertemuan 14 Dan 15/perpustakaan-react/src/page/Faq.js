import React, { Component } from "react";

class Faq extends Component {

    render() {

        return (

            <div className="container">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">

                        <h3>Frequently Asked Questions (FAQ)</h3>

                    </div>

                    <div className="card-body">

                        <div
                            className="accordion"
                            id="accordionExample"
                        >

                            <div className="accordion-item">

                                <h2
                                    className="accordion-header"
                                    id="headingOne"
                                >

                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                    >

                                        Apa itu Book Education?

                                    </button>

                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >

                                    <div className="accordion-body">

                                        Book Education merupakan website
                                        katalog buku yang dibuat menggunakan
                                        React JS dan Bootstrap.

                                    </div>

                                </div>

                            </div>

                            <div className="accordion-item">

                                <h2
                                    className="accordion-header"
                                    id="headingTwo"
                                >

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                    >

                                        Apa fungsi React Router?

                                    </button>

                                </h2>

                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >

                                    <div className="accordion-body">

                                        React Router digunakan untuk
                                        berpindah halaman tanpa melakukan
                                        refresh browser sehingga aplikasi
                                        terasa lebih cepat.

                                    </div>

                                </div>

                            </div>

                            <div className="accordion-item">

                                <h2
                                    className="accordion-header"
                                    id="headingThree"
                                >

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                    >

                                        Apakah website ini menggunakan database?

                                    </button>

                                </h2>

                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >

                                    <div className="accordion-body">

                                        Saat ini data buku masih disimpan
                                        menggunakan state React sehingga
                                        belum terhubung dengan database.

                                    </div>

                                </div>

                            </div>

                            <div className="accordion-item">

                                <h2
                                    className="accordion-header"
                                    id="headingFour"
                                >

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                    >

                                        Teknologi apa yang digunakan?

                                    </button>

                                </h2>

                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >

                                    <div className="accordion-body">

                                        Project ini menggunakan
                                        React JS,
                                        React Router,
                                        Bootstrap 5,
                                        HTML,
                                        CSS,
                                        dan JavaScript.

                                    </div>

                                </div>

                            </div>

                            <div className="accordion-item">

                                <h2
                                    className="accordion-header"
                                    id="headingFive"
                                >

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                    >

                                        Siapa pembuat project ini?

                                    </button>

                                </h2>

                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >

                                    <div className="accordion-body">

                                        Website ini dibuat sebagai
                                        tugas praktikum
                                        Perancangan Web
                                        menggunakan React JS.

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        );

    }

}

export default Faq;