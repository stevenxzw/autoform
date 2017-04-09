<template>
  <div :class="['field', field.editing ? 'editing' : '']" @click="editField">
    <i class="fa fa-bars sort-handler"></i>
    <div class="actions">
      <i title="删除" class="el-icon-delete2" rel="e:del" @click.stop="del"></i><i rel="e:copy" @click.stop="copy" title="复制" class="el-icon-document"></i>
    </div>
    <div class="icons"></div>
    <div class="form-group"><label :class="['control-label', field.presence ? 'required':'']" id="title_txt">{{field.title_value}}</label>
      <div class="help-block"><p>提示信息</p></div>
      <div class="controls">
        <el-input v-model="field.default_value" placeholder="详细描述" class="form-control"></el-input>
        <div class="error-message">
          <i class="el-icon-warning"></i>
          <span>出错提示</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
    editField () {
      // console.log('-----', arguments)
      if(!this.field.editing){
        console.log(this.field.editing)
        // this.field.editing = true
        this.$emit('emitchild', {
          type : 'select',
          fieldData: this.field
        })
      }
    },

    del () {
        this.$emit('emitchild', {
          type : 'del',
          fieldData: this.field
        })
    },

    copy () {
        this.$emit('emitchild', {
          type : 'copy',
          fieldData: this.field
        })
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
