<template>
  <div>
    <app-temperature :temp="temperature"></app-temperature>
  </div>
</template>

<script>
// @ is an alias to /src
import Temperature from '../components/Home/Temperature.vue';


export default {
  data() {
    return {
      temperature: 0
    }
  },
  mqtt: {
    'temperature': function (val) {
      console.log('test' + val);
      
      this.temperature = parseInt(val);
      console.log('temperature' + this.temperature);
    }
  },
  name: 'home',
  components: {
    'appTemperature' : Temperature
  },
  methods: {
  },
  created() {
    this.$mqtt.subscribe('temperature');
  }
}
</script>
