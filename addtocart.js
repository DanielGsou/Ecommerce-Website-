// Definição dos produtos com id, imagem, título e preço
const product = [
    {
        id: 0,
        image: 'image/samsunga14.jpg',
        title: 'Samsung Galaxy A14 128GB',
        price: 999,
    },
    {
        id: 1,
        image: 'image/samsungsmart55.jpg',
        title: 'Samsung Smart TV OLED 55 4K',
        price: 2.849,
    },
    {
        id: 2,
        image: 'image/samsungzflip5.jpg',
        title: 'Samsung Galaxy Z Flip5 256GB Tela dobrável',
        price: 3.998,
    },
    {
        id: 3,
        image: 'image/wbfonegamer.jpg',
        title: 'WB Fone de ouvido Gamer Bluetooth In-ear',
        price: 130,
    }
];

// Cria um conjunto único de produtos para evitar repetições
const categories = [...new Set(product.map((item) => item))];
let i = 0;

// Renderiza os produtos na página
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img=box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>R$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

// Array que armazena os itens no carrinho
var cart = [];

// Adiciona um item ao carrinho
function addtocart(a) {
    // Adiciona uma cópia do item ao carrinho com uma referência ao índice original
    cart.push({ item: { ...categories[a] }, originalIndex: a });
    displaycart();
}

// Remove um item do carrinho
function delElement(a) {
    // Encontra o índice original do item no array 'categories'
    const originalIndex = cart[a].originalIndex;
    // Remove o item do carrinho usando o índice original
    cart.splice(a, 1);
    displaycart();
}

// Exibe os itens no carrinho na página
function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Seu carrinho está vazio";
        document.getElementById("total").innerHTML = "R$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((cartItem) => {
            var { image, title, price } = cartItem.item;
            total = total + price;
            document.getElementById("total").innerHTML = "R$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row=img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
