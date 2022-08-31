function createSortedList() {

    let sortedList = {
        list: [],
        add: function (element) {
            this.list.push(element);
            this.list.sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            if (this.list.length > index && index >= 0) {
                this.list.splice(index, 1)
                this.size--;
            }
        },
        get: function (index) {
            if (this.list.length > index && index >= 0) {
                return this.list[index]
            }
        },
        size: 0
    }

    return sortedList;
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
