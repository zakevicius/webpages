var contentLT = {
    headerLinks: [
        ['Ką mes siūlome?', '#bodyCont'],
        ['Susisiekim', '#form']
    ],
    customsContent: ['Importo procedūros', 'Eksporto procedūros', 'Tranzito procedūros', 'Tarpininkavimas muitinėje', 'Muitinės sandėliavimo procedūros', 'Važtaraščių ir TIR knygelių pildymas'],
    warehouseContent: ['Sandėliavimas', 'Krovos darbai', 'Muitinės sandėliavimas', 'Papildomi sandėlio darbai', 'Krovinio apdirbimo darbai', 'Nestandartinių krovinių krovimas'],
    formContent: {
        contactTitle: 'Susisiekite su mumis',
        contactText: ['Jei turite klausimų, drąsiai kreipkitės.', 'Atsakysim, patarsim, padėsim.'],
        formFields: {
            name: ['Vardas', 'Jūsų vardas', 'text', 'name'],
            email: ['E-mail', 'Jūsų e-mail', 'email', 'email'],
            msg: ['Žinutė', 'Jūsų žinutė', 'textarea', 'message'],
            button: ['submit', 'Siųsti']
        }
    },
    workingHours: {
        title: 'Darbo laikas',
        workDays: ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Š', 'S']
    },
    address: {
        first: 'Galinės g. 1, korp. C, 310b kab.',
        second: 'Galinės k., Avižienių sen.',
        third: 'Vilniaus raj., LT-14247',
        phone: '+37062176494',
        email: 'info@logway1.lt'
    },
    footer: 'Visos teisės saugomos &copy; '
};

var contentRU = {
    headerLinks: [
        ['Что мы предлагаем?', '#bodyCont'],
        ['Пообщаемся', '#form']
    ],
    customsContent: ['Импортные процедуры', 'Экспортные процедуры', 'Транзитные процедуры', 'Таможенное оформление', 'Таможенные складские процедуры', 'Заполнения ЦМР и книжек МДП'],
    warehouseContent: ['Складирование', 'Грузовые операции', 'Таможенное складирование', 'Дополнительные складские работы', 'Обработка грузов', 'Работа с крупногабаритными и негабаритными грузами'],
    formContent: {
        contactTitle: 'Свяжитесь с нами',
        contactText: ['Возникли вопросы? Обращайтесь - ответим, посоветуем, поможем.'],
        formFields: {
            name: ['Имя', 'Ваше имя', 'text', 'name'],
            email: ['E-почта', 'Ваш адрес электронной почты', 'email', 'email'],
            msg: ['Сообщение', 'Ваше сообщение', 'textarea', 'message'],
            button: ['submit', 'Oтправить']
        }
    },
    workingHours: {
        title: 'Рабочее время',
        workDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    },
    address: {
        first: 'ул. Галинес, 1, корп. Ц, 310б каб.',
        second: 'д. Галинес, Авиженяй.',
        third: 'Вильнюсский район., ЛТ-14247',
        phone: '+37062176494',
        email: 'info@logway1.lt'
    },
    footer: 'все права защищены. &copy; '
};

var contentEN = {
    headerLinks: [
        ['What we offer?', '#bodyCont'],
        ['Contact us', '#form']
    ],
    customsContent: ['Import procedures', 'Export procedures', 'Transit procedures', 'Customs Brokerage', 'Customs warehouses', 'Filling of CMR and TIR Carnets'],
    warehouseContent: ['Warehousing', 'Loading/unloading operations', 'Customs warehousing', 'Custom cargo operations', 'Additional cargo processing works', 'Bulky cargo operations'],
    formContent: {
        contactUs: 'Contact Us',
        contactHelp: ['Have any questions? Feel free to contact us', 'We are here to answer, advice and help.'],
        formFields: {
            name: ['Name', 'Your name', 'text', 'name'],
            email: ['E-mail', 'Your e-mail', 'email', 'email'],
            msg: ['Message', 'Your message', 'textarea', 'message'],
            button: ['submit', 'Send']
        }
    },
    workingHours: {
        title: 'Working ours',
        workDays: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.']
    },
    address: {
        first: 'Galinės str.. 1, corp. C, room 310b',
        second: 'Galinės village, Avižieniai',
        third: 'Vilnius region, LT-14247',
        phone: '+37062176494',
        email: 'info@logway1.lt'
    },
    footer: 'All rights reserved &copy; '
};



var hrefArr = window.location.href.split('=');
var content = contentLT;

if (hrefArr[1] == 'EN') {
    content = contentEN;
} else if (hrefArr[1] == 'RU') {
    content = contentRU;
} else {
    content = contentLT;
}

// FILLING PAGE WITH TEXT BASED ON LANGUAGE SELECTED

var customsList = document.querySelector('.customs ul');
var warehouseList = document.querySelector('.warehouse ul');
var navigation = document.querySelector('#navigation');
var formDiv = document.querySelector('#form .contactUs');
var form = document.querySelector('form');
var markup = '';

content.headerLinks.forEach(createMarkup.bind(null, 'link'));
navigation.insertAdjacentHTML('afterbegin', markup)
markup = '';

content.customsContent.forEach(createMarkup.bind(null, 'list'));
customsList.insertAdjacentHTML('afterbegin', markup);
markup = '';

content.warehouseContent.forEach(createMarkup.bind(null, 'list'));
warehouseList.insertAdjacentHTML('afterbegin', markup);
markup = '';

// <h2>Vardas:</h2>
// <input type='text' name='name' placeholder='Jūsų vardas' required>
// <h2>E-mail:</h2>
// <input type='email' name='email' placeholder='Jūsų e-mail' required>
// <h2>Žinutė:</h2>
// <textarea rows=5 name='message'></textarea>
// <button type='submit'>Siųsti</button>
// 
// ?></input>

Object.keys(content.formContent).forEach(function (key) {
    if (Array.isArray(content.formContent[key])) {
        content.formContent[key].forEach(createMarkup.bind(null, 'formText'));
        formDiv.insertAdjacentHTML('beforeend', markup);
        markup = '';
    } else if (typeof (content.formContent[key]) === 'object') {
        Object.keys(content.formContent[key]).forEach(function (skey) {
            if (skey !== 'button') {
                createMarkup('formFields', content.formContent[key][skey]);
            } else {
                createMarkup('button', content.formContent[key][skey]);
            }
        });
        form.insertAdjacentHTML('afterbegin', markup);
    } else if (typeof (content.formContent[key]) === 'string') {
        createMarkup('formTitle', content.formContent[key]);
        formDiv.insertAdjacentHTML('afterbegin', markup);
        markup = '';
    }
});

markup = '';

// CREATING HTML
function createMarkup(tagName, el) {
    console.log(el);
    if (tagName === 'list') {
        markup += '<li><h2 class="h2">' + el + '</h2></li>';
    } else if (tagName === 'link') {
        markup += '<a href="' + el[1] + '">' + el[0] + '</a>';
    } else if (tagName === 'formTitle') {
        markup += '<h2>' + el + '</h2>';
    } else if (tagName === 'formText') {
        markup += '<p>' + el + '</p>';
    } else if (tagName === 'formFields') {
        markup += '<h2>' + el[0] + '</h2>';
        if (el[2] !== 'textarea') {
            markup += '<input type="' + el[2] + '" name="' + el[3] + '" placeholder="' + el[1] + '"/>';
        } else {
            markup += '<textarea rows=5 name="' + el[3] + '"></textarea>';
        }
    } else if ('button') {
        markup += '<button type="' + el[0] + '">' + el[1] + '</button>';
    }
};
