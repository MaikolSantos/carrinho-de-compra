// ELEMENTOS
const body          = document.querySelector('body')
const main          = handleCreateElement('main', 'container')
const productList   = handleCreateElement('ul', 'list')
const buttonEnd     = handleCreateElement('button', 'end', 'Finalizar')
const title         = handleCreateElement('h1', 'title', 'Virtual Market')

const sectionCation = handleTemplate('Item', 'Valor', 'caption')

// LISTA
const productsCart = [
    {
        id: 1,
        name: "Uva Crismon",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

// FUNCÕES
function handleCreateElement(element, style, text = '') {
    const el = document.createElement(element)
    el.classList.add(style)

    if(text) el.innerText = text

    return el
}

function handleTemplate(element1, element2, type) {
    const section       = handleCreateElement('section', type)
    const asElement1    = handleCreateElement('span', 'section_element1', element1)
    const asElement2    = handleCreateElement('span', 'section_element2', element2)

    section.append(asElement1, asElement2)

    return section
}

function newProduct(name, value) {
    const productDetails    = handleCreateElement('li', 'list__item')
    const asName    = handleCreateElement('span', 'list__item__name', name)
    const asValue   = handleCreateElement('span', 'list__item__value', `R$ ${value.toFixed(2)}`)

    productList.appendChild(productDetails)
    productDetails.append(asName, asValue)
}

function addProducts(products) {
    let add = 0

    products.forEach( (product) => add += product.price)

    return add
}

// SEÇÃO SOMA
const sectionAdd = handleTemplate('Total', `R$ ${addProducts(productsCart)}`, 'add')

// REDENRIZAÇÕES
productsCart.forEach( (product) => {
    const name  = product.name
    const price = product.price

    newProduct(name, price)
});

body.appendChild(main)

main.append(title, sectionCation, productList, sectionAdd, buttonEnd)
