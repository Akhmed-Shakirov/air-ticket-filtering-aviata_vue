<template>
  <div class="v-aviata">
    <nav class="navbar" v-if="navShow">
      <div class="menu" @click="menu" v-if="!sideBarShow">+</div>
      <div class="sideBar" v-show="sideBarShow">
      <div class="head"><h3>Menu</h3><div @click="menu" class="menu">-</div></div>
        <v-search />
        <v-filtration />
      </div>
    </nav>
    <v-search v-if="!navShow"/>
    <div class="grop">
      <v-filtration v-if="!navShow"/>
      <v-flights />
    </div>
  </div>
</template>

<script>
import vSearch from './search/v-search'
import vFiltration from './filtration/v-filtration'
import vFlights from './flights/v-flights'

export default {
  components: {
    vSearch,
    vFiltration,
    vFlights
  },
  data() {
    return {
      navShow: false,
      sideBarShow: false
    }
  },
  methods: {
    onResize() {
      let w = document.documentElement.clientWidth;
      this.itemSize = w > 921 ? this.navShow = false : this.sideBarShow = false
      this.itemSize = w <= 921 ? this.navShow = true : this.sideBarShow = false
    },
    menu() {
      this.sideBarShow = !this.sideBarShow
    }
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
}
</script>

<style lang="scss">
.v-aviata {
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #9c9b9b;
    border-bottom: 1px solid #000;
    .menu {
      margin-right: 30px;
      padding: 2px 10px 2px 10px;
      border: 1px solid #000;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .sideBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    height: 100vh;
    border-right: 1px solid #000;
    background: #9c9b9b;
    padding: 20px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .v-search {
    width: 100%;
    height: 111px;
  }
  .grop {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
  }
  .v-filtration {
    width: 240px;
    min-height: 100vh;
  }
  .v-flights {
    width: 880px;
    min-height: 100vh;
  }
}
</style>
