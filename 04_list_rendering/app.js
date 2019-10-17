var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        details: ["80% cotton", "20% polyester", "Gender-neytral"],
        variants: [
            {
                id: 2234,
                color: "green"
            }, {
                id: 2235,
                color: "blue"
            }
        ],
        sizes: ["30-33", "34-37", "38-41", "42-45"],
        image: "../assets/socks-green.jpg",
        altText: "A pair of socks",
        otherProductsUrl: "https://suvasocks.com/",
        inventory: 100,
        onSale: true
    }
})