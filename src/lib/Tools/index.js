class Tools{
    constructor(){

    }
    getAttrList(list,attr){
        // list<Object>
        // attr string
        let newList=[]
        list.forEach(val=>{
            newList.push(val[attr])
        })
        return newList
    }
}
export default function install(vue){
    vue.prototype._=new Tools()
}