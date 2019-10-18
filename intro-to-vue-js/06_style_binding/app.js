var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        details: ["80% cotton", "20% polyester", "Gender-neytral"],
        variants: [
            {
                id: 2234,
                color: "green",
                image: "../assets/socks-green.jpg"
            }, {
                id: 2235,
                color: "blue",
                image: "../assets/socks-blue.jpg"
            }
        ],
        sizes: ["30-33", "34-37", "38-41", "42-45"],
        image: "../assets/socks-green.jpg",
        altText: "A pair of socks",
        otherProductsUrl: "https://suvasocks.com/",
        inStock: true,
        onSale: true,
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },

        updateProduct(variantImage) {
            this.image = variantImage
        },
    }
})