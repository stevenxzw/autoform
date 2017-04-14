<template>
  <div class="ttt">
    <template v-if="layout==='admin'">
      <div class="nav-header">
        <div class="nav-title fl"><Icon type="arrow-expand" size='24'></Icon> AutoForm</div>
        <div class="fr pt10">
          <ul class="user-nav">
            <li>
            <Button type="error" @click.prevent="logout" :loading="islogout" size="small">退 出</Button></li>
          </ul>
        </div>
      </div>
      <div class="nav-side" v-if="false">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="老师管理" name="1">
            <ul class="side-list">
              <li><router-link to="/list">老师列表</router-link></li>
              <li><router-link to="/add">添加老师</router-link></li>
            </ul>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>

      </div>
    </template>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
  computed: mapGetters([
    'layout'
  ]),
  name: 'app',
  data () {
    return {
      activeNames: ['1'],
      islogout: false,
      // layout: 'login'
    }
  },

  created () {
    console.log(this.layout)
    // console.log('App.vue', this);
  },
  methods : {
    handleChange () {
      console.log(arguments)
    },
    logout () {
      this.islogout = true;
      var _this = this;
      setTimeout(function(){
        _this.islogout = false;
        _this.$children[1].$router.replace('/login');
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
  @import '/assets/stylus/base'
  .view
    transition transform .25s ease-in-out, opacity .25s ease-in-out
  .fade-leave-active
  .fade-enter-active
    opacity 0
    transform translate3d(10px, 0, 0)

  toph = 60px
  sidew = 250px
  .nav-header
    height toph
    background #f8f8f8
    border-bottom 1px solid #c0ccda
    padding 0px 20px
    z-index 1001
    position relative
    .nav-title
      font-size 20px
      padding-top 20px
      color #920d03
      font-weight bold
  .user_ico
    width 16px
    height 16px
  .el-dropdown
    margin-left 20px
  .nav-side
    width sidew
    background #f8f8f8
    position absolute
    top toph
    left 0
    border-right 1px solid #c0ccda
    min-height 500px
    .el-collapse
      border 0
    .el-collapse-item__content
      padding 0

  .contanter
    margin-left sidew
    padding 20px 0 0 10px
  
  ul
    li
      display inline-block
      padding 0 10px
  .side-list
    margin: 0;
    padding: 0;
    li
      display block
      height 40px
      line-height 40px
      padding 0
      a
       padding-left 35px
       display inline-block
       height 100%
       width 100%
    .router-link-active
      background #eee

  .tool-bar
    height 40px
    line-height 40px
    width 100%
    margin 10px 0
    border-bottom 1px solid #e0e6ed
    border-radius 3px
    padding-right 20px

  .fs16
    font-size 16px 
    font-weight bold
</style>
