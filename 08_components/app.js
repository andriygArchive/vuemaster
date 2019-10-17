var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        description: "A pair of warm, fuzzy socks",
        details: ["80% cotton", "20% polyester", "Gender-neytral"],
        variants: [
            {
                id: 2234,
                color: "green",
                image: "../assets/socks-green.jpg",
                quantity: 100,
                onSale: false,
            }, {
                id: 2235,
                color: "blue",
                image: "../assets/socks-blue.jpg",
                quantity: 0,
                onSale: true,
            }
        ],
        selectedVariant: 0,
        sizes: ["30-33", "34-37", "38-41", "42-45"],
        altText: "A pair of socks",
        otherProductsUrl: "https://suvasocks.com/",
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

        updateProduct(selectedVariant) {
            this.selectedVariant = selectedVariant
        },
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale
        }
    },
})