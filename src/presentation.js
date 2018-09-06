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
  width: 100%;
  margin-left: -50%;
  margin-top: -.5em;
  text-align: center;
  top: 50%;
  left: 50%;
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
  'Прошлое',
  'Настоящее',
  'При чём тут вы?',
  'Специфика',
  'Будущее',
  'Гигиена',
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
            Эти формы используются для описания развития навыков.
            I — один развитый навык. Думаю, так не бывает.
            Форму T хорошо описывает valve handbook. Дополнительные навыки помогают в основном.
            Π — два навыка, развитые в сравнимой степени.

            Я учусь программированию с 8 лет, психологии — с 15.
          </Notes>
        </Slide>
        {plan(1)}
        <Slide bgColor="secondary">
          <Image src={freud} fit />
          <Notes>
            Это Фрейд. Именно его чаще всего вспоминают, когда говорят о психологии.
            С него начну рассказ и я. Фрейд многое дал психологии, его идеи дали мощный толчок клинической психологии и психиатрии. Сформулированный им подход к лечению — психоанализ — используется до сих пор.
            И до сих пор, если психотерапевт видит что клиенту трудно говорить о эмоциях — он предложит клиенту прилечь, зная что это поможет.
          </Notes>
        </Slide>
        <Slide bgColor="black" bgImage={newton} bgSize="contain" bgRepeat="no-repeat">
          <Appear>
            <ChushText textColor="red" caps>&nbsp;Нет</ChushText>
          </Appear>
          <Notes>
            <p>
              Однако, известность Фрейда играет злую шутку. Людям порой кажется что если бы не он — психологии бы не существовало.
            </p>
            <p>
              Или что он открыл истинную правду и только на его догмах психология и стоит. Или что он давно устарел и вся психология вместе с ним.
            </p>
            <p>
              Фрейд, конечно, не был пророком. Он не открыл истинную правду. Его методы не были научными. Многие предложенные им модели моделями и остаются, непроверенными и непроверяемыми. Есть даже подозрения что некоторые успешные кейсы он подделал.
            </p>
            <p>
              Фрейд был сексистом, и, похоже, сам это понимал. Психоанализ, теория психосексуального развития — во многом это показывают.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Прошлое →
          </LText>
          <LHeading size={2}>Наследие психоанализа</LHeading>
          <br />
          <br />
          <LText>Догматизм → Бихевиоризм и когнитивистика</LText>
          <LText>Герменевтика → Феноменология</LText>
          <LText>Утилитаризм → Экзистенциализм</LText>
          <Notes>
            <p>
              Значительная часть психоанализа — герменевтика, поиск смыслов и причин. Каково истинное значение того сна? Занимаясь толкованиями, важно помнить что всегда есть тот кто толкует и то, что обуславливает это толкование. Кто он? Каким языком он пользуется?
            </p>
            <p>Фрейдовский психоанализ догматичен и наполнен придуманными моделями. Это подтолкнуло многих психологов к научному подходу.</p>
            <p>Альтернатива герменевтике — феноменология. Её язык — язык феноменов. Говорим о том, что точно есть, здесь и сейчас.</p>
            <p>Фрейд утилитарен. Его подход — встреча больного и пациента. Те, кому это не нравится могут прибегнуть к экзистенциальным методам.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Прошлое →
          </LText>
          <LHeading size={4}>Психотерапевтические подходы</LHeading>
          <br />
          <LText>Психоанализ</LText>
          <LText>Трансактный анализ</LText>
          <LText>Когнитивно-поведенческая терапия</LText>
          <LText>Семейная терапия</LText>
          <LText>Гештальт-терапия</LText>
          <LText>Экзистенциальная терапия</LText>
          <LText>EMDR</LText>
          <LText>Психодрама</LText>
          <Notes>
            <p>Здесь — далеко не полный перечень психотерапевтических подходов, появившихся в 20 веке. Некоторые из них между собой похожи. Изучать их все жизни не хватит.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Прошлое →
          </LText>
          <LHeading size={4}>Психотерапевтические подходы</LHeading>
          <br />
          <LText>Психоанализ</LText>
          <LText textColor="quaternary">Трансактный анализ</LText>
          <LText>Когнитивно-поведенческая терапия</LText>
          <LText textColor="quaternary">Семейная терапия</LText>
          <LText>Гештальт-терапия</LText>
          <LText textColor="quaternary">Экзистенциальная терапия</LText>
          <LText textColor="quaternary">EMDR</LText>
          <LText textColor="quaternary">Психодрама</LText>
          <Notes>
            <p>Я пару слов скажу вот про эти подходы. Я сам гештальтист, поэтому начну с других.</p>
            <p>Психоанализ за век заметно изменился. Его адаптировали к групповой работе, многие аналитики работают безо всяких кушеток, с прямым контактом с клиентом, принимают куда более активное участие в работе. Появилась целая группа вариаций, их иногда ещё называют психодинамическими терапиями.</p>
            <p>Большую популярность сыскала когнитивно-поведенческая терапия, опирающаяся на научный подход и имеющая доказанную эффективность. Слышал о том, что в некоторых странах Европы по страховке могут назначить именно КПТ, в том числе при психосоматике.</p>
          </Notes>
        </Slide>
        {plan(2)}
        <Slide>
          <LText textColor="quaternary">
            Настоящее →
          </LText>
          <LHeading size={2}>
            Специалисты
          </LHeading>
          <br />
          <br />
          <CustomList>
            <ListItem>Психолог</ListItem>
            <ListItem>Психотерапевт</ListItem>
            <ListItem>Психиатр</ListItem>
          </CustomList>
          <Notes>
            Как и другие области знания, психология сильно развилась за последний век. К сожалению, популяризация не поспевает.
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Настоящее →
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
            Настоящее →
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
            <ListItem>лечить психические расстройства</ListItem>
            <ListItem>стать психотерапевтом</ListItem>
          </CustomList>
          <br />
          <br />
          <br />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Настоящее →
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
        </Slide>
        {plan(3)}
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
        <Slide>
          <LHeading size={2}>Итого</LHeading>
          <CustomList>
            <ListItem>важно отличать психолога от психотерапевта</ListItem>
            <ListItem>вы не псих, но терапия может помочь</ListItem>
            <ListItem>существуют разные взгляды и подходы</ListItem>
            <ListItem>убедитесь, что у терапевта есть образование и&nbsp;супервизор</ListItem>
          </CustomList>
        </Slide>
        {plan(4)}
        <Slide>
          <LText textColor="quaternary">
            {planList[4]} →
          </LText>
          <LHeading size={2}>Кто у нас тут?</LHeading>
          <br />
          <Appear>
            <LText>93% — мужчины</LText>
          </Appear>
          <Appear>
            <LText>75% — до 35 лет</LText>
          </Appear>
          <Appear>
            <LText>10% — имеют расстройства личности</LText>
          </Appear>
          <Appear>
            <LText>20% — имеют РЛ в США</LText>
          </Appear>
        </Slide>

        {/*<Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>*/}
      </Deck>
    );
  }
}
