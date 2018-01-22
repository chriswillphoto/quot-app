<template>
  <div id="home">
    <FilterBar @selectFilter="selectFilter"/>
    <Viewer :quote="selected" v-if='selected' @reload='reload' :viewKey="viewerKey"/>
    <footer>
      <p>Created by <a href="http://thechriswill.com" target="_blank">Chris Will</a></p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

import FilterBar from './FilterBar';
import Viewer from './Viewer';

export default {
  name: 'Home',
  components: {
    FilterBar,
    Viewer,
  },
  data() {
    return {
      filter: null,
      quotes: [],
      filtered: [],
      selected: null,
      viewerKey: 1,
    };
  },
  methods: {
    selectFilter(f) {
      this.filter = f;
      this.filtered = this.quotes.filter(quote =>
        quote.families.indexOf(this.filter) !== -1,
      );
      this.selected = this.filtered[Math.floor(Math.random() * this.filtered.length)];
      this.viewerKey += 1;
    },
    reload() {
      this.selected = this.filtered[Math.floor(Math.random() * this.filtered.length)];
      this.viewerKey += 1;
    },
  },
  created() {
    axios.get('http://quot-api.herokuapp.com/quotes').then((res) => {
      this.quotes = res.data;
      this.filtered = res.data;
    });
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {

}

#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

footer {
  position: fixed;
  bottom: 0;
  height: 40px;
  background-color: black;
  width: 100%;
  color: grey;
  padding: 8px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
  }
}

</style>
