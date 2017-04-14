<template>
    <div class="actions">
      <span @click.stop="del"><Icon type="android-delete"></Icon></span>
      <span @click.stop="copy"><Icon type="ios-copy"></Icon></span>
    </div>
</template>

<script>
export default {
  name: 'Newpage',
  data () {
    return {
      msg: 'newpage'
    }
  },
  methods : {
    del () {
        this.$emit('actionEvent', 'del')
    },

    copy () {
        this.$emit('actionEvent', 'copy')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
