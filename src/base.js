/*
 * 2017-04-06
 *自动表单基本功能
 *@zhiwen
 */


//获取id
export const createFieldId = () => {
  var code = [], codeLength = 5,//验证码的长度   
  selectChar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//所有候选组成验证码的字符，当然也可以用中文的             
  for(var i=0;i<codeLength;i++){    
    var charIndex = Math.floor(Math.random()*36);   
    code.push(selectChar[charIndex]);    
  }   
  return 'field_'+code.join('');
}


export const getCls = (obj) => {
  var newObj = {
    title_value: '未命名',
    default_value: '',
    field_id : createFieldId(),
    field_type : false,
    autoRender : true,
    editing: false,
    canDel : true,//是否允许删除
    canCopy : true,//是否允许复制
    choics : {
      isNumber:false,
      presence: false,
      is_hide: false
    },
    presence : '',//必填
    number : '',//数字
    tips_value : '',//提示文案
    errorMsg: '',
    is_hide: '',//是否隐藏属性
    isFront: false, //是否是前台显示
    editingcs : 'editing',
    getSideBarData : () => {},
  }
  switch(obj.type){
    case 'email_text':
      newObj = extendDeep(newObj,{            
            title_value : '邮件'})
      break;
    case 'single_line_text':
      newObj = extendDeep(newObj, {            
            default_value : ''})
    break;
    case 'single_line_text':
    // console.log(newObj)
      newObj = extendDeep(newObj, {            
            default_value : ''})
    break;
    case 'phone_mobile_text' :
      newObj = extendDeep(newObj, {            
            title_value: '手机号',
            default_value : ''})
    break;
    case 'single_choice_text' :
      newObj = extendDeep(newObj, {
            title_value: '请选择',            
            items : [{name:'选项',checked:false}]})
    break;
    case 'multiple_choice_text' :
      newObj = extendDeep(newObj, {
            title_value: '请选择',
            checkSelect: [{name:'上海',child:['浦东','浦西']}]
      })
    break;
    case 'join_number_text' :
          newObj = extendDeep(newObj,{  
            title_value: '参加人数',
            adult : 1, //大人，-1时不显示
            children : 1, //学生
            adult_price: 0, //家长单价
            children_price: 0,//学生单价
            adult_max: '',//家长每次可报最大人数
            children_max: ''//学生每次可报最大人数
          })
          // console.log(newObj.title_value)
    break;
  }
  // console.log(newObj.title_value)
  return extendDeep( newObj, obj)
}

export const copyComponent = (component, obj) => {

}

var extendDeep = (parent, child) => {
    var i,
    toStr = Object.prototype.toString,
    astr = "[object Array]";
    child = child || {};
    for (i in child) {
        if (parent.hasOwnProperty(i)) {
            if (typeof child[i] === "object") {
                // child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                extendDeep(parent[i], child[i]);
            } else {
                parent[i] = child[i];
            }
        }else{
          parent[i] = child[i]
          // if (typeof child[i] === "object") {
          //   extendDeep(parent[i], child[i]);
          // }else{
          //   parent[i] = child[i]
          // }
        }
    }
    return parent;
}