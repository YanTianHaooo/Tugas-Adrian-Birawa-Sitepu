import React, { Component } from "react";
import CatalogItem from "./CatalogItem";

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      filter: "title",
      year: "",

      books: [
        {
          title: "Menguasai Pemrograman Berorientasi Objek",
          author: "Ade Rahmat Iskandar",
          publisher: "Informatika",
          year: 2020,
          image: "img/buku1.jpg",
          likes: 0,
          bookmark: false,
        },
        {
          title: "Dasar-Dasar Pemrograman dengan .NET",
          author: "Ade Rahmat Iskandar",
          publisher: "Informatika",
          year: 2019,
          image: "img/buku2.jpg",
          likes: 0,
          bookmark: false,
        },
        {
          title: "Metodologi Pengembangan Sistem Informasi",
          author: "Samiaji Sarosa",
          publisher: "Indeks",
          year: 2017,
          image: "img/buku3.jpg",
          likes: 0,
          bookmark: false,
        },
        {
          title: "Struktur Data",
          author: "Rosa A.S",
          publisher: "Modula",
          year: 2018,
          image: "img/buku4.png",
          likes: 0,
          bookmark: false,
        },
        {
          title: "Dasar Pemrograman Python 3",
          author: "Abdul Kadir",
          publisher: "Andi Publisher",
          year: 2018,
          image: "img/buku5.jpg",
          likes: 0,
          bookmark: false,
        },
        {
          title: "Sistem Basis Data Dan SQL",
          author: "Didik Setiyadi",
          publisher: "Mitra Wacana Media",
          year: 2020,
          image: "img/buku6.jpeg",
          likes: 0,
          bookmark: false,
        },
        {
          title: "Perancangan Basis Data Teori",
          author: "Suhartini",
          publisher: "Deepublish",
          year: 2020,
          image: "img/buku7.jpg",
          likes: 0,
          bookmark: false,
        },
        {
          title: "Teori Dan Praktek Sistem Operasi",
          author: "Zaid Romegar Mair",
          publisher: "Deepublish",
          year: 2018,
          image: "img/buku8.jpg",
          likes: 0,
          bookmark: false,
        },
      ],
    };
  }

  handleSearch = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleYear = (e) => {
    this.setState({
      year: e.target.value,
    });
  };

  likeBook = (index) => {
    const books = [...this.state.books];
    books[index].likes += 1;

    this.setState({
      books,
    });
  };

  bookmarkBook = (index) => {
    const books = [...this.state.books];

    books[index].bookmark = !books[index].bookmark;

    this.setState({
      books,
    });
  };

  render() {
    const { books, keyword, filter, year } = this.state;

    const result = books.filter((book) => {
      const key = keyword.toLowerCase();

      switch (filter) {
        case "title":
          return book.title.toLowerCase().includes(key);

        case "author":
          return book.author.toLowerCase().includes(key);

        case "publisher":
          return book.publisher.toLowerCase().includes(key);

        case "titleyear":
          return (
            book.title.toLowerCase().includes(key) &&
            book.year.toString().includes(year)
          );

        default:
          return true;
      }
    });

    return (
      <div className="container">

        <div className="row mb-4">

          <div className="col-md-5">

            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={this.handleSearch}
            />

          </div>

          <div className="col-md-3">

            <input
              type="number"
              className="form-control"
              placeholder="Year"
              onChange={this.handleYear}
            />

          </div>

          <div className="col-md-4">

            <select
              className="form-select"
              onChange={this.handleFilter}
            >

              <option value="title">Title</option>

              <option value="author">Author</option>

              <option value="publisher">Publisher</option>

              <option value="titleyear">Title & Year</option>

            </select>

          </div>

        </div>

        <div className="row">

          {result.map((book, index) => (
            <CatalogItem
              key={index}
              index={index}
              book={book}
              likeBook={this.likeBook}
              bookmarkBook={this.bookmarkBook}
            />
          ))}

        </div>

      </div>
    );
  }
}

export default Catalog;