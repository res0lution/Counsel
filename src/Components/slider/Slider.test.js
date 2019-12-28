import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Slider from './Slider.js';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Render slider component", () => {
    act(() => {
      render(<Slider/>, container);
    });
  
    const h2 = document.querySelector("first-slide-title");
    expect(h2.textContent).toBe('');
  
  });
