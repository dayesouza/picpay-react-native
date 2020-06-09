import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import creditCard from '../../images/credit-card.png';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardTitle,
  CardDetails,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  TicketButton,
  TicketLabel,
  TicketContainer
} from './styles';
import { Switch } from 'react-native';

export default function WalletScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleBalance() {
    setIsVisible((prevState) => !prevState)
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState)
  }

  return (
    <Wrapper>
      <Header colors={
        useBalance 
        ? ['#52e78c', '#1ab563']
        : ['#d3d3d3','#868686']
        }>
        <HeaderContainer>
          <Title>Picpay's Balance</Title>

          <BalanceContainer>
            <Value>
              $ <Bold>{isVisible ? '0.00': '----'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleBalance}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Withdraw</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Add</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Use balance to pay
          </UseBalanceTitle>

        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        ></Switch>
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Payment Method
          </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Register your credit card</CardTitle>
              <CardInfo>
                Register your credit card to be able to pay even when you don`t have balance in your picpay
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Add credit card</AddLabel>
          </AddButton>

        </Card>

        <TicketContainer>
          <TicketButton>
            <MaterialCommunityIcons name="ticket" size={20} color="#0db060" />
            <TicketLabel>Use promo code</TicketLabel>
          </TicketButton>
        </TicketContainer>
      </PaymentMethods>
    </Wrapper>
  )
}