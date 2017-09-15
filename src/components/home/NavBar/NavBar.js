import './NavBar.css';

import React, {Component} from 'react';
import {Image, Nav, NavItem, Navbar} from 'react-bootstrap';
import {animateScroll as scroll, scroller} from 'react-scroll';

class NavBar extends Component {
  underline = (event) => {
    if (window.innerWidth > 768) {
      event
        .target
        .classList
        .toggle('underline');
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToComp(name) {
    scroller.scrollTo(name, {
      offset: -20,
      smooth: true,
    });
    if (document.querySelector('#hamburger').classList.contains('open')) {
      document
        .querySelector('#hamburger')
        .classList
        .toggle('open');
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .opacity = 0;
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .zIndex = -1;
      document
        .querySelector('#nav-logo')
        .style
        .opacity = 1;
      document.body.style.overflow = 'visible';
    }
  }

  openMenu() {
    document
      .querySelector('#hamburger')
      .classList
      .toggle('open');
    if (document.querySelector('#hamburger').classList.contains('open')) {
      document
        .querySelector('.navbar-fixed-top')
        .style
        .backgroundColor = '#000';
      document
        .querySelector('#nav-logo')
        .style
        .opacity = 0;
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .opacity = 1;
      document.body.style.overflow = 'hidden';
    } else {
      document
        .querySelector('.navbar-fixed-top')
        .style
        .backgroundColor = 'rgba(10, 10, 10, .9)';
      document
        .querySelector('#nav-logo')
        .style
        .opacity = 1;
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .opacity = 0;
      document.body.style.overflow = 'visible';
    }
  }

  render() {
    return (
      <Navbar className="navbar-fixed-top" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a role="button" id="nav-logo" onClick={this.scrollToTop}>
              <Image className="logo" src={require('./images/tt_logo.png')}/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            children={<div id="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              </div>
            }
            onClick={this.openMenu}/>
        </Navbar.Header>
        <Nav pullLeft className="hidden-sm hidden-xs">
          <NavItem className="navbar-title" onClick={this.scrollToTop}>Theta Tau @ UC San Diego</NavItem>
        </Nav>
        <Navbar.Collapse>
          <Nav pullRight>
            {/*<li role="presentation">
              <DropdownButton
                title="About" 
                noCaret 
                id="about"
                onClick={() => {
                  this.scrollToComp("who-we-are");
                  document.querySelector('.dropdown .dropdown-menu').style.display = 'none';
                }}
              >
                <MenuItem eventKey="1" href="/history">History</MenuItem>
                <MenuItem eventKey="2" href="/brotherhood">Brotherhood</MenuItem>
                <MenuItem eventKey="3" href="/professionalism">Professionalism</MenuItem>
                <MenuItem eventKey="4" href="/philanthropy">Philanthropy</MenuItem>
              </DropdownButton>
            </li>*/}
            <NavItem 
              onClick={() => this.scrollToComp("who-we-are")} 
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              About
            </NavItem>
            <NavItem 
              onClick={() => this.scrollToComp("why-rush")}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              Rush
            </NavItem>
            <NavItem 
              onClick={() => this.scrollToComp("faq")}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              FAQ
            </NavItem>
            <NavItem 
              onClick={() => this.scrollToComp("messenger")}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              Contact Us
            </NavItem>
            <NavItem 
              onClick={() => this.scrollToComp("companies")}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              Network
            </NavItem>
            <li role="presentation">
              <a 
                href="/members"
                onMouseOver={this.underline}
                onMouseOut={this.underline}
              >
                Members
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export {NavBar};
