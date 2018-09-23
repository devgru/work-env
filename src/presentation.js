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
  Layout, Fill,
  Quote,
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
import newton from './images/newton.jpg';
import freud from './images/freud.jpg';
import eap from './images/eap.gif';
import me from './images/me.jpg';
import skeletons from './images/skeletons.jpg';
import paei from './images/paei.jpg';
import bigFive from './images/big-five.png';
import anxietyTech from './images/anxiety-tech.png';
import nikita from './images/nikita.png';
import maslow from './images/maslow.jpg';
import shutov from './images/shutov.png';
import pyramid from './images/maslow-pyramid.gif';
import annas from './images/annas.png';
import talks from './images/talks.png';
import nancy from './images/nancy2.jpeg';
import korol from './images/korol.png';
import alter from './images/alter.png';
import breeze from './images/breeze.png';
import yasno from './images/yasno.svg';
import kraynov from './images/kraynov.jpg';

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
  clear: left;
`;

const RImage = styled(Image)`
  margin-left: 0;
  margin-right: 0;
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
  'Дисклеймер',
  'Вдохновение',
  'О себе',
  'Ликбез',
  'Заблуждения',
  'Фон',
  'Специфика',
  'Гигиена',
];

const AListItem = ({ children }) => (
  <Appear><ListItem>{children}</ListItem></Appear>
);

