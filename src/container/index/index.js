import {
    createElement,
    createHeader,
} from '../../script/layout';

const page = document.querySelector('.page');
const header = createHeader();
page.append(header);

const title = createElement('h1', 'title', 'This is a title');
page.append(title);

const POST_LIST = [
    {
        category: [
            { text: 'Важливo', id: 1 },
            { text: 'Новa', id: 2 },
        ],
        info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
        date: '21.01.2021',
        viewed: false
    },
    {
        category: [
            { text: 'Важливo', id: 1 },
        ],
        info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
        date: '21.01.2021',
        viewed: true
    },
];

const createPost = () => {
    const postList = createElement('div', 'post-list');

    POST_LIST.forEach((params) => {
        const post = createElement('div', params.viewed ? 'post button post--viewed' : 'post button');
        const postHeader = createElement('div', 'post__header');
        const categoryList = createElement('div', 'post__category-list');

        params.category.forEach((category) => {
            const categorySpan = createElement('span', 'post__category', category.text);
            categoryList.append(categorySpan);
        });

        const dateSpan = createElement('span', 'post__date', params.date);

        postHeader.append(categoryList, dateSpan);

        const infoParagraph = createElement('p', 'post__info', params.info);

        post.append(postHeader, infoParagraph);
        postList.append(post);
    });

    return postList;
};

const post = createPost();
page.append(post);
   
        


