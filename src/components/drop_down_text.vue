<template>
  <div :class="['field', field.editing ? 'editing' : '']" @click="editField">
    <Actions v-on:actionEvent='actionEvent' v-show="!field.isFront"></Actions>
    <div class="icons"></div>
    <div class="form-group"><label :class="['control-label', field.presence ? 'required':'']" id="title_txt">{{field.title_value}}</label>
      <div class="help-block" v-show="field.tips_value">{{field.tips_value}}</div>
      <div class="controls">
        <Select v-model="firstName" style="width:200px" @on-change="onChangeOrg">
          <Option v-for="item in field.items" :value="item.value" >{{ item.value }}</Option>
        </Select>
        <template v-for="cs in field.checkSelect">
          <Select v-if="cs.child&&cs.child.length"  v-model="cs.checked" class="second-select" style="width:200px" @on-change="onChange" :label-in-value="true">
            <Option v-for="item in cs.child" :value="item.label"  >{{ item.value }}</Option>
          </Select>
        </template>
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
      firstName: ''
    }
  },

  methods : {
    onChangeOrg (evt) {
      console.log(evt)
      this.getChild(0, evt)
    },
    onChange (evt) {
      console.log(evt)
      var value = evt.value
      var index = Number(value.split('@')[0])
      this.getChild(index, evt)
    },

    getChild (index, v) {
      console.log('getChild:'+index)
      var items = this.field.items, currentItem = '', child;
      switch(index){
        case 0:
          currentItem = items;
          currentItem.forEach((obj, i) => {
            if(obj.value === v){
              child = obj.child;
            }
          })
          if(child.length){
            this.createSelect(1, v, child)
          }else{
            this.field.checkSelect = []
          }
        break;
        case 1:
          currentItem = items
          // console.log('checkSelect',this.field.checkSelect.length)
          var len = this.field.checkSelect.length
          // console.log(len, index, len - index)
          this.field.checkSelect.splice(index, len - index);

          // console.log('checkSelect',this.field.checkSelect.length)
          // if( this.field.checkSelect.length >= index +1){
          //   console.log('in-chagne')
          //   this.field.checkSelect[index].name = v.label
          // }
          this.field.checkSelect.forEach((obj, i) => {
            currentItem.forEach((_obj, _i) =>{
              // console.log(_obj.value ,obj.name)
              if(_obj.value === obj.name){
                // index = i;
                currentItem = _obj.child
                // if(_i === index) child = _obj.child
                // console.log('currentItem-each', currentItem)
              }
            })
          })
          // console.log('currentItem', currentItem)
          if(!child)
            currentItem.forEach((nobj, ni) =>{
              if(nobj.value === v.label){
                child = nobj.child
              }
            })
          // console.log(index+1, v.label, child)
          // debugger;
          if(child && child.length)
            this.createSelect(index+1, v.label, child)
          // console.log(currentItem, index)
          // var parent = 
        break;
      }
      // console.log(currentItem)
    },
    createSelect (index, value, child) {
      var children = [], result = {name: value, checked: '', child:[]};
      child.forEach((obj, i) => {
        children.push({
          label: index+'@'+obj.value,value:obj.value
        })
      })
      result.child = children;
      var newSelectArr = [];
      if(this.field.checkSelect.length === 0 && result.child.length){
        this.field.checkSelect.push(result)
      }else{
        if(this.field.checkSelect.length >= index){
          // console.log('----in')
          this.field.checkSelect.forEach((obj, _i) => {
            // console.log('_i:'+_i, _i === index - 1)
            if(_i === index - 1) {
              if(result.child.length > 0){
                newSelectArr.push(result)
              }
            }else if(_i < index - 1){
              newSelectArr.push(obj)
            }
          })
          this.field.checkSelect = newSelectArr
        }else{
          // console.log('========in')
          // console.log(this.field.checkSelect.length)
          this.field.checkSelect.push(result)
          // console.log(this.field.checkSelect.length)
        }
      }
      // console.log("newSelectArr",newSelectArr)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  ul li {
      display: block;
  }
  .second-select
    margin-left 10px
</style>
