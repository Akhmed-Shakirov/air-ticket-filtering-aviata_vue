<template>
  <div class="v-filtration__tariffs">
    <div class="title">
      <p>Опции тарифа</p>
      <div @click="edit">
        <span class="tooltip">Сбросить выбор</span>
      </div>
    </div>
    <div v-for="tariff in tariffs" :key="tariff.id">
      <div class="hover">
        <input
          type="checkbox"
          :id="tariff.id"
          :checked="tariff.active"
          @click="tariff.active = !tariff.active"
        />
        <label :for="tariff.id">
          <span></span>
          {{tariff.title}}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tariffs: [
        { id: 40, title: "Только прямые", active: false },
        { id: 41, title: "Только с багажом", active: false },
        { id: 42, title: "Только возвратные", active: true }
      ]
    };
  },
  methods: {
    edit() {
      this.tariffs[0].active = false
      this.tariffs[1].active = false
      this.tariffs[2].active = false
    }
  }
}
</script>
