import React, {useState} from 'react'
import './App.css';
import Navbar, { SubNavbar } from './components/navbar'
import Article from './components/article'
import Footer from './components/footer'
import Layout from './components/layout';

function App() {
  return (
      <div className="App">
        {/*<Navbar title="Functional" />
        <SubNavbar/>
        <Article title="Content Title" />
        <Footer/>*/}
        <Layout>
          <Article/>
        </Layout>
      </div>
    );
  }

export default App;
