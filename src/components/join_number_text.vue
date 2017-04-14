<template>
  <div :class="['field', field.editing ? 'editing' : '']" @click="editField">
    <Actions v-on:actionEvent='actionEvent' v-show="!field.isFront"></Actions>
    <div class="icons"></div>
    <div class="form-group"><label :class="['control-label', field.presence ? 'required':'']" id="title_txt">{{field.title_value}}</label>
      <div class="help-block" v-show="field.tips_value">{{field.tips_value}}</div>
      <div class="controls">
          <Row>
             <Col span="6" v-if="field.adult !== -1"><span class="title-label" v-if="field.children !== -1">家长</span><Input-number :max="100" :min="adultMin" v-model="field.adult" @on-change="adultChange"></Input-number></Col>
              <Col span="6" v-if="field.children !== -1"><span  class="title-label"  v-if="field.adult !== -1">学生</span><Input-number :max="100" :min="childrenMin" v-model="field.children"  @on-change="childrenChange"></Input-number></Col>
          </Row>
        <div class="error-message" v-if="field.errorMsg">
          <i class="el-icon-warning"></i>
          <span>{{field.errorMsg}}</span>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import { componentMixins } from '@/componentMixins.js'
export default {
  mixins: [componentMixins],
  name: 'join_number_text',
  props:{'field':Object}, 
    // title_value : '未命名',//标题
    // default_value : '',//默认值
    // field_id : '',
    // field_type : 'single_line_text',
    // presence : '',//必填
    // number : '',//数字
    // tips_value : '',//提示文案
    // is_hide: '',//是否隐藏属性
    // adult : 1, //大人，-1时不显示
    // children : 1, //学生
    // adult_price: 0, //家长单价
    // children_price: 0,//学生单价
    // adult_max: '',//家长每次可报最大人数
    // children_max: ''//学生每次可报最大人数
  data () {
    return {
      childrenMin: -1,
      adultMin: -1
    }
  },

  methods : {
    adultChange (evt) {
      this.childrenMin = evt === -1 ? 1: -1
    },
    childrenChange (evt) {
      this.adultMin = evt === -1 ? 1: -1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .title-label
    margin-right 10px
    font-weight bold
</style>
