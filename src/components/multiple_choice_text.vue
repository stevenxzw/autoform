<template>
  <div :class="['field', field.editing ? 'editing' : '']" @click="editField">
    <Actions v-on:actionEvent='actionEvent' v-show="!field.isFront"></Actions>
    <div class="icons"></div>
    <div class="form-group"><label :class="['control-label', field.presence ? 'required':'']" id="title_txt">{{field.title_value}}</label>
      <div class="help-block" v-show="field.tips_value">{{field.tips_value}}</div>
      <div class="controls">
        <Checkbox-group v-model="field.checked"  :indeterminate="!field.vertical">
            <Checkbox :label="item.name" v-for="item in field.items" :disabled="!field.isFront"></Checkbox>
        </Checkbox-group>
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
    
    }
  },

  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
