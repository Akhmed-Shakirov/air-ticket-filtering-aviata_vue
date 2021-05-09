<template>
  <div class="v-filtration">
    <v-tariffs />
    <v-airliner />
  </div>
</template>

<script>
import vTariffs from './v-tariffs'
import vAirliner from './v-airliner'

export default {
  components: {
    vTariffs,
    vAirliner
  }
}
</script>

<style lang="scss">
.v-filtration {
  width: 240px;
  font-weight: bold;
  font-size: 14px;
  .title {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    div {
      width: 20px;
      height: 20px;
      background: url('../../assets/img/filter/filter.png');
      cursor: pointer;
      position: relative;
    }
    .tooltip {
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: hidden;
      width: 122px;
      height: 30px;
      border: 1px solid #E1E1E1;
      background: #fff;
      border-radius: 6px;
      padding: 5px 0;
      font-size: 12px;
      position: absolute;
      bottom: 180%;
      margin-left: -50px;
    }
    div:hover {
      background: url('../../assets/img/filter/filter_hover.png');
    }
    div:hover .tooltip {
      visibility: visible;
    }      
  }
  .hover {
    width: 100%;
    height: 32px;
  }
  .hover:hover {
    background: #ebebeb;
  }
  label {
    padding-left: 20px;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;   
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label span {
    content: '';
    display: inline-block;
    margin-left: -10px;
    margin-right: 10px;
    background: #fff;
    border: 1px solid #b9b9b9;
    box-sizing: border-box;
    border-radius: 2px;
    width: 14px;
    height: 14px;
  }
  input[type="checkbox"]:checked + label span {
    background: url('../../assets/img/checkbox/checbox_active.png');
  }
  input[type="checkbox"]:checked:hover + label:hover span {
    background: url('../../assets/img/checkbox/checbox_active.png');
  }
  input[type="checkbox"]:hover + label:hover span {
    background: url('../../assets/img/checkbox/checbox_hover.png');
  }
  &__tariffs {
    height: 152px;
    background: #fff;
  }
  &__airliner {
    margin-top: 12px;
    min-height: 320px;
    background: #fff;
  }
}
</style>
