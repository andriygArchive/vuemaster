Vue.component('product-tabs', {
    template: `
    <div>
        <span class="tab"
              :class="{ activeTab: index === selected}"
              v-for="(tab, index) in tabs"
              @click="selected = index" 
              :key="index">{{ tab }}</span>          

          <p v-if="!reviews.length" v-show="selected == 0">
            No reviews submitted</p>
          <ul v-show="selected == 0">
              <li v-for="review in reviews">
                <p>Name: {{ review.name }}</p>
                <p v-if="review.review">Review: {{ review.review }}</p>
                <p>Rating: {{ review.rating }}</p>
                <p v-if="review.recommend == 'yes'">Recommend product</p>
                <p v-else>Does not recommend product</p>
              </li>
          </ul>
          <product-review v-show="selected == 1"/>
    </div> 
    `,
    props: {
        reviews: {
            required: true,
            type: Array,
            default: [],
        }
    },
    data() {
        return {
            tabs: ['Reviews', 'Make a Review', 'Third'],
            selected: 0,
        }
    }
})