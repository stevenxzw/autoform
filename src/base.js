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
    title_value: '',
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
    is_hide: '',//是否隐藏属性
    isFront: false, //是否是前台显示
    editingcs : 'editing',
    getSideBarData : () => {},
  }
  switch(obj.type){
    case 'Single_line_text':
      newObj = extendDeep({            
            title_value: '',
            default_value : ''}, newObj)
    break;
  }
  return extendDeep( newObj, obj)
}

export const copyComponent = (component, obj) => {

}

var extendDeep = (parent, child) => {
    var i,
    toStr = Object.prototype.toString,
    astr = "[object Array]";
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === "object") {
                child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                extendDeep(parent[i], child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}