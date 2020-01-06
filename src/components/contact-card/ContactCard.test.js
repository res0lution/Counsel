import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from './ContactCard.js';
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

it("Contact card rendered props", () => {
  const mockprops = {
    "name": "Head quarter",
    "mapsrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.062859910389!2d-122.61401948456748!3d45.52894057910176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0de474b803b%3A0x882941ce8abf5b99!2sRose%20City%20Futsal%20EAST!5e0!3m2!1sru!2sru!4v1577946703359!5m2!1sru!2sru",
    "address": "5010 NE Oregon St, Portland, OR 97213,",
    "phone": "+1 503-734-2382",
    "email": "counsel@example.mail"
  }

  act(() => {
    render(<Card t={(text) => {return text}} data={mockprops}/>, container);
  });

  const title = document.querySelector(".card-title");

  expect(title.textContent).toBe("Head quarter");
  
});