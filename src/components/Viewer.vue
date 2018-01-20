<template lang="html">
  <div class="viewer">
    <div class="words" :key="viewKey">
      <h2 class="fader">&quot;{{quote.text}}&quot;</h2>
      <h4 class="fader"> - {{quote.author}}</h4>
    </div>
    <button type="button" name="button" @click="reload">Another One?</button>
  </div>
</template>

<script>
export default {
  name: 'Viewer',
  props: { quote: { type: Object }, viewKey: { type: Number } },
  methods: {
    reload() {
      this.$emit('reload');
    },
  },
};
</script>

<style lang="scss">


.viewer {
  height: calc(100vh - 62px);
  opacity: 1;
  position: relative;
  background-color: white;

  button {
    position: absolute;
    bottom: 10px;
    right: 50px;
    background-color: transparent;
    height: 60px;
    width: 120px;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.8s;

    &:hover {
      color: grey;
    }
  }
}

.words {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 40px;
  min-width: 70%;

  h2 {
    font-size: 28px;
  }

  h4 {
    text-align: right;
    margin: 40px 0 0 0;
  }
}

.fader {
  animation: fader 1.2s linear 0s 1;
}

@keyframes fader{
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
