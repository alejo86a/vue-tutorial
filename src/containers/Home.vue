<template>
  <div id="home">
    <div class="snipmarks-list">
      <ul>
        <li v-for="marker in markers">
          <router-link :to="{ name: 'Specific Snipmark', params: { id: marker.id }}">
            {{marker.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'home',
    computed: mapGetters({
      markers: 'getMarkers'
    }),
    mounted () {
      this.$store.dispatch('loadMarks')
    }
  }
</script>

<style>
.snipmarks-list {
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.snipmarks-list ul li {
  padding: 20px;
}
</style>
