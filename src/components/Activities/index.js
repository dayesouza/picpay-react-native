import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { 
  ScrollContainer, 
  Header, 
  Title, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <ScrollContainer>
      <Header>
        <Title>Activities</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>You </Bold> paid to <Bold>@anyone</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Username>Day</Username>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$18.00</Value>
            <Divider />
            <Feather name="lock" color="#fff" size={14}/>
            <Date>2 years ago</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14}
              color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={14}
              color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </ScrollContainer>
  );
}