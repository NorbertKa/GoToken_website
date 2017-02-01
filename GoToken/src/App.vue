<template>
  <div id="app">
    <introduction></introduction>
    <example></example>
    <integration></integration>
    <components></components>
  </div>
</template>

<script>
import Introduction from './components/Introduction'
import Example from './components/Example'
import Components from './components/Components'
import Integration from './components/Integration'

export default {
  name: 'app',
  components: {
    Introduction,
    Example,
    Components,
    Integration
  }
}
</script>

<style>
  #description {
    margin: auto;
    text-align: center;
    width: 25em;
    border-bottom: 1px solid white;
  }
  #downloadButtons {
    padding-top: 1.1em;
  }
  #getStarted {
    margin-top: 4em;
    margin-bottom: 6em;
  }
  #getStarted > button.button {
    margin-right: 0.3em;
  }
</style>
