import React, { Component } from "react";

class CatalogItem extends Component {

    render() {

        const {
            book,
            index,
            likeBook,
            bookmarkBook
        } = this.props;

        return (

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

                <div className="card h-100 shadow-sm border-0">

                    <img
                        src={book.image}
                        className="card-img-top"
                        alt={book.title}
                        style={{
                            height: "250px",
                            objectFit: "cover"
                        }}
                    />

                    <div className="card-body">

                        <h5
                            className="card-title"
                            style={{
                                minHeight: "60px",
                                fontWeight: "bold"
                            }}
                        >
                            {book.title}
                        </h5>

                        <hr />

                        <p className="mb-1">
                            <strong>Penulis</strong>
                        </p>

                        <p className="text-muted">
                            {book.author}
                        </p>

                        <p className="mb-1">
                            <strong>Penerbit</strong>
                        </p>

                        <p className="text-muted">
                            {book.publisher}
                        </p>

                        <p className="mb-1">
                            <strong>Tahun</strong>
                        </p>

                        <p className="text-muted">
                            {book.year}
                        </p>

                    </div>

                    <div className="card-footer bg-white border-0 d-flex justify-content-between">

                        <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => likeBook(index)}
                        >

                            <i className="bi bi-hand-thumbs-up-fill"></i>

                            {" "}

                            {book.likes}

                        </button>

                        <button
                            className="btn btn-outline-warning btn-sm"
                            onClick={() => bookmarkBook(index)}
                        >

                            {
                                book.bookmark ?

                                <i className="bi bi-bookmark-fill"></i>

                                :

                                <i className="bi bi-bookmark"></i>
                            }

                        </button>

                    </div>

                </div>

            </div>

        );

    }

}

export default CatalogItem;