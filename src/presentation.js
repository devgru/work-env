// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Layout, Fill,
  S,
  Slide,
  Text,
  Image,
  Appear,
  Notes,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Import images
import dl from './images/dl-logo.svg';
import exante from './images/exante.jpg';
import me from './images/me.jpg';
import perls from './images/perls.jpg';
import pleeco from './images/pleeco-logo-open.svg';
import razobralis from './images/razobralis.jpg';
import dorofeev from './images/dorofeev.jpg';
import eightHour from './images/8hour.jpg';
import trees from './images/trees.jpg';
import attention from './images/attention.png';
import ropes from './images/ropes.png';
import fest404 from './images/404.png';
import dorofeevList from './images/dorofeev-list.png';
import cycles from './images/cycles.png';
import jenga from './images/jenga.png';

const LHeading = styled(Heading)`
  text-align: left;
`;
const LLHeading = styled(Heading)`
  text-align: left;
  float: left;
  clear: both;
  margin: 0 -10px;
  padding: 10px;
`;
const RHeading = styled(Heading)`
  text-align: right;
`;
const LText = styled(Text)`
  text-align: left;
`;
const LLText = styled(Text)`
  text-align: left;
  float: left;
  clear: both;
  margin: -10px -10px 0;
  padding: 10px;
`;
const RText = styled(Text)`
  text-align: right;
`;

const SPAN = styled(Text)`
  height: 10000px;
`;

const LImage = styled(Image)`
  margin-left: 0;
  margin-right: 0;
  display: inline-block;
  float: left;
`;

const Image30 = styled(Image)`
  margin-left: 0;
  margin-right: 0;
  display: inline-block;
  float: left;
  transform: rotate(-15deg);
`;

const RImage = styled(Image)`
  margin-left: 0;
  margin-right: 0;
  display: inline-block;
  float: right;
`;

const ChushText = styled(Text)`
  transform: rotate(-45deg);
  font-size: 8em;
  position: absolute;
  width: 100%;
  margin-left: -50%;
  margin-top: -.5em;
  text-align: center;
  top: 50%;
  left: 50%;
  font-weight: bold;
  text-shadow: 0 0 15px #FFF, 0 0 30px #FFF, 0 0 45px #FFF, 0 0 60px #FFF;
`;

