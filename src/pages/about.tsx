import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Info = ({ text }: { text: string }) => (
  <p className="text-5xl text-blue-500 text-center ">{text}</p>
);

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <img src="https://media0.giphy.com/media/Q3nPhaJSwyPJP2LNVU/giphy.gif?cid=ecf05e476h0iq2p6y2skw8lnr0236xs0iu5l62cmr0uez7r1&rid=giphy.gif&ct=g" />

      <Info text={'Hi there.'} />
    </Content>
    <p> Pozdrawiam Jacka! A i jeszcze jedno, które kolano?</p>
  </Main>
);

export default About;