const plan = (index) => (
  <Slide bgColor="primary" textColor="tertiary" id={`part-${index + 1}`}>
    <LText textColor="quaternary">
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

    let planStep = -1;

    return (
      <Deck
        contentWidth={1000}
        contentHeight={750}
        transition={[]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <LText textColor="quaternary">&nbsp;</LText>
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
          <Appear>
            <ChushText textColor="red" caps>Ψ→IT</ChushText>
          </Appear>
          <SPAN />
        </Slide>
        {plan(planStep++)}
        {plan(planStep++)}
        <Slide>
          <LText textColor="quaternary">
            &nbsp;
          </LText>
          <LHeading size={3}>Дисклеймер</LHeading>
          <br />
          <CustomList>
            <AListItem>сборная солянка;</AListItem>
            <AListItem>субъективность;</AListItem>
            <AListItem>самокритичность;</AListItem>
            <AListItem>шуточки;</AListItem>
          </CustomList>
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="quaternary">
            Вдохновение →
          </LText>
          <LHeading size={4}>Истории депрессии и выгорания</LHeading>
          <LImage width="100%" src={nikita} />
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Вдохновение →
          </LText>
          <LHeading size={4}>Истории депрессии и выгорания</LHeading>
          <LImage width="100%" src={annas} />
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Вдохновение →
          </LText>
          <LHeading size={4}>Выступления о выгорании</LHeading>
          <LImage width="100%" src={talks} />
          <SPAN />
          <Notes>
            Ссылки
            https://youtu.be/K6oZuB8_dU8
            https://youtu.be/G5_pR0GLQmE

          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Вдохновение →
          </LText>
          <LHeading size={3}>Anxiety tech</LHeading>
          <Image width="100%" src={anxietyTech} />
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Вдохновение →
          </LText>
          <LHeading size={3}>Велосипед</LHeading>
          <LImage width="80%" src={shutov} />
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Вдохновение →
          </LText>
          <LHeading size={3}>Сергей Король</LHeading>
          <LImage width="80%" src={korol} />
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Вдохновение →
          </LText>
          <LHeading size={3}>Developer survey</LHeading>
          <br />
          <CustomList>
            <AListItem>93% — мужчины;</AListItem>
            <AListItem>75% — до 35 лет;</AListItem>
            <AListItem>11,5% — сообщают о РЛ;</AListItem>
            <AListItem>20% — жителей США имеют депрессию и/или тревогу.</AListItem>
          </CustomList>
          <br />
          <RText textColor="quaternary">Stack Overflow Developer survey, 2018</RText>
          <RText textColor="quaternary">insights.stackoverflow.com/survey/2018</RText>
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="quaternary">О себе →</LText>
          <LHeading size={2}>Веб-разработчик</LHeading>
          <br />
          <Image width="30%" src={exante} />
          <Image width="30%" src={dl} />
          <Image width="30%" src={pleeco} />
          <SPAN />
          <Notes>
            <p>Я около десяти лет занимаюсь программирование, первые пять лет работал в небольшой питерской компании которая создавала софт для мобильных операторов.</p>
            <p>А последние пять лет моей карьеры — в этих логотипах. Год в Exante, три в Лаборатории данных и последний год — в Pleeco. Веб-разработка, визуализация данных, вот это всё.</p>
            <p>Для нашего сегодяншнего разговора самое важное — три года в Лаборатории. Благодаря директору — Тане Бибиковой — у меня была возможность работать и учиться в питерском институте гештальта.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">О себе →</LText>
          <LHeading size={2}>...и гештальтист</LHeading>
          <br />
          <LText>Гештальт-терапия — один из подходов психотерапии.</LText>
          <br />
          <Appear><LText>Трёхлетняя программа обучения:</LText></Appear>
          <CustomList>
            <AListItem>400 часов теории и практики;</AListItem>
            <AListItem>200 часов групповой терапии;</AListItem>
            <AListItem>20 часов личной терапии.</AListItem>
          </CustomList>
          <SPAN />
          <Notes>
            <p>Три года — полная программа обучения, я научился психотерапии в гештальт-подходе.</p>
            <p>Это не единственный мой опыт в психологии, конечно. Я учился, читал книги, посещал тренинги, учился их вести, придумывал и вёл свои.</p>
            <p>Называть себя психотерапевтом я формально не могу и подробнее ещё расскажу про это, но сегодня важно не это.</p>
            <p>Я планирую поделиться с вами выжимкой той информации, которую собрал за годы интереса к предмету, в надежде что это будет вам полезно.</p>
            <p>Интерес и был тем, что подталкивало меня. Учёба небесплатная — я потратил деньги, время, усилия.</p>
            <p>Но я доволен своим опытом и одна из вещей которой я доволен отдельно — возможность применять навыки одной профессии в другой.</p>
          </Notes>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="quaternary">
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
          <LText textColor="quaternary">
            Ликбез →
          </LText>
          <LHeading size={2}>
            Психолог
          </LHeading>
          <br />
          <LText>
            Высшее образование в психологии
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
          <LText textColor="quaternary">
            Ликбез →
          </LText>
          <LHeading size={2}>
            Психиатр
          </LHeading>
          <br />
          <LText>
            Врач, высшее образование в психиатрии
          </LText>
          <br />
          <LText>
            Может:
          </LText>
          <CustomList>
            <ListItem>диагностировать личностные растройства;</ListItem>
            <ListItem>лечить личностные расстройства;</ListItem>
            <ListItem>использовать фарму.</ListItem>
          </CustomList>
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
          <LText textColor="quaternary">
            Ликбез →
          </LText>
          <LHeading size={2}>
            Психотерапевт
          </LHeading>
          <br />
          <LText>
            Всё сложно
          </LText>
          <br />
          <LText>
            Может:
          </LText>
          <CustomList>
            <ListItem>заниматься психотерапией;</ListItem>
            <ListItem>вести психотерапевтические группы.</ListItem>
          </CustomList>
          <SPAN />
          <Notes>
            <p>Помимо того, что уже сказано про психотерапевтов, подведу некоторый итог.</p>
            <p>Психотерапия — отдельный вид деятельности.</p>
            <p>В Европе с 1990 действует «страсбургская декларация о психотерапии», описывающая психотерапию как отдельную профессию, требующую практической и теоретической подготовки.</p>
            <p>В России сейчас это по сути врачебная специальность, однако существует законопроект, который должен открыть возможность становиться психотерапевтами представителям других профессий, например соцработникам.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Ликбез →
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
            <p>На самом деле среди подходов часто встречаются родственные.</p>
            <p>Почти любой вид терапии так или иначе наследует психоанализу, использует часть его понятий и инструментов</p>
            <p>А семейная терапия, например, может по сути быть обычной терапией в одном из подходов, адаптированном для работы с группой людей.</p>
          </Notes>
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Ликбез →
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
            <p>Психоанализ за век заметно изменился. Его адаптировали к групповой работе, многие аналитики работают безо всяких кушеток, с прямым контактом с клиентом, принимают куда более активное участие в работе. Появилась целая группа вариаций, их иногда ещё называют психодинамическими терапиями. Эрик Берн с его транзактным анализом.</p>
            <p>Большую популярность сыскала когнитивно-поведенческая терапия, опирающаяся на научный подход и имеющая доказанную эффективность. Слышал о том, что в некоторых странах Европы по страховке могут назначить именно КПТ, в том числе при психосоматике.</p>
            <p>И, наконец, экзистенциальный подход и гештальт. Если вы читали книги Ирвина Ялома — вы представляете, как выглядит экзистенциальная психотерапия. Гештальт со стороны на неё в значительной степени похож. Такая терапия менее утилитарна, она призывает клиента работать с тем что важно здесь и сейчас, используя разговор и различные эксперименты, из самых известных — пустой стул.</p>
          </Notes>
          <SPAN />
        </Slide>
        <Slide bgColor="secondary" bgImage={freud} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="quaternary" bgColor="primary">Ликбез →</LLText>
          <Appear>
            <LLHeading size={2} bgColor="primary">Фрейд</LLHeading>
          </Appear>
          <SPAN />
          <Notes>
            <p>Это Фрейд. Именно его чаще всего вспоминают, когда говорят о психологии.</p>
            <p>С него начну рассказ и я. Фрейд многое дал психологии, его идеи дали мощный толчок клинической психологии и психиатрии. Сформулированный им подход к лечению — психоанализ — используется до сих пор.</p>
            <p>И до сих пор, если психотерапевт видит что клиенту трудно говорить о эмоциях — он предложит клиенту прилечь, зная что это поможет.</p>
          </Notes>
        </Slide>
        <Slide bgColor="black" bgImage={newton} bgSize="contain" bgRepeat="no-repeat">
          <Appear>
            <SecondaryCT textColor="red" caps>&nbsp;Нет</SecondaryCT>
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
            Ликбез →
          </LText>
          <LHeading size={2}>Наследие психоанализа</LHeading>
          <br />
          <CustomList>
            <ListItem>Догмы → наука</ListItem>
            <ListItem>Поиск смысла → изучение феноменов</ListItem>
            <ListItem>Утилитаризм → экзистенциализм</ListItem>
          </CustomList>
          <SPAN />
          <Notes>
            <p>
              Значительная часть П/А — герменевтика, поиск смыслов и причин. Каково истинное значение того сна? Занимаясь толкованиями, важно помнить что всегда есть тот кто толкует и то, что обуславливает это толкование. Кто он? Каким языком он пользуется?
            </p>
            <p>Фрейдовский П/А догматичен и наполнен придуманными моделями. Это подтолкнуло многих психологов к научному подходу.</p>
            <p>Альтернатива герменевтике — феноменология. Её язык — язык феноменов. Говорим о том, что точно есть, здесь и сейчас.</p>
            <p>Фрейд утилитарен. Его подход — встреча больного и пациента, ради излечения конкретных проблем. Иногда это слишком поверхностно, а работать хочется глубже. Хочется развития а не лечения. Тогда нас интересует экзистенциализм. Экзистенциальная встреча — гораздо более равная чем психоаналитическая.</p>
          </Notes>
        </Slide>
        <Slide bgImage={maslow} bgSize="contain" bgRepeat="no-repeat" bgPosition="right">
          <LLText textColor="quaternary" bgColor="primary">Ликбез →</LLText>
          <Appear>
            <LLHeading size={2} bgColor="primary">Абрахам<br />Маслоу</LLHeading>
          </Appear>
          <SPAN />
          <Notes>
            <p>Это Абрахам Маслоу. Его вы скорее всего знаете как автора «пирамиды потребностей».</p>
          </Notes>
        </Slide>
        <Slide bgImage={pyramid} bgSize="contain" bgRepeat="no-repeat">
        </Slide>
        <Slide bgImage={nancy} bgSize="contain" bgRepeat="no-repeat">
          <LLText textColor="quaternary" bgColor="primary">Ликбез →</LLText>
          <Appear>
            <LLHeading size={2} bgColor="primary">Нэнси<br />МакВильямс</LLHeading>
          </Appear>
          <SPAN />
          <Notes>
            <p></p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
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
          <LText textColor="quaternary">
            Ликбез →
          </LText>
          <LHeading size={4}>Современные проекты</LHeading>
          <br />
          <br />
          <br />
          <Heading size={1}>B17.RU</Heading>
          <SPAN />
          <Notes>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Ликбез →
          </LText>
          <LHeading size={4}>Современные проекты</LHeading>
          <br />
          <Image width="100%" src={alter} />
          <Text>psyalter.ru</Text>
          <SPAN />
          <Notes>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Ликбез →
          </LText>
          <LHeading size={4}>Современные проекты</LHeading>
          <br />
          <br />
          <Image width="100%" src={breeze} />
          <br />
          <Text>breeze.live</Text>
          <SPAN />
          <Notes>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Ликбез →
          </LText>
          <LHeading size={4}>Современные проекты</LHeading>
          <br />
          <Image width="80%" src={yasno} />
          <Text>yasno.live</Text>
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
        <Slide bgImage={levels}>
          <Text>Условно здоровый</Text>
          <br />
          <br />
          <Text>Невротик</Text>
          <br />
          <br />
          <Text textColor="primary">Пограничный уровень</Text>
          <br />
          <br />
          <Text textColor="primary">Психотик</Text>
          <br />
          <br />
          <br />
          <Notes>
            <p>А вот этой шкалой пользуются гештальтисты.</p>
            <p>Для понимания: невротик — человек, имеющий внутренние конфликты. В общем — нормальное состояние жителя города, общающегося с другими, активно решающего творческие задачи, сталкивающегося с ежедневными конфликтами.</p>
            <p>Психоз — состояние, когда человек не отличает, что реально а что нет. Это к психиатру.</p>
            <p>Пограничный уровень — посередине. С одной стороны внешне это чаще здоровые люди, их не так легко отличить как психотиков. Чаще возникает у женщин, характеризуется эмоциональной нестабильностью, повышенным риском суицида, чаще сопровождается другими расстройствами. Иногда — алкоголизм, промискуитети другое т.н. «повреждающее поведение».</p>
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
          <LText textColor="quaternary">
            Заблуждения →
          </LText>
          <LHeading size={5}>Работа с травмой</LHeading>
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
          <LText textColor="quaternary">
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
          <LText textColor="quaternary">
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
        <Slide>
          <LText textColor="quaternary">
             &nbsp;
          </LText>
          <LHeading size={2}>Итого</LHeading>
          <br />
          <CustomList>
            <ListItem>вы не псих, но терапия может помочь;</ListItem>
            <ListItem>важно понимать, какие навыки имеет специалист;</ListItem>
            <ListItem>существуют разные подходы;</ListItem>
            <ListItem>у терапевта есть образование, свой&nbsp;терапевт и&nbsp;супервизор.</ListItem>
          </CustomList>
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="quaternary">
            Фон →
          </LText>
          <LHeading size={2}>Непростое прошлое</LHeading>
          <br />
          <CustomList>
            <AListItem>габитус бедности: postnauka.ru/video/65819;</AListItem>
            <AListItem>культура подвига;</AListItem>
            <AListItem>оценочность;</AListItem>
            <AListItem>обусловенность принятия как норма;</AListItem>
            <AListItem>«стокгольмский синдром».</AListItem>
          </CustomList>
          <SPAN />
          <Notes>
            <p>В нашей стране покупательская способность ниже чем в США в 2 раза, на момент развала СССР — в три.</p>
            <p>Жизнь в бедности влияет на людей, об этом хорошо рассказали на ПостНауке: <a href="https://postnauka.ru/video/65819">видео</a></p>
            <p>Страна прошла через две войны и цепочку революций, одно из последствий — то, что Людмила Петрановская обозвала «травмой поколений». Мне кажется важным такой её аспект: подвиг становится нормой. Игнорирование собственных потребностей, сверхценность потребностей компании, сверхлояльность — такие вещи  становятся нормой. И тянут к выгоранию.</p>
            <p><a href="https://www.youtube.com/watch?v=T0YPNjRI7Qc">видео</a>, <a href="https://www.pravmir.ru/lyudmila-petranovskaya-ofitsioznoe-otnoshenie-k-voyne-prestuplenie-pered-psihologicheskim-blagopoluchiem-natsii/">Короткая версия</a>, Оригинальные заметки: <a href="https://ludmilapsyholog.livejournal.com/52399.html">часть 1</a>, <a href="https://ludmilapsyholog.livejournal.com/52649.html">часть 2</a>, <a href="https://ludmilapsyholog.livejournal.com/53022.html">часть 3</a>, <a href="https://ludmilapsyholog.livejournal.com/53418.html">часть 4</a>, <a href="https://ludmilapsyholog.livejournal.com/53949.html">часть 5</a>, <a href="https://ludmilapsyholog.livejournal.com/54193.html">часть 6</a>.
            </p>
            <p>Мы с вами рождены в культуре, где норма — искуственная оценка. Проверка соответствия требованиям, не имеющим отношения к реальности. Внешний вид, оценки в школе, поведение.</p>
            <p>Такие вещи часто переживаются детьми как непринятие их самих, ребёнок понимает что принятие родителем — обусловено и подстраивается под это обстоятельство.</p>
            <p>Одна из вещей которые мешают нам замечать эти проблемы — СС, нормальная на самом деле реакция психики по оправданию более властных фигур.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Фон →
          </LText>
          <LHeading size={2}>Обнадёживающее настоящее</LHeading>
          <br />
          <CustomList>
            <AListItem>растёт благосостояние и обеспеченность жильём;</AListItem>
            <AListItem>интернет даёт доступ к информации;</AListItem>
            <AListItem>психологическая помощь становится популярнее;</AListItem>
            <AListItem>состояние рынка труда подталкивает компании заботиться о сотрудниках..</AListItem>
          </CustomList>
          <SPAN />
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText textColor="quaternary">
            Специфика →
          </LText>
          <LHeading size={2}>Почему?</LHeading>
          <br />
          <Appear><LText>много шизоидов:</LText></Appear>
          <CustomList>
            <AListItem>сосредоточенная умственная работа;</AListItem>
            <AListItem>абстрактное мышление;</AListItem>
            <AListItem>развитое, эмоциональное фантазирование;</AListItem>
            <AListItem>сложно строить личные отношения.</AListItem>
          </CustomList>
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Специфика →
          </LText>
          <LHeading size={2}>Ещё почему?</LHeading>
          <br />
          <CustomList>
            <AListItem>айтишники любят работать;</AListItem>
            <AListItem>не принято обсуждать психическое здоровье;</AListItem>
            <AListItem>ограничен круг живого общения;</AListItem>
            <AListItem>молодая культура.</AListItem>
          </CustomList>
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Специфика →
          </LText>
          <LHeading size={2}>Бонусы айти</LHeading>
          <br />
          <Appear><LText>хорошие зарплаты дают возможности:</LText></Appear>
          <CustomList>
            <AListItem>качественно отдыхать;</AListItem>
            <AListItem>учиться;</AListItem>
            <AListItem>лечиться;</AListItem>
            <AListItem>делегировать рутину;</AListItem>
            <AListItem>выстраивать «лайфстайл».</AListItem>
          </CustomList>
          <SPAN />
        </Slide>
        <Slide bgColor="secondary" bgImage={kraynov} bgSize="contain" bgRepeat="no-repeat">
          <LText textColor="quaternary">
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
        <Slide>
          <LText textColor="quaternary">
            Специфика →
          </LText>
          <LHeading size={2}>Ещё бонусы айти</LHeading>
          <br />
          <CustomList>
            <AListItem>возможен гибкий график;</AListItem>
            <AListItem>возможна удалённая работа;</AListItem>
            <AListItem>возможен быстрый карьерный рост;</AListItem>
            <AListItem>работы много;</AListItem>
            <AListItem>«мозговая работа»;</AListItem>
            <AListItem>привычка учиться.</AListItem>
          </CustomList>
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="quaternary">
            Специфика →
          </LText>
          <LHeading size={2}>Зачем?</LHeading>
          <br />
          <CustomList>
            <AListItem>примириться с собой;</AListItem>
            <AListItem>получать больше удовольствия от жизни;</AListItem>
            <AListItem>изучить слабые стороны;</AListItem>
            <AListItem>подстелить соломки.</AListItem>
          </CustomList>
          <SPAN />
        </Slide>
        <Slide bgColor="red">
          <Text caps fit textColor="primary">Всё</Text>
        </Slide>
        <Slide>
          <LText textColor="quaternary">
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
              <LText>devgru@mail.ru</LText>
              <br />
              <LText>t.me/dima_devgru</LText>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
