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

// Import images
import createTheme from 'spectacle/lib/themes/default';
import dl from './images/dl-logo.svg';
import exante from './images/exante.jpg';
import pleeco from './images/pleeco-logo-open.svg';
import split from './images/split.svg';
import levels from './images/levels.svg';
import eap from './images/eap.gif';
import me from './images/me.jpg';
import skeletons from './images/skeletons.jpg';
import paei from './images/paei.jpg';
import bigFive from './images/big-five.png';
import anxietyTech from './images/anxiety-tech.png';
import nikita from './images/nikita.png';
import annas from './images/annas.png';
import talks from './images/talks.png';
import korol from './images/korol.png';
import kraynov from './images/kraynov.jpg';
import logo404 from './images/404.gif';
import schulman from './images/schulman.jpg';
import petranovskaya from './images/petranovskaya.jpg';
import imja from './images/imja.jpg';
import perls from './images/perls.jpg';
import zicer from './images/zicer.jpg';
import morton from './images/morton.jpg';
import razobralis from './images/razobralis.jpg';
import burnout from './images/burnout.jpg';
import depra from './images/depra.jpg';
import aaa from './images/aaa.png';
import roaches from './images/roaches.jpg';
import good from './images/good.jpg';
import life from './images/life.gif';
import deadline from './images/deadline.jpg';
import shurik from './images/shurik.jpg';
import diploma from './images/diploma.jpg';
import mom from './images/mom.jpg';
import money from './images/money.jpg';
import shark from './images/shark.jpg';

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
    secondary: '#211000',
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
  'Вдохновение',
  'Гигиена',
  'Специфика',
  'Ликбез',
  'Заблуждения',
];

