function MakeStore(initString) {
    let tmp = initString;
    if (!initString) tmp = ''
    const buffer = {
        currentStr: tmp,
        append: function(x){
            this.currentStr += x
        },
        clear: function(){
            this.currentStr = ""
        },
        getBuffer: function(){
            return this.currentStr
        }
    }
    return buffer
}
let store = MakeStore('1')  
store.append("bla-bla")  
console.log(store.getBuffer()) // 'bla-bla'  
store.append([2,3]) // обратите внимание, что аргумент метода append не обязательно String  
console.log(store.getBuffer()) // 'bla-blabla-bla'  
store.clear()  
console.log(store.getBuffer())
