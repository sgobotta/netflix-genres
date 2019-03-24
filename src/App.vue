<template>
  <div id="app">
    <Main :uiContent="UI_CONTENT" />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import i18n from '@constants/i18n'

const UI_CONTENT = i18n(navigator.language)

export default {
  name: 'app',
  components: {
    Main
  },
  data() {
    return {
      UI_CONTENT
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
