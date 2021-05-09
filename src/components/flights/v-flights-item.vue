<template>
  <div class="v-flights-item">
    <div class="v-flights-item__info">
      <div class="airliner">
        <img :src="`https://aviata.kz/static/airline-logos/80x80/${carrier}.png`">
        <p>{{carrier_name}}</p>
      </div>
      <div class="date">
        {{dep_time.slice(0,-5)}}
        <span>{{dep_time.slice(10)}}</span>
      </div>
      <div class="flight-time">
        <div>
          <samp>{{dest_code}}</samp>
          <p>{{hours}} ч {{minutes}} м</p>
          <samp>{{origin_code}}</samp>
        </div>
        <!-- <span>через Шымкент, 1 ч 50 м</span> -->
      </div>
      <div class="date">
        {{arr_time.slice(0,-5)}}  
        <samp>+1</samp>
        <span>{{arr_time.slice(10)}}</span>
              
      </div>
    </div>
    <div class="v-flights-item__choose">
      <div class="price">{{price}} ₸</div>
      <div class="button button_choose">Выбрать</div>
      <div class="hint">Цена за всех пассажиров</div>
      <div class="luggage">Нет багажа <span>+ Добавить багаж</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flight: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      carrier_name: this.flight.itineraries[0][0].carrier_name,
      dep_time: this.flight.itineraries[0][0].segments[0].dep_time,
      dest_code: this.flight.itineraries[0][0].segments[0].dest_code,
      origin_code: this.flight.itineraries[0][0].segments[0].origin_code,
      arr_time: this.flight.itineraries[0][0].segments[0].arr_time,
      price: this.flight.itineraries[0][0].price.amount,
      carrier: this.flight.itineraries[0][0].carrier,
      data1: this.flight.itineraries[0][0].dep_date,
      data2: this.flight.itineraries[0][0].arr_date,
      minutes: '',
      hours: ''
    }
  },
  methods: {
    start() {
      const date1 = new Date(this.data1)
      const date2 = new Date(this.data2)
      const delta = date2 - date1
      this.minutes = Math.round(delta / (60*1000))
      this.hours = Math.floor(this.minutes / 60)
      this.minutes -= (this.hours * 60)
    }
  },
  mounted() {
    this.start()
  }
}
</script>

<style lang="scss">
.v-flights-item {
  display: flex;
  height: 168px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 10px;
  &__info {
    width: 640px;
    display: flex;
    align-items: center;
    text-align: center;
    .airliner {
      font-weight: 600;
      font-size: 16px;
      margin-left: 43px;
      display: flex;
      img {
        height: 20px;
        margin-right: 11.79px;
      }
      p {
        display: inline-block;
        width: 100px;
        height: 20px;
        text-align: left;
      }
    }
    .date {
      font-size: 12px;
      margin-left: 13px;
      span {
        display: block;
        font-weight: 600;
        font-size: 24px;
      }
      samp {
        font-size: 10px;
        color: #ff3724;
      }
    }
    .flight-time {
      font-size: 12px;
      margin-left: 27.44px;
      margin-right: 33.56px;
      width: 150px;
      div {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #b9b9b9;
        padding-bottom: 3.5px;
        margin-bottom: 4.5px;
      }
      samp {
        color: #b9b9b9;
      }
      span {
        color: #ff9900;
      }
    }
  }
  &__choose {
    width: 240px;
    background: #f5f5f5;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .price {
      font-size: 24px;
      margin-top: 12px;
    }
    .button_choose {
      width: 200px;
      height: 40px;
      margin-top: 13px;
    }
    .hint {
      font-size: 12px;
      color: #707276;
      margin-top: 8px;
    }
    .luggage {
      font-size: 12px;
      margin-top: 15px;
      span {
        padding: 3px 8px 3px 8px;
        color: #5763B3;
        background: #EAF0FA;
        border-radius: 2px;
        cursor: pointer;
      }
    }
  }
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  border-radius: 4px;
  color: #fff;
  background: #55BB06;
  cursor: pointer;
  width: 139.59px;
  height: 44px;
}
</style>
