import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { CarouselItem, Carousel } from "react-bootstrap";
import firstImg from "../../../images/1.jpg";
import secondImg from "../../../images/2.png";

const NewsSlider = () => {
  return (
    <>
      <Carousel>
        <CarouselItem style={{ height: "600px" }}>
          <img className="d-block w-100" src={firstImg} alt="First slide" />
          <Carousel.Caption>
            <h3>Скоро пройдет турнир LFL 19</h3>
            <p>
                17-18 числа . Субботу и воскресенье.
              Турнир составляет 227 пар . Это турнир становиться самым большим
              турниром в России ! Турнир пройдет в г.Гудермес . В зале Беной
              тревал. Завершим этот год на самом высоком уровне ☝️
              @lfl_saydulaew 🔜
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ height: "600px" }}>
          <img className="d-block w-100" src={secondImg} alt="First slide" />
          <Carousel.Caption>
            <h3>Пояс чемпиона LFL</h3>
            <p>
              Этот турнир отборочный на чемпионские бои . Пояс чемпиона будет
              нереально красив и мощный . Это наглядный пример чемпионкого
              пояса. Лучше участвовать на этом турнире , и выйти биться за эту
              красоту . Выигравший пояс + бонус 500$💵(30/35т) Это чисто «бонус»
              + добавим гонорар 💵
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ height: "600px" }}>
          <img className="d-block w-100" src={firstImg} alt="First slide" />
          <Carousel.Caption>
            <h3>Скоро пройдет турнир LFL 19</h3>
            <p>
                17-18 числа . Субботу и воскресенье.
              Турнир составляет 227 пар . Это турнир становиться самым большим
              турниром в России ! Турнир пройдет в г.Гудермес . В зале Беной
              тревал. Завершим этот год на самом высоком уровне ☝️
              @lfl_saydulaew 🔜
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ height: "600px" }}>
          <img className="d-block w-100" src={secondImg} alt="First slide" />
          <Carousel.Caption>
            <h3>Пояс чемпиона LFL</h3>
            <p>
              Этот турнир отборочный на чемпионские бои . Пояс чемпиона будет
              нереально красив и мощный . Это наглядный пример чемпионкого
              пояса. Лучше участвовать на этом турнире , и выйти биться за эту
              красоту . Выигравший пояс + бонус 500$💵(30/35т) Это чисто «бонус»
              + добавим гонорар 💵
            </p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default NewsSlider;
