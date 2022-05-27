console.log('DLinked List in Js')



class Node {
    constructor(data, prev, next) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}
class DLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    Push(data) {
        var newNode = new Node(data, null, null)
        if (this.head == null && this.tail == null) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
    }

    Push_Back(data) {
        var newNode = new Node(data, null, null);
        if (this.head == null && this.tail == null) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    Display() {
        if (this.head == null) return
        var itr = this.head
        console.log(this.head)
        while (itr != null) {
            console.log('Data : ' + itr.data)
            itr = itr.next
        }
        return
    }
}

var linkedList = new DLinkedList();

linkedList.Push(1)
linkedList.Push(2)
linkedList.Push(3)
linkedList.Push(5)
linkedList.Push(9)

linkedList.Display()