const SecondaryCT = styled(ChushText)`
  text-shadow: 0 0 15px #211000, 0 0 30px #211000, 0 0 45px #211000, 0 0 60px #211000;
`;
const CustomList = styled(List)`
  margin-left: 1.6em;
  text-align: left;
  list-style-type: none;
  margin-top: 0;
  
  li {
    margin-bottom: 0.25em;
  }

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
    primary: '#FFF',
    secondary: '#010035',
    tertiary: '#5369BC',
    quaternary: '#CECECE',
    green: '#9d9',
    red: '#d85842',
    black: '#000'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const planList = [
  'О себе',
  'Дисклеймер',
  'Стрессы',
  'Вознаграждения',
  'Решения',
];

const plan = (index) => (
  <Slide bgColor="primary" textColor="tertiary" id={`part-${index + 1}`}>
    <LHeading size={1}>
      Ψ → IT
    </LHeading>
    <br />
    <CustomList>
      {planList.map((item, itemIndex) =>
        <ListItem key={itemIndex} textColor={
          itemIndex < index ? 'quaternary' : itemIndex === index ? 'tertiary' : 'secondary'
        }>{item}</ListItem>)}
    </CustomList>
    <SPAN />
  </Slide>
);

export default class Presentation extends React.Component {
  render() {
    let planStep = 0;

    return (
      <Deck
        contentWidth={1000}
        contentHeight={750}
        transition={[]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary">
          <LText>&nbsp;</LText>
          <LHeading size={1} textColor="primary">
            Психология
          </LHeading>
          <LHeading size={2} textColor="primary">
            для айтишников
          </LHeading>
          <LText textColor="primary">
            про людей на работе
          </LText>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LText textColor="green">
            Дима Семьюшкин
          </LText>
          <LText textColor="primary">
            декабрь 2018, spb.frontend()
          </LText>
          <Appear>
            <ChushText textColor="red" caps>Ψ→IT</ChushText>
          </Appear>
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="secondary">О себе →</LText>
          <LHeading size={2}>Веб-разработчик</LHeading>
          <br />
          <Image width="30%" src={exante} />
          <Image width="30%" src={dl} />
          <Image width="30%" src={pleeco} />
          <SPAN />
          <Notes>
            <p>Я 11 лет занимаюсь программированием, последние 5 лет моей карьеры — в этих логотипах. Год в Exante, три в Лаборатории данных и последний год — в Pleeco. Веб-разработка, визуализация данных, вот это всё.</p>
            <p>Для нашего сегодяншнего разговора самое важное — три года в Лаборатории. Благодаря компании и директору — Тане Бибиковой — у меня была возможность работать и...</p>
          </Notes>
        </Slide>
        <Slide bgColor="black" bgImage={perls} bgSize="contain" bgRepeat="no-repeat">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LLText bgColor="primary" textColor="secondary">О себе →</LLText>
          <LLHeading bgColor="primary" size={2}>...и гештальтист</LLHeading>
          <SPAN />
          <Notes>
            <p>Учиться в питерском институте гештальта!</p>
            <p>Три года — полная программа обучения, я научился психотерапии в гештальт-подходе.</p>
            <p>Для оценки масштаба: 200 часов групповой терапии, 400 часов теории и практики, от 20 часов личной терапии. Плюс супервизия — я буду сегодня ещё про это говорить — работа под наблюдением опытного специалиста.</p>
            <p>Это не единственный мой опыт в психологии. Я учился, читал книги, посещал тренинги, учился их вести, придумывал и вёл свои.</p>
            <p>Я не планирую делать какой-то центральный фокус на гештальт-терапии, но в некоторых местах рассказа буду опираться на гештальт-подход.</p>
          </Notes>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText>
            &nbsp;
          </LText>
          <LHeading size={2}>Дисклеймер</LHeading>
          <br />
          <Image width="70%" src={razobralis} />
          <SPAN />
          <Notes>
            <p>Я начну с дисклеймера, расскажу об Стрессых выступления</p>
            <p>Я буду по большому счёту рассказывать про стресс связанный с работой, в чём его спефицика у айтишников и что с ним можно делать.</p>
            <p>Я буду субъективен и самокритичен, я рассказываю опираясь на собственный опыт и образование, не претендую на полноту и объевтивность.</p>
            <p>Мой рассказ — затравка. Я надеюсь что он послужит поводом другим говорить о том же.</p>
            <p>Я буду упоминать имена людей и давать ссылки на различные материалы и проекты. Ссылки в презентации, в конце покажу где скачать.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText>
            Дисклеймер →
          </LText>
          <LHeading size={2}>В предыдущих сериях</LHeading>
          <Image30 width="100%" src={fest404} />
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText>
            Стрессы →
          </LText>
          <LHeading size={2}>Внимание</LHeading>
          <Image width="75%" src={attention} />
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Стрессы →
          </LText>
          <LHeading size={2}>Коммуникация</LHeading>
          <LImage width="75%" src={trees} />
          <SPAN />
        </Slide>
        <Slide bgImage={ropes} bgSize="contain" bgRepeat="no-repeat">
          <LLText bgColor="primary">
            Стрессы →
          </LLText>
          <LLHeading size={2} bgColor="primary">Сложность</LLHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Стрессы →
          </LText>
          <LHeading size={3}>Странные ожидания</LHeading>
          <br />
          <Image width="50%" src={eightHour} />
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText>
            Вознаграждения →
          </LText>
          <LHeading size={2}>Признание</LHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Вознаграждения →
          </LText>
          <LHeading size={2}>Доверие</LHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Вознаграждения →
          </LText>
          <LHeading size={3}>Право на ошибку</LHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Вознаграждения →
          </LText>
          <LHeading size={2}>Причастность</LHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Вознаграждения →
          </LText>
          <LHeading size={2}>Творчество</LHeading>
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText>
            Решения →
          </LText>
          <LHeading size={2}>Компас — это вы</LHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Решения →
          </LText>
          <LHeading size={2}>Называйте вещи своими именами</LHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Решения →
          </LText>
          <LHeading size={3}>Помните о Дженге</LHeading>
          <br />
          <Image width="50%" src={jenga} />
          <SPAN />
        </Slide>
        <Slide bgColor="black" bgImage={dorofeev} bgSize="contain" bgRepeat="no-repeat">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LLHeading size={2} textColor="primary" bgColor="black">Максим</LLHeading>
          <LLHeading size={2} textColor="primary" bgColor="black">Дорофеев</LLHeading>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Решения →
          </LText>
          <LHeading size={2}>Ищите циклы!</LHeading>
          <Image width="75%" src={cycles} />
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Решения →
          </LText>
          <LHeading size={2}>Смотрите</LHeading>
          <br />
          <LImage width="100%" src={dorofeevList} />
          <SPAN />
        </Slide>
        <Slide bgColor="red" id="fin">
          <Text caps fit textColor="primary">Всё</Text>
        </Slide>
        <Slide id="contact">
          <LText>
            &nbsp;
          </LText>
          <LHeading size={3}>Дима Семьюшкин</LHeading>
          <br />
          <Layout>
            <Fill>
              <LImage width="60%" src={me} />
            </Fill>
            <Fill>
              <LText>Пишите!</LText>
              <br />
              <LText>devg.ru</LText>
              <br />
              <LText>t.me/dima_devgru</LText>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
