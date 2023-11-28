const product = [
    {
        id: 0,
        image: 'image/samsaunga14.jpg',
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

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;

    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var{image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img=box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>R$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')