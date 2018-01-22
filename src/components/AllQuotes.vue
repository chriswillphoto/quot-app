<template lang="html">
  <div class="allquotes-container">
    <div class="searchbar">
      <router-link :to="{ name: 'Home', params: {} }">&#8666; Back</router-link>
      <form class="" @submit.prevent="search">
        <input type="search" v-model='filter'/>
        <button>Search</button>
      </form>
    </div>
    <h4 v-if="filtered.length < quotes.length">Results for <em>{{filter}}:</em></h4>
    <div class="quotes" v-if="quotes.length > 0">
      <p :key="quote.id" v-for="quote in filtered">
        {{quote.text}} - <strong>{{quote.author}}</strong>
      </p>
    </div>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllQuotes',
  data() {
    return {
      quotes: [],
      filtered: [],
      filter: '',
    };
  },
  methods: {
    search() {
      // eslint-disable-next-line
      this.filtered = this.quotes.filter((i) => {
        return i.text.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1 ||
        i.author.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
      });
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .allquotes-container {

    a {
      color: white;
      text-decoration: none;
    }

    h2 {
      text-align: center;
    }

    h4 {
      width: 80%;
      margin: 0 auto 25px;
      font-size: 24px;
    }

    p {
      width: 80%;
      margin: 0 auto 25px;
    }

    .searchbar {
      background-color: black;
      padding: 5px;
      margin-bottom: 40px;
      position: relative;
    }

    form {
      display: inline-block;
      position: absolute;
      right: 0;

      input {
        width: 200px;
        margin-right: 10px;
      }

      button {
        background-color: transparent;
        color: white;
        height: 20px;
        width: 100px;
        border-radius: 5px;
      }
    }
  }
</style>
