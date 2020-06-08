import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, ScrollContainer } from './styles';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function HomeScreen() {
  return (
    <Wrapper>
      <ScrollContainer>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>My balance</BalanceTitle>
            <Balance>$0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </ScrollContainer>
    </Wrapper>

  );
}