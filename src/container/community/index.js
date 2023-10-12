import {
    createElement,
    createHeader,
} from '../../script/layout';

const page = document.querySelector('.page');
const header = createHeader();
page.append(header);

const title = createElement('h1', 'title', "Комм'юніті");
page.append(title);

const main = createElement('main', 'main');
page.append(main);
const tabs = createElement('div', 'tabs');
main.append(tabs);

const TAB_LIST = [
    {
        text: 'База знань',
        active: false,
    },
    {
        text: 'Інформація',
        active: true,
    },
];

const createTab = () => {
    const tabList = createElement('ul', 'tab-list');

    TAB_LIST.forEach((params) => {
        const tab = createElement('li', 'tab', params.text);
        if (params.active) {
            tab.classList.add('active');
        }

        tab.addEventListener('click', () => {
            // Змінюємо активну вкладку при кліку
            const currentActiveTab = tabList.querySelector('.tab.active');
            if (currentActiveTab) {
                currentActiveTab.classList.remove('active');
            }
            tab.classList.add('active');

            // Опрацьовуємо зміну контенту, як показано в попередній відповіді
        });

        tabList.append(tab);
    });

    return tabList;
}

const tab = createTab();
tabs.append(tab);

const postHeader = createElement('div', 'post__header');
main.append(postHeader);
const img = createElement('img', 'post__img');
img.src = '/img/image_1.png';
postHeader.append(img);
//==
const postTitle = createElement('h2', 'post__title', 'Що таке база знань?');
postHeader.append(postTitle);
//==

const postText = createElement('p', 'post__text', 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.');
postHeader.append(postText);

const button = createElement('button', 'btn', 'Дізнатися більше');
postHeader.append(button);







        


