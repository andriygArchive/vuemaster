if (!eventBus) {
    var eventBus = new Vue()
}

Vue.component('product', {
    template: `
      <div class="product">
        <div class="product-image">
          <img :src="image" :alt="altText"/>
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ sale }}</p>
          <p>{{ description }}</p>
          <product-details :details="details"/>
          <p>Sizes:
            <span v-for="size in sizes" :key="size">
              <span>{{ size }} </span>
            </span>
          </p>
          <div v-for="(variant, index) in variants" :key="variant.id"
               class="color-box"
               :style="{ backgroundColor: variant.color}"
               @mouseover="updateProduct(index)">
          </div>
          <p v-if="inStock">In Stock</p>
          <p v-else :style="!inStock ? { 'text-decoration': 'line-through' } : {}">Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <p>
              <button @click="addToCart(id)" :disabled="!inStock"
              :class="{ disabledButton: !inStock }">Add to Cart</button>
              <button @click="removeFromCart(id)">-</button>
          </p>
          <product-tabs :reviews="reviews"></product-tabs>
        </div>
      </div>
    `,
    props: {
        premium: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    data() {
        return {
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
                }, {
                    id: 2235,
                    color: "blue",
                    image: "../assets/socks-blue.jpg",
                    quantity: 0,
                }, {
                    id: 2236,
                    color: "red",
                    image: "../assets/socks-blue.jpg",
                    quantity: 10,
                }
            ],
            selectedVariant: 0,
            sizes: ["30-33", "34-37", "38-41", "42-45"],
            altText: "A pair of socks",
            reviews: [],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },

        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },

        updateProduct(selectedVariant) {
            this.selectedVariant = selectedVariant
        },
    },

    mounted() {
        eventBus.$on('review-submitted', review => {
            this.reviews.push(review)
        })
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
        sale() {
            let variant = this.variants[this.selectedVariant]
            if (variant.quantity < 20) {
                return this.brand + ' ' + this.product + ', ' + variant.color + ' are on sale!'
            } else {
                return this.brand + ' ' + this.product + ', ' + variant.color + ' are not on sale'
            }
        },
        shipping() {
            if (this.premium) {
                return "Free"
            } else {
                return 1.99
            }
        }
    },
})