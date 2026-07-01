import React, { Component } from "react";

class GuestBook extends Component {

    constructor(props) {
        super(props);

        this.state = {

            nama: "",
            email: "",
            pesan: "",

            daftarTamu: []

        };
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });

    };

    handleSubmit = (e) => {

        e.preventDefault();

        if (
            this.state.nama === "" ||
            this.state.email === "" ||
            this.state.pesan === ""
        ) {

            alert("Semua data harus diisi!");

            return;
        }

        const tamuBaru = {

            nama: this.state.nama,
            email: this.state.email,
            pesan: this.state.pesan

        };

        this.setState({

            daftarTamu: [...this.state.daftarTamu, tamuBaru],

            nama: "",
            email: "",
            pesan: ""

        });

    };

    render() {

        return (

            <div className="container">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">

                        <h3>Buku Tamu</h3>

                    </div>

                    <div className="card-body">

                        <form onSubmit={this.handleSubmit}>

                            <div className="mb-3">

                                <label className="form-label">

                                    Nama

                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="nama"
                                    value={this.state.nama}
                                    onChange={this.handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Email

                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Pesan

                                </label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    name="pesan"
                                    value={this.state.pesan}
                                    onChange={this.handleChange}
                                ></textarea>

                            </div>

                            <button
                                className="btn btn-success"
                                type="submit"
                            >

                                Simpan

                            </button>

                        </form>

                    </div>

                </div>

                <div className="mt-5">

                    <h3>Daftar Pengunjung</h3>

                    <table className="table table-bordered table-striped">

                        <thead className="table-dark">

                            <tr>

                                <th>No</th>

                                <th>Nama</th>

                                <th>Email</th>

                                <th>Pesan</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                this.state.daftarTamu.length === 0 ?

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center"
                                        >

                                            Belum ada data

                                        </td>

                                    </tr>

                                    :

                                    this.state.daftarTamu.map((item, index) => (

                                        <tr key={index}>

                                            <td>{index + 1}</td>

                                            <td>{item.nama}</td>

                                            <td>{item.email}</td>

                                            <td>{item.pesan}</td>

                                        </tr>

                                    ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        );

    }

}

export default GuestBook;