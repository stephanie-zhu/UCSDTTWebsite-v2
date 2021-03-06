import './Footer.css';

import {Col, Grid, Row} from 'react-bootstrap';
import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer maroon-bg">
          <Grid className="footer-padding">
            <Row className="show-grid">
              <Col xsOffset={2} xs={8} smOffset={0} sm={6} md={4} className="widget"><div className="widget-header">Want to learn more?</div><br/>
                <p className="footer-p"> Outside of the Epsilon Delta chapter at UCSD, Theta Tau is the oldest 
                    and largest professional engineering fraternity in the United States, 
                    with chapters everywhere from coast to coast!
                </p>
                <p className="footer-p">
                  For more information, visit Theta Tau's national site: 
                    <a className="light-grey" href="http://thetatau.org/"> thetatau.org</a>
                </p>
              </Col>
              <Col xsOffset={2} xs={8} smOffset={0} sm={6} md={4} className="widget">
                <div className="widget-header">Visit our Neighboring Chapters</div><br/>
                    <ul className="footer-ul">
                      <li><a className="light-grey" href='http://www.thetatauuci.com/' target="_blank" rel="noopener noreferrer">UC Irvine</a></li>
                      <li><a className="light-grey" href='http://theta-tau-chi-chapter.herokuapp.com/' target="_blank" rel="noopener noreferrer">University of Arizona</a></li>
                      <li><a className="light-grey" href='http://www.thetataubruins.org/' target="_blank" rel="noopener noreferrer">UC Los Angeles</a></li>
                      <li><a className="light-grey" href='http://www.engr.ucr.edu/~thetatau/' target="_blank" rel="noopener noreferrer">UC Riverside</a></li>
                      <li><a className="light-grey" href='http://renothetatau.org/' target="_blank" rel="noopener noreferrer">University of Nevada, Reno</a></li>
                      <li><a className="light-grey" href='http://www.calthetatau.com/' target="_blank" rel="noopener noreferrer">UC Berkeley</a></li>
                      <li><a className="light-grey" href='http://pacific.orgsync.com/org/thetatau/About/' target="_blank" rel="noopener noreferrer">University of the Pacific</a></li>
                      <li><a className="light-grey" href='http://www.mdthetatau.org/' target="_blank" rel="noopener noreferrer">UC Merced</a></li>
                      <li><a className="light-grey" href='http://www.davisthetatau.com/' target="_blank" rel="noopener noreferrer">UC Davis</a></li>
                      <li><a className="light-grey" href='http://www.thetatau-dg.org/' target="_blank" rel="noopener noreferrer">Arizona State University</a></li>
                    </ul>
              </Col>
              <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={0} md={4} className="widget"><div className="widget-header">Website Credits</div><br/>
                <ul className="footer-ul">
                  <li><a className="light-grey" href='https://github.com/bchann/' target="_blank" rel="noopener noreferrer">Brian Chan</a></li>
                  <li><a className="light-grey">Hillary Fan</a></li>
                  <li><a className="light-grey">Blake Huynh</a></li>
                  <li><a className="light-grey">Kaiser Kim</a></li>
                  <li><a className="light-grey">Jeffrey Lee</a></li>
                </ul>
              </Col>
            </Row>
          </Grid>
          <div className="media-icons">
            <Grid>
              <Row className="show-grid">
                <Col xs={6} xsOffset={0} md={3} mdOffset={3}>
                  <a href="https://www.facebook.com/thetatau.ucsd/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-facebook light-grey"></i>
                  </a>
                </Col>
                <Col xs={6} xsOffset={0} md={3}>
                  <a href="https://instagram.com/thetatau_ucsd/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-instagram light-grey"></i>
                  </a>
                </Col>
              </Row>
            </Grid>
          </div>
      </div>
    );
  }
}

export {Footer};