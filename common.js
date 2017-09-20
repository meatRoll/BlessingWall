/**
 * Created by 彭林 on 2017/5/10.
 */
function id(id){
  return document.getElementById(id);
}






//兼容

//获取某一个元素里面的文本的。
function getText(ele){
//    ele.textContent
//    ele.innerText
  //a.能力检测 （检测当前运行这个js代码的浏览器有没有这个功能）
  //如果当前这个浏览器支持textContent，那么ele.textContent就会有返回值， 不可能是undefined。
  if(typeof ele.textContent  == "string"){
    return ele.textContent;
  }else {
    return ele.innerText;
  }
}

//设置某一个元素里面的文本  //兼容 写一个函数
function setText(ele,text){
  //能力检测
  if(typeof ele.textContent  == "string"){
    ele.textContent = text;
  }else {
    ele.innerText = text;
  }
}

//获得下一个元素节点
function getNextElement(elem){
  if(elem.nextElementSibling){
    return elem.nextElementSibling;
  }else{
      var nextElement = elem.nextSibling;
    while(nextElement.nodeType != 1){
      nextElement = nextElement.nextSibling;
    };
    return nextElement;
  }
}

//获得上一个元素节点
function getPreviousElement(elem){
  if(elem.previousElementSibling){
    return elem.previousElementSibling;
  }else{
      var previousElement = elem.previousSibling;
    while(previousElement.nodeType != 1){
      previousElement = previousElement.previousSibling;
    };
    return previousElement;
  }
}

//获得第一个子元素节点
function getFirstElementChild(elem){
  if(elem.firstElementChild){
    return elem.firstElementChild;
  }else{
    var firstElementChild = elem.firstChild;
    while(firstElementChild.nodeType != 1){
      firstElementChild = firstElementChild.nextSibling;
    }
    return firstElementChild;
  }
}

//获得最后一个子元素节点
function getLastElementChild(elem){
  if(elem.lastElementChild){
    return elem.lastElementChild;
  }else{
    var lastElementChild = elem.lastChild;
    while(lastElementChild.nodeType != 1){
      lastElementChild = lastElementChild.previousSibling;
    }
    return lastElementChild;
  }
}












