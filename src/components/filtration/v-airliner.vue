<template>
  <div class="v-filtration__airliner">
    <div class="title">
      <p>Авиакомпании</p>
      <div @click="categoriesNull">
        <span class="tooltip">Сбросить выбор</span>
      </div>
    </div>
    <div v-for="airline in airlines" :key="airline">
      <div class="hover">
        <input type="checkbox" :id="airline" :value="airline" v-model="categories">
        <label :for="airline"><span></span>{{airline}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'flights'
    ]),
    airlines() {
      return this.getOptions()
    }
  },
  data() {
    return {
      filtrations: [],
      categories: [],
      active: true
    }
  },
  methods: {
    ...mapActions([
      'get_flights'
    ]),
    ...mapMutations([
      'set_categories',
      'set_categories_null'
    ]),
    getOptions() {
      let result = []
      this.filtrations.map((item) => {
          result.push(item.itineraries[0][0].carrier_name.toString())
      })
      return result = [...new Set(result)]
    },
    categoriesNull() {
      this.categories = []
      this.set_categories_null()
    },
    addCategories() {
      const category = this.categories
      this.set_categories(category)
    },
  },
  watch: {
    categories() {
      this.addCategories(this.categories)
    }
  },
  mounted() {
    this.get_flights()
    .then(() => {
      this.filtrations = [...this.flights]
    })
  }
}
</script>
