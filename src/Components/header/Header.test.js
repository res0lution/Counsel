import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from './Header.js';
import '../../i18n.js';

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

it("Changes language when clicked", () => {
    act(() => {
      render(<Header/>, container);
    });
  
    const button = document.querySelector("[role=button]");
  
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    const rusLang = document.querySelector("#ru-lang");
    
    act(() => {
      rusLang.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    const textlogo = document.querySelector('.text-logo-small');
    
    expect(textlogo.textContent).toBe('владей своим курсом');
  
  });

