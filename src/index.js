import React from 'react';
import { render } from 'react-dom'

import MainLayout from './components/layouts/MainLayout';
import Home from './components/Home';
import About from './components/About';
import './index.css';

import { BrowserRouter, Match } from 'react-router'

// http://frontend.turing.io/lessons/react-router-4.html

const Root = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/about" component={About} />
      </MainLayout>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))
