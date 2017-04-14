<template>
  <div :class="['field', field.editing ? 'editing' : '']" @click="editField">
    <Actions v-on:actionEvent='actionEvent' v-show="!field.isFront"></Actions>
    <div class="icons"></div>
    <div class="form-group"><label :class="['control-label', field.presence ? 'required':'']" id="title_txt">{{field.title_value}}</label>
      <div class="help-block" v-show="field.tips_value">{{field.tips_value}}</div>
      <div class="controls">
          <Input v-model="field.default_value" placeholder="请输入邮件" class="form-control" @on-blur="checkVil" @on-change="checkVil"></Input>
        </Form>
<!--         <Input v-model="field.default_value" placeholder="详细描述"  class="form-control"  :disabled="!field.isFront"></Input> -->
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
  name: 'single_line_text',
  props:{'field':Object}, 
    // title_value : '未命名',//标题
    // default_value : '',//默认值
    // field_id : '',
    // field_type : 'single_line_text',
    // presence : '',//必填
    // number : '',//数字
    // tips_value : '',//提示文案
    // is_hide: '',//是否隐藏属性
  data () {
    return {
      ruleValidate: {

            default_value: [
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
                { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
            ]
      }
    }
  },

  created () {
    console.log(this.field.default_value)
  },

  methods : {
    checkVil (evt) {
      if(this.field.default_value === ''){
        this.field.errorMsg = '请输入邮件地址'
      }else if(!/.+@.+\.[a-zA-Z]{2,4}$/.test(this.field.default_value)){
        this.field.errorMsg = '请输入正确的邮件地址'
      }else{
        this.field.errorMsg =  ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .ivu-input-wrapper
    margin-left 0 !important
  .ivu-input-wrapper
    color red !important
</style>