const plan = (index) => (
  <Slide bgColor="primary" textColor="tertiary" id={`part-${index + 1}`}>
    <LText>
      &nbsp;
    </LText>
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
        <Slide bgColor="secondary" bgImage={logo404} bgRepeat="no-repeat" bgSize="50%" bgPosition="bottom right">
          <LText>&nbsp;</LText>
          <LHeading size={1} textColor="primary">
            Психология
          </LHeading>
          <LHeading size={2} textColor="primary">
            для айтишников
          </LHeading>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LText textColor="tertiary">
            Дима Семьюшкин
          </LText>
          <LText textColor="primary">
            октябрь 2018, 404 Fest
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
            <p>Я 11 лет занимаюсь программированием и последние 5 лет моей — в этих логотипах. Год в Exante, три в Лаборатории данных и последний год — в Pleeco. Веб-разработка, визуализация данных, вот это всё.</p>
            <p>Для нашего сегодяншнего разговора самое важное — три года в Лаборатории. Благодаря директору — Тане Бибиковой — у меня была возможность работать и учиться в питерском институте гештальта.</p>
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
            <p>Три года — полная программа обучения, я научился психотерапии в гештальт-подходе.</p>
            <p>Для оценки масштаба: 200 часов групповой терапии, 400 часов теории и практики, от 20 часов личной терапии. Плюс супервизия — я буду сегодня ещё про это говорить — работа под наблюдением опытного специалиста.</p>
            <p>Это не единственный мой опыт в психологии. Я учился, читал книги, посещал тренинги, учился их вести, придумывал и вёл свои.</p>
            <p>Я не планирую делать какой-то центральный фокус на гештальт-терапии, скорее поговорю о тех моментах когда она быть полезной.</p>
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
            <p>Я начну с дисклеймера, расскажу об ограничениях выступления</p>
            <p>Я буду по большому счёту рассказывать про стресс связанный с работой, в чём его спефицика у айтишников и что с ним можно делать.</p>
            <p>Я буду субъективен и самокритичен, я рассказываю опираясь на собственный опыт и образование.</p>
            <p>Мой рассказ — затравка. Я надеюсь что он послужит поводом другим говорить о том же.</p>
            <p>Я буду упоминать имена людей и давать ссылки на различные материалы и проекты. Ссылки в презентации, в конце покажу где скачать.</p>
          </Notes>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="secondary">
            Вдохновение →
          </LText>
          <LHeading size={4}>Истории депрессии и выгорания</LHeading>
          <LImage width="100%" src={nikita} />
          <SPAN />
          <Notes>
            <p>Большое впечатление на меня произвела история Никиты Прокопова, о том как он 5 лет провёл в депрессии. И удивился реакция в твиттере: народ принялся обсуждать, а на самом ли деле это депрессия или нет и т.п.</p>
            <p>Ссылка: https://tonsky.livejournal.com/317265.html</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Вдохновение →
          </LText>
          <LHeading size={4}>Истории депрессии и выгорания</LHeading>
          <LImage width="100%" src={annas} />
          <SPAN />
          <Notes>
            <p>История Ани похожа. Она работала в Злых Марсианах, и это интересный пример того чем может обернуться «работа мечты»</p>
            <p>Ссылка: https://askd.livejournal.com/127949.html</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Вдохновение →
          </LText>
          <LHeading size={4}>Выступления о выгорании</LHeading>
          <LImage width="100%" src={talks} />
          <SPAN />
          <Notes>
            <p>Саша Орлов из Стратоплана и Илья Якямсев уже рассказали про выгорание, если ещё не смотрели — советую.</p>
            <p>Ссылки:</p>
            <p>https://youtu.be/K6oZuB8_dU8</p>
            <p>https://youtu.be/G5_pR0GLQmE</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Вдохновение →
          </LText>
          <LHeading size={3}>Anxiety tech</LHeading>
          <Image width="100%" src={anxietyTech} />
          <SPAN />
          <Notes>
            <p>Конференция AnxietyTech по сути посвящена теме моего доклада — о психическом здоровье для айтишников, записи есть на ютубе.</p>
            <p>Ссылка: https://www.anxietytech.com/</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Вдохновение →
          </LText>
          <LHeading size={3}>Сергей Король</LHeading>
          <LImage width="80%" src={korol} />
          <SPAN />
          <Notes>
            <p>Ссылка: http://sergeykorol.ru/blog/therapy/</p>
          </Notes>
        </Slide>
        {plan(planStep++)}
        <Slide bgColor="black" bgImage={good} bgSize="contain" bgRepeat="no-repeat">
          <Notes>
            <p>Я начну разговор с темы стресса.</p>
            <p>Это неотъемлемая часть нашей жизни, ничего фатального в ней нет.</p>
            <p>Однако уровень стресса в жизни не постоянен, есть события которые его ↑↓ — смена работы или роли, изменения в личной жизни и так далее.</p>
            <p>Есть некоторые вещи, которые нарушаются в нашей жизни когда стресса становится больше: сон, питание, отдых, физическая активность, медитативные практики.</p>
            <p>Важно понимать свои нормы в этих вещах и замечать, когда они нарушаются.</p>
            <p>Если у вас был период напряга и на его фоне пропал сон, аппетит — обратите на это внимание, дайте себе восстановиться обратно.</p>
          </Notes>
        </Slide>
        <Slide bgColor="black" bgImage={shark} bgSize="contain" bgRepeat="no-repeat">
          <Notes>
            <p>Как иллюстрация того, на что провоцирует стресс.</p>
          </Notes>
        </Slide>
        <Slide bgColor="black" bgImage={imja} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="primary" bgColor="black">Информационное окружение →</LLText>
          <LLHeading size={2} textColor="primary" bgColor="black">Адриана</LLHeading>
          <LLHeading size={2} textColor="primary" bgColor="black">Имж</LLHeading>
          <SPAN />
          <Notes>
            <p>Хорошей идеей</p>
          </Notes>
        </Slide>
        <Slide bgColor="black" bgImage={morton} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="primary" bgColor="black">Информационное окружение →</LLText>
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
          <br />
          <br />
          <LLHeading size={2} textColor="primary" bgColor="black">Kati Morton</LLHeading>
          <SPAN />
        </Slide>
        <Slide bgColor="primary" bgImage={petranovskaya} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="primary" bgColor="black">Информационное окружение →</LLText>
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
          <LLHeading size={2} textColor="primary" bgColor="black">Людмила</LLHeading>
          <LLHeading size={2} textColor="primary" bgColor="black">Петрановская</LLHeading>
          <SPAN />
        </Slide>
        <Slide bgColor="primary" bgImage={zicer} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="primary" bgColor="black">Информационное окружение →</LLText>
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
          <br />
          <br />
          <LLHeading size={2} textColor="primary" bgColor="black">Дима Зицер</LLHeading>
          <SPAN />
        </Slide>
        <Slide bgColor="primary" bgImage={schulman} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="primary" bgColor="black">Информационное окружение →</LLText>
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
          <LLHeading size={2} textColor="primary" bgColor="black">Екатерина</LLHeading>
          <LLHeading size={2} textColor="primary" bgColor="black">Шульман</LLHeading>
          <SPAN />
        </Slide>
        <Slide bgImage={depra} bgSize="contain" bgRepeat="no-repeat" >
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
          <LLText textColor="secondary" bgColor="primary">
            Гигиена →
          </LLText>
          <LLHeading size={2} bgColor="primary">Депрессия</LLHeading>
          <SPAN />
          <Notes>
            <p>Депрессия — описанное в МКБ состояние.</p>
            <p>2 недели сниженного настроения, трудность концентрироваться, ощущение бессмысленности, неуместной вины, безнадёги, повторяющиеся мысли о смерти, изменения аппетита и сна, беспорядочные или замедленные мысли и движения, сниженная энергия и усталость.</p>
            <p></p>
          </Notes>
        </Slide>
        <Slide bgImage={burnout} bgSize="contain" bgRepeat="no-repeat">
          <LLText bgColor="primary" textColor="secondary">
            Гигиена →
          </LLText>
          <LLHeading bgColor="primary" size={3}>Выгорание</LLHeading>
          <br />
          <SPAN />
          <Notes>
            <p>Давайте посмотрим на одно из состояний, вызывающих порядочно резонанса в соцсетях — выгорание</p>
            <p>Симптомы — эмоциональное опустошение, деперсонализация, отсутствие ощущения удовлетворения от работы.</p>
            <p>Для меня основная характеристика выгорания это несопоставимость стресса и вознаграждения.</p>
            <p>Собственно, направления для работы тут два: снижаем стресс, ищем вознаграждения.</p>
          </Notes>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="secondary">
            Специфика →
          </LText>
          <LHeading size={3}>Опрос StackOverflow</LHeading>
          <br />
          <CustomList>
            <ListItem>93% — мужчины;</ListItem>
            <ListItem>75% — до 35 лет;</ListItem>
            <ListItem>11,5% — сообщают о РЛ;</ListItem>
            <ListItem>20% — жителей США имеют депрессию и/или тревогу.</ListItem>
          </CustomList>
          <br />
          <RText textColor="secondary">Stack Overflow Developer survey, 2018</RText>
          <RText textColor="secondary">insights.stackoverflow.com/survey/2018</RText>
          <SPAN />
        </Slide>
        <Slide bgImage={mom} bgSize="75%" bgRepeat="no-repeat">
          <SPAN />
        </Slide>
        <Slide bgImage={life} bgSize="contain" bgRepeat="no-repeat" bgPosition="80%">
          <LLText bgColor="primary" textColor="secondary">
            Специфика →
          </LLText>
          <LLHeading bgColor="primary" size={3}>Мышление</LLHeading>
          <SPAN />
          <Notes>
            <p>Айтишники — яркий пример людей, работающих с абстракциями.</p>
            <p>По сути, самая близкая к тому же программированию гуманитарная профессия — лингвист. Мы постоянно держим в голове сопоставления реального мира и абстрактного языка программирования, архитектуры системы и т.п.</p>
            <p>Айтишников иногда описывают как безэмоциональных, но мне кажется тут есть простое недопонимание. Айтишники эмоциональны, просто их эмоции направлены на то, чем они занимаются.</p>
          </Notes>
        </Slide>
        <Slide bgImage={deadline} bgSize="contain" bgRepeat="no-repeat" bgPosition="80%">
          <br />
          <LLText bgColor="primary" textColor="secondary">
            Специфика →
          </LLText>
          <LLHeading bgColor="primary" size={3}>Культура</LLHeading>
          <SPAN />
          <Notes>
            <p>По моим наблюдениям в айти не принято задумываться о своём здоровье.</p>
            <p>Из-за этого </p>
          </Notes>
        </Slide>
        <Slide bgImage={money} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="secondary" bgColor="primary">
            Специфика →
          </LLText>
          <LLHeading bgColor="primary" size={2}>Зарплата</LLHeading>
          <br />
          <Notes>
            <p>Хорошие зарплаты дают возможности:</p>
            <p>качественно отдыхать;</p>
            <p>учиться;</p>
            <p>лечиться;</p>
            <p>делегировать рутину;</p>
            <p>выстраивать «лайфстайл».</p>
            <p>Есть и другие бонусы айти —</p>
            <p>возможен гибкий график;</p>
            <p>возможна удалённая работа;</p>
            <p>возможен быстрый карьерный рост;</p>
            <p>большой рынок труда;</p>
            <p>«непыльная» работа;</p>
            <p>привычка учиться.</p>
          </Notes>
          <SPAN />
        </Slide>
        <Slide bgColor="secondary" bgImage={kraynov} bgSize="contain" bgRepeat="no-repeat">
          <LText>
            &nbsp;
          </LText>
          <Appear>
            <LLHeading bgColor="primary" size={2}>Макс Крайнов</LLHeading>
          </Appear>
          <SPAN />
          <Notes>
            <p>Максим рассказывал в блоге, как объяснял это понятие сыну:</p>
            <p>— Тебе нравится сегодняшний день? Да? Лайфстайл — это возможность его повторить тогда, когда тебе это удобно (или хочется).</p>
          </Notes>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={2}>
            Специалисты
          </LHeading>
          <br />
          <br />
          <br />
          <Text fit caps textColor="tertiary">
            <span>Психолог</span>
            <S type="" textColor="primary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</S>
            <span>Психиатр</span>
          </Text>
          <br />
          <br />
          <br />
          <Text fit caps textColor="tertiary">
            <S type="" textColor="primary">&nbsp;&nbsp;&nbsp;&nbsp;</S>
            <span>Психотерапевт</span>
            <S type="" textColor="primary">&nbsp;&nbsp;&nbsp;&nbsp;</S>
          </Text>
          <SPAN />
          <Notes>
            <p>Как и другие области знания, психология сильно развилась за последний век. К сожалению, популяризация не поспевает.</p>
            <p>Самым важным провалом мне кажется непонимание различия профессий. Оно не сложное, но там есть нюансы.</p>
            <p>Представьте, вы бы боялись вообще всех врачей, ведь слышали когда-то что врачи режут людей. Такое происходит и с психологическими профессиями.</p>
            <p>Я расскажу вот про эти три, если вы будете различать их — этого по большей части достаточно.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={2}>
            Психиатр
          </LHeading>
          <br />
          <Image width="100%" src={shurik} />
          <SPAN />
          <Notes>
            <p>Психиатр — врач. 8 лет учёбы — и вы тоже можете таким стать.</p>
            <p>Психиатр может стать психотерапевтом, пройдя обучение.</p>
            <p>Этот сценарий в России — единственный формально правильный. Официально называть себя психотерапевтом сейчас может только врач-психотерапевт.</p>
            <p>Поэтому я, например, психотерапевтом себя не называю.</p>
            <p>Тем не менее, у этого сценария есть подводные камни.</p>
            <p>Врачи часто получают психотерапевтическую квалификацию «для галочки», имея возможность заработать на этом.</p>
            <p>Врачу-психиатру, решившему стать психотерапевтом будет труднее чем психологу: этика психиатра и психотерапевта сильно отличаются, может быть трудно переключать контексты.</p>
            <p>Кроме того, врач-психиатр может иметь взгляды на спорные темы не совместимые с вашими. Например, может рассматривать ЛГБТ как психическую проблему а не особенность.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={2}>
            Психолог
          </LHeading>
          <Image width="100%" src={diploma} />
          <SPAN />
          <Notes>
            <p>Психолог — человек с высшим психологическим образованием.</p>
            <p>Он может исполнять разные роли, часть из них перечислена здесь.</p>
            <p>Обратите внимание, «психотерапии» здесь нет. Психолог не лечит, он работает со здоровыми людьми. Однако, психологи часто идут учиться на психотерпевтов.</p>
            <p>Такую связку навыков я считаю оптимальной, знаю ребят и девушек с таким образованием и такое сочетание хорошо дополняет друг друга.</p>
            <p>Кроме того, даже если специалист молодой, такая связка позволяет чувствовать себя уверенно, а это довольно важно.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={2}>
            Психотерапевт
          </LHeading>
          <br />
          <Image width="100%" src={roaches} />
          <SPAN />
          <Notes>
            <p>Помимо того, что уже сказано про психотерапевтов, подведу некоторый итог.</p>
            <p>Психотерапия — отдельный вид деятельности.</p>
            <p>В Европе с 1990 действует «страсбургская декларация о психотерапии», описывающая психотерапию как отдельную профессию, требующую практической и теоретической подготовки.</p>
            <p>В России сейчас это по сути врачебная специальность, однако существует законопроект, который должен открыть возможность становиться психотерапевтами представителям других профессий, например соцработникам.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={4}>Психотерапевтические подходы</LHeading>
          <br />
          <LText>Психоанализ</LText>
          <LText>Трансактный анализ</LText>
          <LText>Когнитивно-поведенческая терапия</LText>
          <LText>Семейная терапия</LText>
          <LText>Экзистенциальная терапия</LText>
          <LText>Гештальт-терапия</LText>
          <LText>EMDR</LText>
          <LText>Психодрама</LText>
          <Notes>
            <p>Здесь — далеко не полный перечень психотерапевтических подходов, появившихся в 20 веке. Некоторые из них между собой похожи. Изучать их все жизни не хватит.</p>
            <p>На самом деле среди подходов часто встречаются родственные.</p>
            <p>Почти любой вид терапии так или иначе наследует психоанализу, использует часть его понятий и инструментов</p>
            <p>А семейная терапия, например, может по сути быть обычной терапией в одном из подходов, адаптированном для работы с группой людей.</p>
          </Notes>
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={4}>Психотерапевтические подходы</LHeading>
          <br />
          <LText>Психоанализ</LText>
          <LText textColor="quaternary">Трансактный анализ</LText>
          <LText>Когнитивно-поведенческая терапия</LText>
          <LText textColor="quaternary">Семейная терапия</LText>
          <LText>Экзистенциальная терапия</LText>
          <LText>Гештальт-терапия</LText>
          <LText textColor="quaternary">EMDR</LText>
          <LText textColor="quaternary">Психодрама</LText>
          <Notes>
            <p>Я пару слов скажу вот про эти подходы. Я сам гештальтист, поэтому начну с других.</p>
            <p>Психоанализ за век заметно изменился. Его адаптировали к групповой работе, многие аналитики работают безо всяких кушеток, с прямым контактом с клиентом, принимают куда более активное участие в работе. Появилась целая группа вариаций, их иногда ещё называют психодинамическими терапиями. Эрик Берн с его транзактным анализом.</p>
            <p>Большую популярность сыскала когнитивно-поведенческая терапия, опирающаяся на научный подход и имеющая доказанную эффективность. Слышал о том, что в некоторых странах Европы по страховке могут назначить именно КПТ, в том числе при психосоматике.</p>
            <p>И, наконец, экзистенциальный подход и гештальт. Если вы читали книги Ирвина Ялома — вы представляете, как выглядит экзистенциальная психотерапия. Гештальт со стороны на неё в значительной степени похож. Такая терапия менее утилитарна, она призывает клиента работать с тем что важно здесь и сейчас, используя разговор и различные эксперименты, из самых известных — пустой стул.</p>
          </Notes>
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={4}>Европейская ассоциация психотерапии</LHeading>
          <br />
          <Image height="100%" src={eap} />
          <Text>europsyche.org/ecp</Text>
          <SPAN />
          <Notes>
            <p>Организация, которая занимается вопросами психотерапии в Европе — европейская ассоциация психотерапии, ЕАП.</p>
            <p>На сайте ассоциации есть список из 20 признаваемых ей подходов, если вам интересно.</p>
            <p>А эта ссылка ведёт на поисковик по терапевтам. В России всего 250 терапевтов, имеющих сертификат EAP.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Ликбез →
          </LText>
          <LHeading size={2}>Поисковики</LHeading>
          <br />
          <LHeading size={1}>B17.RU</LHeading>
          <LHeading size={1}>PSYALTER.RU</LHeading>
          <LHeading size={1}>BREEZE.LIVE</LHeading>
          <LHeading size={1}>YASNO.LIVE</LHeading>
          <br />
          <SPAN />
          <Notes>
          </Notes>
        </Slide>
        {plan(planStep++)}
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
          <Notes>
            <p>Одна из самых частых, по моему наблюдению, причин опасаться психологии — боязнь обнаружить себя психом. Ведь если я не в норме — я псих, правильно?</p>
            <p>Разумеется, на самом деле всё сложнее.</p>
          </Notes>
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
          <Notes>
            <p>Вот такая шкала используется в МКБ-11, стандарте вышедшем в 2018 году.</p>
            <p>Для сравнения, десятая версия вышла в 1996. В 11 версии трансгендерность перестала считаться расстройством, а зависимость от видеоигр — добавилась.</p>
            <p>В России МКБ используется не всегда, но в мире этот стандарт популярен.</p>
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit caps textColor="primary">меня поставят</Text>
          <br />
          <Text fit caps textColor="tertiary">на учёт!</Text>
          <Appear>
            <SecondaryCT textColor="red" caps>НЕ-А</SecondaryCT>
          </Appear>
          <Notes>
            <p>Это опасение устарело на четверть века. В России «учёта» не существует.</p>
            <p>И насильно вас в больницу класть не будут, если вы не угрожаете окружающим.</p>
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit caps textColor="primary">Он посмотрит на меня</Text>
          <br />
          <Appear>
            <Text fit caps textColor="tertiary">И всё поймёт</Text>
          </Appear>
          <Appear>
            <SecondaryCT textColor="red" caps>НЕТ</SecondaryCT>
          </Appear>
          <Notes>
            <p>Тоже очень популярная штука. Качественная диагностика требует времени, этим всё сказано.</p>
            <p>Опытный специалист может различать знакомые ему наборы черт и строить гипотезы, но их важно проверять.</p>
            <p>Разумеется, если человек работает, например, в ПНД и знает что к нему без серьёзных проблем не приходят — задача несколько упрощается, в диагностике поможет сам пациент.</p>
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit caps textColor="primary">У этого психотерапевта</Text>
          <br />
          <Text fit caps textColor="tertiary">есть свой психотерапевт</Text>
          <br />
          <Appear>
            <Text fit caps textColor="green">как он может мне помочь?</Text>
          </Appear>
          <Notes>
            <p>Тоже очень популярная штука. Качественная диагностика требует времени, этим всё сказано.</p>
            <p>Опытный специалист может различать знакомые ему наборы черт и строить гипотезы, но их важно проверять.</p>
            <p>Разумеется, если человек работает, например, в ПНД и знает что к нему без серьёзных проблем не приходят — задача несколько упрощается, в диагностике поможет сам пациент.</p>
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit caps textColor="primary">Он не поможет мне, ведь он</Text>
          <br />
          <Text fit caps textColor="tertiary">
            <Appear><span>Мужчина</span></Appear>
            <Appear><S type="" textColor="green">Женщина</S></Appear>
          </Text>
          <br />
          <Text fit caps textColor="tertiary">
            <Appear><span>Психиатр</span></Appear>
            <Appear><S type="" textColor="green">Психолог</S></Appear>
            <Appear><span>Неуч</span></Appear>
          </Text>
          <br />
          <Text fit caps textColor="tertiary">
            <Appear><span>Молодой</span></Appear>
            <Appear><S type="" textColor="green">Старый</S></Appear>
            <Appear><span>Не в браке</span></Appear>
          </Text>
          <br />
          <Text fit caps textColor="tertiary">
            <Appear><span>Гештальтист</span></Appear>
            <Appear><S type="" textColor="green">EMDR-щик</S></Appear>
            <Appear><span>КБТ-шник</span></Appear>
            <Appear><S type="" textColor="green">Аналитик</S></Appear>
          </Text>
          <Appear>
            <SecondaryCT textColor="red" caps>УВЫ</SecondaryCT>
          </Appear>
          <Notes>
            <p>Увы. Психотерапевт не поможет, если вы заранее решили что он не поможет. Результат работы сильно зависит от вашего участия и лучшее что вы можете сделать для качества работы — формулировать свою цель и корректировать её по ходу работы.</p>
            <p>И если вы остались недовольны первым сеансом, но уже договорились на второй — начните его с критики, объясните чем не довольны. Это может помочь и вам и терапевту.</p>
            <p>Если вы понимаете, что вам не нравится тот или иной подход, не нравится работать с терапевтом своего или противоположного пола — просто учитывайте это при выборе специалиста.</p>
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit caps textColor="primary">Я найду детскую травму</Text>
          <br />
          <Appear><Text fit caps textColor="tertiary">Посвящу ей целый час</Text></Appear>
          <br />
          <Appear><Text fit caps textColor="green">И жизнь наладится</Text></Appear>
          <Appear>
            <SecondaryCT textColor="red" caps>НЕ-А</SecondaryCT>
          </Appear>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Заблуждения →
          </LText>
          <LHeading size={3}>Работа с травмой</LHeading>
          <br />
          <Image width="100%" src={skeletons} />
          <SPAN />
        </Slide>
        <Slide bgColor="secondary">
          <Text fit caps textColor="primary">Психотерапевт всегда</Text>
          <br />
          <Text fit caps textColor="tertiary">
            <Appear><span>доволен жизнью</span></Appear>
            <Appear><S type="" textColor="green">счастлив</S></Appear>
            <Appear><span>успешен</span></Appear>
          </Text>
          <br />
          <Text fit caps textColor="tertiary">
            <Appear><span>в браке</span></Appear>
            <Appear><S type="" textColor="green">в хорошем настроении</S></Appear>
          </Text>
          <Appear>
            <SecondaryCT textColor="red" caps>УВЫ</SecondaryCT>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit caps textColor="primary">Я узнаю свой тип</Text>
          <br />
          <Appear>
            <Text fit caps textColor="tertiary">И всё пойму</Text>
          </Appear>
          <Appear>
            <SecondaryCT textColor="red" caps>НЕТ</SecondaryCT>
          </Appear>
          <Notes>
            <p>Вариант для интересующихся психологией. Натыкаемся на систему тестирования, изучаем, восторгаемся, «находим» себя, тестируем окружающих — красота!</p>
            <p>Проблема начинается когда мы пытаемся принимать какие-то решения на основе типирований.</p>
            <p>Причина — большинство таких вещей основываются на совершенно искуственных моделях, не подтверждённых научными исследованиями.</p>
            <p>Важно понимать, пытаясь типировать людей, делить их на чёткие группы мы игнорируем их различия и делаем много допущений.</p>
            <p>Мне кажется, чаще всего причиной служит желание создать иллюзию понятности, предсказуемости, управляемости.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Заблуждения →
          </LText>
          <LHeading size={4}>Типы руководителей</LHeading>
          <LHeading size={5}>по Адизесу</LHeading>
          <Image width="50%" src={paei} />
          <SPAN />
          <Notes>
            <p>В качестве альтернативы — модель Адизеса.</p>
            <p>Мне она кажется корректнее, уже хотя бы потому что не претендует на оценку личность.</p>
            <p>В ней оценивается наличие или отсутствие разных управленческих навыков.</p>
            <p>Такая модель, во-первых, предполагает возможность развития.</p>
            <p>Во-вторых она не исключительная, развитие одной функции не исключает развития других.</p>
            <p>И в-третьих не требует крайностей, каждая из её функций может быть развита в той или иной степени.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Заблуждения →
          </LText>
          <LHeading size={4}>Большая пятёрка</LHeading>
          <LImage width="60%" src={bigFive} />
          <SPAN />
          <Notes>
            <p>Ещё одна модель — так называемая «большая пятёрка» или OCEAN, по первым буквам.</p>
            <p>Здесь 5 шкал, у каждой есть два края, есть тесты и опросники позволяющие определить положение на них.</p>
            <p>Эта модель тоже не даёт «типы», самый простой способ её использовать — оценивать сходство.</p>
          </Notes>
        </Slide>
        <Slide bgColor="red" id="fin">
          <Text caps fit textColor="primary">Всё</Text>
        </Slide>
        <Slide>
          <LText>
             &nbsp;
          </LText>
          <LHeading size={3}>О чём не рассказал</LHeading>
          <br />
          <CustomList>
            <ListItem>Фрейд — сексист?</ListItem>
            <ListItem>Экзистенциальная терапия даёт гарантии, но они вам не понравятся.</ListItem>
            <ListItem>Как мужчины и женщины рисуют велосипед.</ListItem>
            <ListItem>Почему терапия нужна всем кто живёт в России?</ListItem>
            <ListItem>Почему друзья не заменяют терапию?</ListItem>
          </CustomList>
          <SPAN />
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
