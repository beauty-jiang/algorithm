// 方法一 
// forEach + indexOf 本质上是双重遍历 效率差
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。 如果没有找到匹配的字符串则返回 -1。
function unique(array){
  const arr = []
  array.forEach((item)=>{
    if(array.indexOf(item) === -1){
      arr.push(item)
    }
  })
  return arr
}
// 方法二
// 利用forEach + 对象容器
// 是用来检测属性是否为对象的自有属性，如果是，返回true，否者false; 参数指要检测的属性名；
function unique2(array){
const arr = []
const obj = {}
array.forEach((item)=>{
  if(!obj.hasOwnProPerty(item)){
    obj[item] = true
    arr.push(item)
  }
})
return arr
}
// 方法三
// Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
// new Set()生成出来的数据是Set数据结构，需要自行转换成对应结构 {1:jiang,2:yu}
function unique3(array){
  // return Array.form(new Set(array))
  return [...new Set(array)]
}