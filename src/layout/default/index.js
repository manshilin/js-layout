import { createElement } from "../../script/layout";

const page = document.querySelector(".page");
const title = createElement("h1", "title", "This is a title");
page.append(title);