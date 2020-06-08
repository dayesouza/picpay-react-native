import React from 'react';
import { Container, Option, Title, Img } from './styles';
import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Get to know our sales',
    bgColor: '#172c4a'
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Buy from locals',
    bgColor: '#6a0159'
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Send money to your friends',
    bgColor: '#4139c8'
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pay your bills from your home',
    bgColor: '#00ab4b'
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Receive cashback',
    bgColor: '#ba2f76'
  }
]

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option bgColor={item.bgColor} key={item.key}>
          <Title> {item.title} </Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}