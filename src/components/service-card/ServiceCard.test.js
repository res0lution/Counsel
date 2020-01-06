import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from './ServiceCard.js';
import ServiceImg1 from '../../images/woman.jpg';
import ServiceImg1small from '../../images/woman-small.jpg';
import '../../i18n.js';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Service card rendered props", () => {
  const mockPropsInfo = {
    "title": "Financial planning",
    "text": "Effective financial planning will protect you now, and in the future, and prepare you for whatever lies ahead. We take time to thoroughly understand your short, medium and long term goals and will develop a financial plan to help you to achieve these."
  };

  const imgsObj = {
    big: ServiceImg1,
    small: ServiceImg1small
  };

  act(() => {
    render(<Card t={(text) => {return text}} info={mockPropsInfo} imgs={imgsObj}/>, container);
  });

  const title = document.querySelector(".card-title");

  expect(title.textContent).toBe("Financial planning");

  const img = document.querySelector(".img-service");

  expect(img).not.toBe(null);
  
});