import Typed from 'typed.js';
import React, { Component } from 'react';
import styled from 'styled-components';

const Element = styled.span`
  text-align: center;
`;

const words = ['Flavors of the World', 'Culture in Global Cuisine', 'A World of Flavors in the Kitchen', 'Culinary within our Planet'];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <Element
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
