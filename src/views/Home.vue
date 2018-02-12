<template>
  <div>
    <app-temperature :temp="temperature"></app-temperature>
    <app-humidity :temp="humidity"></app-humidity>
  </div>
</template>

<script>
// @ is an alias to /src
import Temperature from '../components/Home/Temperature.vue';
import Humidity from '../components/Home/Humidity.vue';


export default {
  data() {
    return {
      temperature: 0,
      humidity: 0
    }
  },
  mqtt: {
    'aegisflanker/temperature': function (val) {
     
      this.temperature = parseInt(val);
      console.log('temperature ' + this.temperature);
    },
    'aegisflanker/humidity': function (val) {

      this.humidity = parseInt(val);
      console.log('humidity ' + this.humidity);
    }
  },
  name: 'home',
  components: {
    'appTemperature' : Temperature,
    'appHumidity' : Humidity
  },
  methods: {
  },
  created() {
    this.$mqtt.subscribe('aegisflanker/temperature');
    this.$mqtt.subscribe('aegisflanker/humidity');
  }
}
</script>
