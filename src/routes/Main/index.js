import './main.less';

import React, { Component } from 'react';
import { connect } from 'react-redux';

const Kakao = window.Kakao;
Kakao.init('95169511a0071ea494ffccd695c6e73c');

import { SectionsContainer, Section } from 'react-fullpage';

import Intro from 'containers/Intro';
import Invitation from 'containers/Invitation';
import Location from 'containers/Location';
import Gallery from 'containers/Gallery';
import Contact from 'containers/Contact';

let options = {
  anchors: ['intro', 'greetings', 'location', 'gallery', 'contact'],
  scrollBar: true,
  verticalAlign: true,
  delay: 1000
};

class Main extends Component {

  render() {
    return(
      <div>
        <SectionsContainer {...options}>
          <Section className="section-intro">
            <Intro/>
          </Section>
          <Section className="section-greetings">
            <Invitation/>
          </Section>
          <Section className="section-location">
            <Location/>
          </Section>
          <Section className="section-gallery">
            <Gallery/>
          </Section>
          <Section className="section-contact">
            <Contact/>
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

module.exports =  connect(null, {})(Main);
