<template>
  <div id="introduction">
    <div class="content center">
      <img @mouseover="mouseOverLogo" @mouseleave="mouseLeaveLogo" v-bind:class="{ logoHover: logoHover }" class="logo" src="/static/logo.svg" />
      <div id="description">
        <h6>GoToken is a self-hosted JWT token based auth service</h6>
      </div>
      <div id="downloadButtons">
        <div class="text-button">
          <button>Docker</button>
          <div id="dockerLink" class="text">
            {{docker}}
          </div>
        </div>
        <div class="text-button">
          <button>Go</button>
          <div id="goLink" class="text">
            {{go}}
          </div>
        </div>
      </div>
      <div id="getStarted">
      <button class="button">
        Get Started
      </button>
      <button class="button">
        Binaries
      </button>
      <button class="button">
        Source code
      </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    let defaultDocker = 'docker pull gotoken'
    let defaultGo = 'go get -u https://github.com/NorbertKa/GoToken'

    return {
      docker: defaultDocker,
      go: defaultGo,
      logoHover: false
    }
  },
  methods: {
    mouseOverLogo () {
      this.logoHover = true
    },
    mouseLeaveLogo () {
      this.logoHover = false
    }
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
  #builtWith {

  }
  #builtWith h6 {
      border-bottom: 1px solid white;
      margin-left: 40%;
      margin-right: 40%;
  }
</style>
