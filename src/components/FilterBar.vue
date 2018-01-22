<template lang="html">
  <div class="filterbar-container">
    <h4>A Quote to help me: </h4>
    <button type="button" value="motivation" @click="selectFilter">Get Motivated</button>
    <button type="button" value="inspiration" @click="selectFilter">Feel Inspired</button>
    <button type="button" value="love" @click="selectFilter">Understand Love</button>
    <button type="button" value="life" @click="selectFilter">Understand Life</button>
    <button type="button" value="writing" @click="selectFilter">Write</button>
    <button type="button" value="creative" @click="selectFilter">Be Creative</button>

    <button type="button" value="" id="random" @click="selectFilter">Read a Random Quote</button>

    <router-link :to="{ name: 'AllQuotes', params: {} }">View all the quotes</router-link>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  methods: {
    selectFilter(e) {
      this.$emit('selectFilter', e.target.value);
      e.target.parentNode.childNodes.forEach((i) => {
        // eslint-disable-next-line
        if (i.type === 'button') { i.classList = ''; }
      });
      e.target.classList = 'selected';
    },
  },
};
</script>

<style lang="scss">
.filterbar-container {
  color: white;
  width: 100%;
  background-color: black;

  h4 {
    display: inline-block;
    margin: 0 40px 0 20px;
  }

  button {
    background-color: transparent;
    color: white;
    border: none;
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
  }

  a {
    color: white;
    position: absolute;
    right: 20px;
    text-decoration: none;
  }

  .selected {
    color: skyblue;
  }

  #random {
    // margin-left: 200px;
  }
}
</style>
