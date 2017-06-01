<template lang="pug">
    #app
      img(src='./assets/logo.png')
      h1 TrendingMusic
      h2 Top Artist in Last.Fm
      select(v-model="selectedCountry")
        option(v-for="country of countries" v-bind:value="country.value") {{ country.name }}
      ul
        artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import Artist from './components/Artist.vue'
import getArtist from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name: 'Guatemala', value: 'guatemala'},
        {name: 'Argentina', value: 'argentina'},
        {name: 'España', value: 'spain'},
      ],
      selectedCountry: 'guatemala'
    }
  },
  components: {Artist: Artist},
  methods: {
    refreshArtist(){
      const self = this
      getArtist(this.selectedCountry)
        .then(function(artists){
          self.artists = artists;
        })
    }
  },
  mounted(){
    this.refreshArtist()
  },
  watch:{
    selectedCountry(){
      this.refreshArtist()
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
