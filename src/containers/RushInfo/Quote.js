import './RushInfo.css';

import {Carousel, Row, Col} from 'react-bootstrap';
import React from 'react';

import {carouselData} from './data.js'

const activeList = carouselData.sort(() => .5 - Math.random());

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rushQuote: [],
      currentRushQuote: 0,
    };
  }

  componentDidMount() {
    let rushQuote = document.getElementsByClassName('quote-appear');

    rushQuote[0].style.opacity = 1;

    this.setState({
      rushQuote: rushQuote,
    })
  }

  changeQuote = (event) => {
    var cq = this.state.rushQuote[this.state.currentRushQuote];
    var nq = this.state.rushQuote[event];

    cq.style.opacity = 0;
    this.animateQuoteOut(cq)

    nq.style.opacity = 1;
    this.animateQuoteIn(nq)

    this.setState({
      currentRushQuote: event,
    })
  }

  animateQuoteOut(cq) {
    cq.className = 'quote-appear animated fadeOutDown';
  }

  animateQuoteIn(nq) {
    nq.className = 'quote-appear animated fadeInDown';
  }
  
  render() {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    return (
      <Row style={{overflow: "hidden"}}>
        <Col md={12} lg={8}>
          <Carousel interval={7000} onSelect={this.changeQuote}>
            {activeList.map((slide, i) => (
              <Carousel.Item key={i}>
                <img 
                  className="quote-image"
                  src={isSafari ? slide.safari : slide.image}
                  alt="Active" 
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col 
          md={12} lg={4}
        >
          {activeList.map((slide, i) => (
            <div key={i} className="quote-appear">
              <div style={{display: "flex"}}>
                <span className="quote-quotes">❝</span>
                <span className="rush-quote">{slide.quote}</span>
              </div>
              <div className="rush-author">
                - {slide.author}
                <p> {slide.class} </p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    )
  }
}

export {Quote}