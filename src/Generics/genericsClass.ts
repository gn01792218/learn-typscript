//這個class可以裝載任何型態的Data
class DataStorage<T>{
    private data:T[] = []
    addItem(item:T){
        this.data.push(item)
    } 
    removeItem(item:T){
        if(this.data.indexOf(item) === -1) return //沒找到會回傳-1
        this.data.splice(this.data.indexOf(item),1)
    }
    getItems(){
        return this.data
    }
}

const textStore = new DataStorage()

textStore.addItem('sdsdsd')
textStore.addItem('MAsds')
textStore.removeItem('sdsdsd')
console.log(textStore.getItems())

//但上面的class面對object時會需要增加檢查機制，所以比較好的做法是
//讓T extends string | number 這樣就好了!