<template>
  <div :class="['field', field.editing ? 'editing' : '']" @click="editField">
    <i class="fa fa-bars sort-handler"></i>
    <Actions v-on:actionEvent='actionEvent' v-show="!field.isFront"></Actions>
    <div class="icons"></div>
    <div class="form-group"><label :class="['control-label', field.presence ? 'required':'']" id="title_txt">{{field.title_value}}</label>
      <div class="help-block" v-show="field.tips_value">{{field.tips_value}}</div>
      <div class="controls">
        <Input v-model="field.default_value" placeholder="手机号" class="form-control" :disabled="!field.isFront">
          <Icon type="iphone" slot="prepend" color="#920d03"></Icon>
        </Input>
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
  name: 'phone_mobile_text',
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
    
    }
  },
  created  () {

  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
