import React, { Fragment } from "react";
import CatalogItem from "./CatalogItem"; 

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
      ["buku7.jpg", "Perancangan Basis Data Teori", "Suhartini", "Deepublish", 2020],
      ["buku8.jpg", "Teori Dan Praktek Sistem Operasi", "Zainal Romegar Mair", "Deepublish", 2018]
    ];
  }

  render() {
    let allBooksList = [];
    for (let i = 0; i < this.books.length; i++) {
      allBooksList.push(
        <div className="col-sm-6 col-lg-4 mb-4 book" key={"all-" + i}>
          <CatalogItem book={this.books[i]} />
        </div>
      );
    }

    return (
      <Fragment>
        {}
        <div className="mt-4 mb-5">
          <h2 className="fw-bold text-dark mb-3">Our Books</h2>
          <div className="row g-4">
            {allBooksList}
          </div>
        </div>
      </Fragment>
    );
  }
}