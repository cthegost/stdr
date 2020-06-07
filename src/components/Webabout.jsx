import React, { Component } from "react";
export default class Webabout extends Component {
  render() {
    return (
      <div className="webabout">
        <div className="card-container">
          <div className="web-card">
            <h3>Базовый уровень</h3>
            <p>
              Ты станешь специалистом, даже если сейчас у тебя нет знаний о
              web-разработке
            </p>
          </div>
          <div className="web-card">
            <h3>400 часов</h3>
            <p>
              Ты сможешь совмещать учебу и работу несмотря на очный формат
              обучения
            </p>
          </div>
          <div className="web-card">
            <h3>5 преподавателей</h3>
            <p>
              Ты будешь учиться у настоящих профессионалов на реальных задачах
            </p>
          </div>
        </div>
        <a href="https://hackeru.pro/vse_kursy/spetsialist_po_web_razrabotke">Узнать больше</a>
      </div>
    );
  }
}
