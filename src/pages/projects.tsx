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
      <Info text={'NO.2.'} />

      <img src="https://media4.giphy.com/media/3ornk57KwDXf81rjWM/giphy.gif?cid=ecf05e477meg6e7wtbbya9namgp4unrjauybc57cz52sl6gi&rid=giphy.gif&ct=g" />
    </Content>
    <p> Pozdrawiam Jacka! A i jeszcze jedno, które kolano?</p>
  </Main>
);

export default About;
