// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  Notes,
} from 'spectacle';

// Import images
import createTheme from 'spectacle/lib/themes/default';
import pleecoLogo from './images/pleeco-logo-open.svg';
import dlLogo from './images/dl-logo.png';
import itp from './images/itp.png';
import split from './images/split.svg';
import levels from './images/levels.svg';
import newton from './images/newton.jpg';
import freud from './images/freud.jpg';

const LHeading = styled(Heading)`
  text-align: left;
`;
const RHeading = styled(Heading)`
  text-align: right;
`;
const LText = styled(Text)`
  text-align: left;
`;
const RText = styled(Text)`
  text-align: right;
`;
const ChushText = styled(Text)`
  transform: rotate(-45deg);
  font-size: 8em;
  position: absolute;
  text-align: center;
  top: 22%;
  left: 3%;
  font-weight: bold;
  text-shadow: 0 0 15px white, 0 0 30px white, 0 0 45px white, 0 0 60px white;
`;
const CustomList = styled(List)`
  margin-left: 1.6em;
  text-align: left;
  list-style-type: none;

  li:before {
    content: "–"; /* en dash */
    position: absolute;
    margin-left: -1.1em; 
  }
`;

// Import theme

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#5369BC',
    quaternary: '#CECECE',
    red: '#d85842',
    black: '#000'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const planList = [
  'Кто я?',
  'Кто они?',
  'Ликбез',
  'Специфика',
];

const plan = (index) => (
  <Slide bgColor="primary" textColor="tertiary" id={`part-${index + 1}`}>
    <LHeading size={1} textColor="secondary">
      Ψ → IT
    </LHeading>
    <CustomList>
      {planList.map((item, itemIndex) =>
        <ListItem key={itemIndex} textColor={
          itemIndex < index ? 'quaternary' : itemIndex === index ? 'tertiary' : 'secondary'
        }>{item}</ListItem>)}
    </CustomList>
  </Slide>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <LHeading size={1} textColor="secondary">
            Психология
          </LHeading>
          <LHeading size={2} textColor="secondary">
            для айтишников
          </LHeading>
          <br />
          <br />
          <LText textColor="tertiary" size={1}>
            Дима Семьюшкин
          </LText>
          <LText textColor="quaternary" size={1}>
            октябрь 2018, 404 Fest
          </LText>
        </Slide>
        {plan(0)}
        <Slide>
          <Image width="100%" src={pleecoLogo} />
        </Slide>
        <Slide>
          <Image width="100%" src={dlLogo} />
        </Slide>
        <Slide>
          <Image width="100%" src={itp} />
          <Notes>
            Форму T хорошо описывает valve handbook.
          </Notes>
        </Slide>
        {plan(1)}

        <Slide>
          <LHeading size={2}>
            Кто они?
          </LHeading>
          <br />
          <br />
          <CustomList>
            <ListItem>Психолог</ListItem>
            <ListItem>Психотерапевт</ListItem>
            <ListItem>Психиатр</ListItem>
          </CustomList>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Кто они? →
          </LText>
          <LHeading size={2}>
            Психолог
          </LHeading>
          <br />
          <br />
          <LText>
            Высшее психологическое образование
          </LText>
          <br />
          <LText>
            Может:
          </LText>
          <CustomList>
            <ListItem>консультировать;</ListItem>
            <ListItem>вести исследования;</ListItem>
            <ListItem>быть HR;</ListItem>
            <ListItem>создавать и вести тренинги;</ListItem>
            <ListItem>учить, преподавать, воспитывать.</ListItem>
          </CustomList>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Кто они? →
          </LText>
          <LHeading size={2}>
            Психиатр
          </LHeading>
          <br />
          <br />
          <LText>
            Врач
          </LText>
          <br />
          <LText>
            Может:
          </LText>
          <CustomList>
            <ListItem>ставить диагноз</ListItem>
            <ListItem>стать психотерапевтом</ListItem>
          </CustomList>
          <br />
          <br />
          <br />
          <br />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Кто они? →
          </LText>
          <LHeading size={2}>
            Психотерапевт
          </LHeading>
          <br />
          <br />
          <LText>
            ???
          </LText>
          <br />
          <LText>
            Может:
          </LText>
          <CustomList>
            <ListItem>заниматься психотерапией;</ListItem>
            <ListItem>вести психотерапевтические группы.</ListItem>
          </CustomList>
          <br />
          <br />
          <br />
          <br />
        </Slide>
        {plan(2)}
        <Slide bgImage={split}>
          <LHeading caps>Норм</LHeading>
          <br />
          <br />
          <Appear>
            <ChushText textColor="red" caps>Чушь!</ChushText>
          </Appear>
          <br />
          <br />
          <RHeading caps>Псих</RHeading>
        </Slide>
        <Slide bgImage={levels}>
          <Text>Отсутствие расстройств</Text>
          <br />
          <br />
          <Text>Акцентуации</Text>
          <br />
          <br />
          <Text textColor="primary">Расстройство личности</Text>
          <br />
          <br />
          <Text textColor="primary">Комплексное расстройство</Text>
          <br />
          <br />
          <Text textColor="primary">Тяжёлое расстройство</Text>
        </Slide>
        <Slide bgImage={levels}>
          <Text>Условно здоровый</Text>
          <br />
          <br />
          <Text>Невротик</Text>
          <br />
          <br />
          <Text textColor="primary">Пограничник</Text>
          <br />
          <br />
          <Text textColor="primary">Психотик</Text>
          <br />
          <br />
          <br />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={freud} fit />
        </Slide>
        <Slide bgColor="black">
          <Image src={newton} fit />
          <br />
          <br />
          <br />
          <br />
          <Appear>
            <ChushText textColor="red" caps>&nbsp;&nbsp;&nbsp;Нет</ChushText>
          </Appear>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
