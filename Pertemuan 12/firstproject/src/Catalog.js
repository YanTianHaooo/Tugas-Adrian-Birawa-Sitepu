import React, { Fragment } from "react";

export default class Catalog extends React.Component {
  constructor() {
    super();
    this.books = [
      ["buku1.jpg", "Menguasai Pemrograman Berorientasi Objek", "Ade Rahmat Iskandar", "Informatika", 2020],
      ["buku2.jpg", "Dasar-Dasar Pemrograman dengan .NET", "Ade Rahmat Iskandar", "Informatika", 2019],
      ["buku3.jpg", "Metodologi Pengembangan Sistem Informasi", "Samiaji Sarosa", "Indeks", 2017],
      ["buku4.png", "Struktur Data", "Rosa A.S", "Modula", 2018],
      ["buku5.jpg", "Dasar Pemrograman Python 3", "Abdul Kadir", "Andi Publisher", 2018],
      ["buku6.jpeg", "Sistem Basis Data Dan Sql", "Didik Setiyadi", "Mitra Wacana Media", 2020],
      ["buku7.jpg", "Perancangan Basis Data Teori", "Suparman", "Teknosain", 2021],
      ["buku8.jpg", "Teori Dan Praktek Sistem Operasi", "Zainal Abidin, S.Kom., M.Kom", "Magnitudo", 2018]
    ];
  }

  renderBookCard(book, index) {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 mb-4" key={index}>
        <div className="card text-center h-100 shadow-sm">
          <div className="card-img-top mt-3">
            <img
              src={"img/" + book[0]}
              alt={book[1]}
              width="150px"
              height="200px"
              style={{ marginBottom: "10px", objectFit: "cover" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>{book[1]}</h5>
            <p className="card-text text-secondary mb-1" style={{ fontSize: "0.9rem" }}>{book[2]}</p>
            <p className="card-text text-muted" style={{ fontSize: "0.8rem" }}>
              {book[3]} <small className="text-muted">{book[4]}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let popularBooks = [this.books[0], this.books[4], this.books[5]];
    let popularList = [];
    for (let i = 0; i < popularBooks.length; i++) {
      popularList.push(this.renderBookCard(popularBooks[i], i));
    }

    let allBooksList = [];
    for (let i = 0; i < this.books.length; i++) {
      allBooksList.push(this.renderBookCard(this.books[i], i));
    }

    return (
      <Fragment>
        {}
        <div className="mt-4">
          <h2 className="fw-bold text-dark mb-3">Popular</h2>
          <div className="row g-4">
            {popularList}
          </div>
        </div>

        <hr className="my-5" />

        {}
        <div className="mb-5">
          <h2 className="fw-bold text-dark mb-3">Our Books</h2>
          <div className="row g-4">
            {allBooksList}
          </div>
        </div>
      </Fragment>
    );
  }
}