// 微信扫码登录页
<template>
  <div  class="indexBody" id="page-wrapper">
<!--     <el-card class="box-card box-card-add">
      <i class="el-icon-plus"></i>
      <div class="create-item"  @click="toEdit"><i class="el-icon-document"></i> 新建表单</div>
    </el-card> -->
     <Col span="3"  @click="toEdit">
        <Card :shadow="true" class="box-card-add">
          <i class="el-icon-plus"></i>
          <div class="create-item"  @click="toEdit"><i class="el-icon-document"></i> 新建表单</div>
        </Card>
      </Col>
    <template v-for="o in 4"> 
<!--       <el-card class="box-card">
        <div class="card-title"  @click="toEdit">测试表单{{o}}</div>
        <div class="card-body"  @click="toEdit"></div>
        <div class="card-footer">
          <div class="fl">{{o}} 数据</div>
          <div class="fr"><i class="el-icon-delete"></i></div>
        </div>
      </el-card> -->
      <Col span="3"  @click="toEdit">
        <Card :shadow="true">
          <p class="card-title"  @click="toEdit">测试表单{{o}}</p>
          <div class="card-body"   @click="toEdit"></div>
          <div class="card-footer">
            <div class="fl">{{o}} 数据</div>
            <div class="fr"><i class="el-icon-delete"></i></div>
          </div>
        </Card>
      </Col>
    </template>
    <!-- <component v-bind:is="which_to_show"></component> -->
    <!-- <el-button v-popover:popover>hover 激活</el-button> -->
<!--     <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
    <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
    </el-tooltip> -->


  </div>
</template>
<script>
  import { globalMixins } from '@/mixins.js'
  export default {
    mixins: [globalMixins],
    name: 'index',
    data () {
      return {

      }
    },

    methods : {
      toEdit () {
        console.log(this.$router)
        this.$router.replace('/edit');
      }
    },

    created () {
      this.$store.dispatch('setLayout', 'admin')
      console.log('index-page', "toEdit");
    }
  }
</script>
<style lang="stylus" scoped>
  .indexBody
    padding 20px 0 0 30px
    min-height 500px
    background-color #eee
  .el-card__body
    height 100%

  .ivu-card
    width 150px
    height 200px
    display inline-block
    margin-right 45px
    margin-bottom 40px
    font-size 14px
    position relative
    transition all 0.3s ease-in
    &:hover
      background-color #de5c0f
      cursor pointer
      color white
      .card-footer
        color white
    .card-body
      text-align center
      margin-top 40%
    .card-footer
      position absolute
      bottom 10px
      color #999
      width 110px


  .box-card
    width 150px
    height 200px
    display inline-block
    margin-right 45px
    margin-bottom 40px
    font-size 14px
    position relative
    transition all 0.3s ease-in
    &:hover
      background-color #de5c0f
      cursor pointer
      color white
      .card-footer
        color white
    .card-body
      text-align center
      margin-top 40%
    .card-footer
      position absolute
      bottom 10px
      color #999
      width 110px
  .box-card-add
    border 1px dashed #ccc
    text-align center
    padding-top 50px
    &:hover
      background-color  #79de7b
      .el-icon-plus
        display none
      .create-item
        display block
    .el-icon-plus
      font-size 30px
      color #e88b8b
    .create-item
      color white
      font-size 14px
      display none
</style>
