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
            name: ['Vardas', 'Jūsų vardas'],
            email: ['E-mail', 'Jūsų e-mail'],
            msg: ['Žinutė', 'Jūsų žinutė'],
            button: 'Siųsti'
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
    headerLinks: ['Ką mes siūlome?', 'Susisiekim'],
    customsContent: ['Импортные процедуры', 'Экспортные процедуры', 'Транзитные процедуры', 'Таможенное оформление', 'Таможенные складские процедуры', 'Заправка коносаментов и книжек МДП'],
    warehouseContent: ['Sandėliavimas', 'Krovos darbai', 'Muitinės sandėliavimas', 'Papildomi sandėlio darbai', 'Krovinio apdirbimo darbai', 'Nestandartinių krovinių krovimas'],
    formContent: {
        contactUs: 'Susisiekite su mumis',
        contactHelp: ['Jei turite klausimų, drąsiai kreipkitės.', 'Atsakysim, patarsim, padėsim.'],
        formFields: {
            name: ['Vardas', 'Jūsų vardas'],
            email: ['E-mail', 'Jūsų e-mail'],
            msg: ['Žinutė', 'Jūsų žinutė'],
            button: 'Siųsti'
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

var contentEN = {
    headerLinks: ['Ką mes siūlome?', 'Susisiekim'],
    customsContent: ['Import Procedures', 'Export Procedures', 'Transit Procedures', 'Customs Brokerage', 'Customs Warehousing Procedures', 'Refilling of Bills of lading and TIR Carnets'],
    warehouseContent: ['Sandėliavimas', 'Krovos darbai', 'Muitinės sandėliavimas', 'Papildomi sandėlio darbai', 'Krovinio apdirbimo darbai', 'Nestandartinių krovinių krovimas'],
    formContent: {
        contactUs: 'Susisiekite su mumis',
        contactHelp: ['Jei turite klausimų, drąsiai kreipkitės.', 'Atsakysim, patarsim, padėsim.'],
        formFields: {
            name: ['Vardas', 'Jūsų vardas'],
            email: ['E-mail', 'Jūsų e-mail'],
            msg: ['Žinutė', 'Jūsų žinutė'],
            button: 'Siųsti'
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
var form = document.querySelector('#form .contactUs');
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

Object.keys(content.formContent).forEach(function(key) {
    if (Array.isArray(content.formContent[key])) {
        content.formContent[key].forEach(createMarkup.bind(null, 'formText'));
    } else if (typeof(content.formContent[key]) === 'object') {
        console.log('Object');
    } else if (typeof(content.formContent[key]) === 'string') {
        createMarkup('formTitle', content.formContent[key]);
    }
    console.log(markup);
});
form.insertAdjacentHTML('afterbegin', markup);
markup = '';

// CREATING HTML
function createMarkup(tagName, el) {
    if (tagName === 'list') {
        markup += '<li><h2 class="h2">' + el + '</h2></li>';
    } else if (tagName === 'link') {
        markup += '<a href="' + el[1] + '">' + el[0] + '</a>';
    } else if (tagName === 'formTitle') {
        markup += '<h2>' + el + '</h2>';
    } else if (tagName === 'formText') {
        markup += '<p>' + el + '</p>';
    }
};
