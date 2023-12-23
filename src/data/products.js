const productsList = [
    {
        id: '1',
        title: 'iphone 13',
        price: 800,
        image: 'https://images.unsplash.com/photo-1640437830863-8f7f38327319?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: '2',
        title: 'iphone 14',
        price: 950,
        image: 'https://images.unsplash.com/photo-1675467369399-5022df8eba71?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: '3',
        title: 'iphone 15',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: '4',
        title: 'iphone 12',
        price: 600,
        image: 'https://images.unsplash.com/photo-1617997455403-41f333d44d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZSUyMDEyfGVufDB8fDB8fHww'

    },
    {
        id: '5',
        title: 'iphone 12 Pro Max',
        price: 800,
        image: 'https://images.unsplash.com/photo-1608547492806-7e6c70ffdea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTIlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D'

    },
    {
        id: '6',
        title: 'iphone 13 Pro Max',
        price: 1000,
        image: 'https://images.unsplash.com/photo-1690705229380-a32a8eb5017d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTMlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D'

    },
    {
        id: '7',
        title: 'iphone 14 Pro Max',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1695322353008-fb6647b1cf4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D'

    },
    {
        id: '8',
        title: 'iphone 15 Pro Max',
        price: 1600,
        image: 'https://images.unsplash.com/photo-1700125621736-75a6d245a308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D'

    },
]

function getProductData(id) {
    const products = productsList.find((item) => item.id === id)
    return products;
}

export {productsList, getProductData}
