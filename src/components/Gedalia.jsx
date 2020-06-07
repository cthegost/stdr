import React, { Component } from "react";
import ava from '../assets/ava.jpg';


export default class Gedalia extends Component {
  render() {
    return (
      <div className="gedalia">
        <div className="about">
          <blockquote>
            <p>
              <img src={ ava } alt=""/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              praesentium repellat similique quis odit facere reiciendis fuga
              eveniet eum. Explicabo earum rerum, recusandae similique deserunt
              rem adipisci. Voluptas dolorem, fugiat quo tempora voluptatem
              accusamus ex velit optio itaque, voluptate omnis quasi, nam nisi!
              Omnis autem minima sapiente nulla voluptas magnam libero nemo,
              beatae aperiam at cumque, doloribus, soluta enim necessitatibus
              illum deleniti quidem repellat eaque ad. Excepturi modi, cumque
              neque reprehenderit rem similique maxime dignissimos
              exercitationem repellat laborum libero velit eveniet debitis
              maiores adipisci, error necessitatibus deserunt illum magni
              corrupti voluptas minus saepe. Pariatur hic perspiciatis
              quibusdam, tempore neque a.
            </p>
            <footer>
              — <cite>Рав Нахман Гедалья Шестак</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    );
  }
}
