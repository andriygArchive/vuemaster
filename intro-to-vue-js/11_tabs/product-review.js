if (!eventBus) {
    var eventBus = new Vue()
}
Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit" xmlns="http://www.w3.org/1999/html">
    <p v-if="errors.length">
      <strong>Please fix following errors:</strong>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
    <p><label for="name">Name</label> 
      <input id="name" v-model="name"/></p>
    <p><label for="review">Review</label> 
      <textarea id="review" v-model="review"/></p>
    <p><label for="rating">Rating</label> 
       <select id="rating" v-model="rating">
         <option value="1">1 *</option>
         <option value="2">2 *</option>
         <option value="3">3 *</option>
         <option value="4">4 *</option>
         <option value="5">5 *</option>
      </select></p>
      <p><label>Will you recommend this product:</label>
      <input type="radio" id="yes" name="recommend" value="yes" v-model="recommend"/>
        <label for="yes">Yes</label>
      <input type="radio" id="no" name="recommend" value="no" v-model="recommend"/>
        <label for="no">No</label></p>
        
      
      <p><input type="submit" value="Submit!"/></p>
    </form>
    `,
    data() {
        return {
            errors: [],
            name: null,
            review: null,
            rating: 0,
            recommend: null,
        }
    },
    methods: {
        onSubmit() {
            this.errors = []
            if (!this.name || !this.rating || !this.recommend) {
                if (!this.name) {
                    this.errors.push("Name is required")
                }
                if (!this.rating) {
                    this.errors.push("Rating is required")
                }
                if (!this.recommend) {
                    this.errors.push("Recommend is required")
                }
                return
            }
            let review = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend,
            }
            eventBus.$emit("review-submitted", review)
            this.name = null
            this.review = null
            this.rating = 0
            this.recommend = null
        }
    }

});