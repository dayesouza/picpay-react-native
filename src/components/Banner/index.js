import React from 'react';
import { Container, Details, Img, Title, Description } from './styles';

import img13 from '../../images/13.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Charge a friend</Title>
        <Description>
          Keep your partnership up to date, use PicPay to charge.
        </Description>
      </Details>
      <Img source={img13}/>
    </Container>
  );
}