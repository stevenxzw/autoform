// 微信扫码登录页
<template>
  <div  class="indexBody" id="page-wrapper">
<!--       <div  @click="add(1)">add-compoents1</div>
      <br>
      <div  @click="add(2)">add-compoents2</div>
      <br>
      <div @click="setComp()">修改属性</div>
      <br>
      <div @click="getCompData()">保存</div> -->
      <div class="form-nav">
        <div class="nav-body">
          <div class="fl">新建表单</div>
          <div class="nav-tabs fl">
            <ul>
              <li class="active"><router-link to="/index">编 辑</router-link></li>
              <li><router-link to="/index">规 则</router-link></li>
              <li><router-link to="/index">发 布</router-link></li>
              <li><router-link to="/index">数 据</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="form-design">
        <div class="preview-container">
          <div class="preview-btn">preview-btn</div>
          <div class="preview with-shadow">
            <div class="form-header">
              <div class="field editing">
                <div class="form-group form-lg">
                  <el-input v-model="form.name" placeholder="未命名表单" class="form-control"></el-input>
                </div>
                <div class="form-group form-lg form-last">
                  <el-input v-model="form.description" placeholder="详细描述" type="textarea" :row=4 class="form-control"></el-input>
                </div>
              </div>

              <div class="field editing">
                <div class="form-group form-lg">
                  <label class="control-label" id="title_txt">报名时间</label>
                  <div class="controls">
                      <div class="input-text-inline">
                        <span>开始时间</span>
                        <el-date-picker
                          v-model="form.startTime"
                          type="datetime"
                          placeholder="选择开始时间" class="form-control">
                        </el-date-picker>
                        <span class="ml20">结束时间</span>
                        <el-date-picker
                          v-model="form.endTime"
                          type="datetime"
                          placeholder="选择结束时间" class="form-control">
                        </el-date-picker>
                      </div>
                  </div>
                  <!-- <el-input v-model="form.name" placeholder="未命名表单" class="form-control"></el-input> -->
                </div>
              </div>

              <div class="field editing">
                <div class="form-group form-lg">
                  <label class="control-label" id="number_txt">报名人数上限</label>
                  <div data-v-84b0bc22="" class="help-block"></div>
                  <el-input v-model="form.sign_number" placeholder="请填写人数" class="form-control"></el-input>
                  <el-checkbox v-model="form.can_repeat">可以重复报名</el-checkbox>
                </div>
              </div>
            </div>
            <draggable v-model="allComponents" @start="drag=true" @end="onEnd" class="form-body fields ui-sortable">
                <template  v-for="o in allComponents" class="form-body fields ui-sortable">
                   <component :is="o.type" :field="o" v-on:emitchild='emitchild'>
                   </component>
                </template>
            </draggable>

          </div>
        </div>
        <div class="sidebar"></div>
      </div>
  </div>
</template>
<script>
  import { globalMixins } from '@/mixins.js'
  import Single_line_text from '@/components/single_line_text'
  import Hello2 from '@/components/NewPage'
  import draggable from 'vuedraggable'
  import {createFieldId, getCls} from '@/base'

  export default {
    mixins: [globalMixins],
    name: 'index',
    data () {
      return {
        allComponents: [
          getCls({
            type: 'Single_line_text'
          }),
          getCls({
            type: 'Single_line_text'
          })],
        which_to_show:'first',
        activeName: "first",
        myArray:[{id:1,name:'drag1----'},{id:2,name:'drag2--------'},{id:3,name:'drag3--------'}],
        form: {
          name: '测试表单',
          description: '',
          startTime: '',
          endTime: '',
          sign_number: '',
          can_repeat: true
        }
      }
    },

    components: {
     Single_line_text: Single_line_text,
     Hello2: Hello2,
     third: { //第三个子组件
     template: "<div>这里是子组件3</div>"
     },
     draggable
    },
    created () {
      this.$store.dispatch('setLayout', 'admin')
      // this.setLayout('admin');
      // console.log('index-page', this.userInfo);
      // console.log(this)
      // console.log(getCls({
      //   type: 'Single_line_text',
      //   a: 1,
      //   b: 2
      // }))
      // console.log(getCls({
      //   type: 'Single_line_text',
      //   a: 12323,
      //   b: 223223
      // }))
      console.log(this.allComponents)
    },
    methods : {
      handleClick () {},
      add (type) {
        // console.log(type)
        switch(type){
          case 1:
                this.allComponents.push({componentName:'Single_line_text', data: {
                  cid : +new Date
                }})
          break;
          case 2:
                this.allComponents.push({componentName:'Hello2', data: {
                  cid : +new Date
                }})

          break;
        }
        // console.log(this.allComponents)
      },
      // setComp () {
      //   for(var i =0,len = this.allComponents.length;i<len;i++){
      //     this.allComponents[i].data = {
      //       cid : +new Date
      //     }
      //   }
      // },
      // getCompData () {
      //   console.log(this.allComponents)
      // },
      onEnd () {
        console.log(arguments, this.allComponents)
      },
      emitchild (obj) {
        switch(obj.type){
          case 'select':
            this.setallunEdit()
            obj.fieldData.editing = true
          break;
          case 'del':
            this.$confirm('确定要删除?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.delComponent(obj.fieldData)
            }).catch(() => {
          
            });
          break;
          case 'copy':
            var newField = this.clone(obj.fieldData)
            newField.title_value = '复制' + newField.title_value
            newField.choics.isNumber = false
            newField.editing = false
            this.allComponents.push({
              componentName: newField.type,
              data : newField
            })

            // console.log(this.allComponents.find({
            //   componentName: newField.type,
            //   data : newField
            // }))
            // console.log([1,2].indexOf(2))
            console.log([1,2].find(2))

            // console.log(this.allComponents)
          break;
        }
        // console.log('emitchild', arguments)
      },
      setallunEdit () {
        for(var i = 0 , len = this.allComponents.length;i< len;i++){
          this.allComponents[i].editing = false
        }
      },
      delComponent (obj) {
        for(var i = 0 , len = this.allComponents.length;i< len;i++){
          if(this.allComponents[i] === obj){
            this.allComponents.splice(i, 1);
          }
        }
      },
      cloneComponent (obj) {

      }
    },

  }
</script>
<style lang="stylus">
  @import './../assets/stylus/design'
</style>
