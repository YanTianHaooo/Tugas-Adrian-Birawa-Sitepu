import React, { Component, Fragment } from 'react';

import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Main from "./page/Main";
import About from "./page/About";
import GuestBook from "./page/GuestBook";
import Faq from "./page/Faq";

class App extends Component {

    render() {
        return (

            <Fragment>

                <Routes>

                    <Route path="/" element={<Layout />}>

                          <Route index element={<Main />} />

                          <Route path="about" element={<About />} />

                          <Route path="guestbook" element={<GuestBook />} />

                          <Route path="faq" element={<Faq />} />

                      </Route>

                    </Routes>

            </Fragment>

        );
    }

}

export default App;