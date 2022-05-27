

// Min &  Max Heap

// Bild Heap
// Sift Down
// Sift Up
// Insert
// Remove

// Node = i
// left child = 2i + 1
// right child = 2i + 2
// Parent Node Round ( i-1 /2 )

// Insert at end  && Sift Up
// Remove : swap last and first && sift down

// Time Complexitiy :
/*
  SiftUp - SiftDown : O (log(n)) | no space
  Heapfiy Heap : O(n)
  Insert , Remove : O(1)
*/

// Min Heap Construction
class MinHeap {
  
  constructor (array) { this.heap = this.Heapify(array) }
    
  Heapify (array) {
    let parentIdx = Math.round((array.length - 2) / 2)
    for (let i = parentIdx ; i >= 0 ; i -= 1) this.SiftDown(i , array.length -1 , array)
    return array
  }
  
  Insert (element) {
    this.heap.push(element)
    this.SiftUp(this.heap.length - 1 , this.heap)
  }
  
  Remove () { 
    this.Swap(0 , this.heap.length - 1 , this.heap)
    let removedValue = this.heap.pop()
    this.SiftDown(0 , this.heap.length - 1 , this.heap)
    return removedValue
  }
  
  Peek () { return this.heap[0] }
  Swap ( i , j  , array ) { [array[i] , array[j]] = [array[j] , array[i]] }

  SiftUp (currentIdx , heap) {
    let parentIdx = Math.round((currentIdx - 1) / 2)
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.Swap(currentIdx , parentIdx , heap)
      currentIdx = parentIdx
      parentIdx = Math.round((currentIdx - 1) / 2)
    }
  }
  
  IsEmpty () { return this.heap.length === 0 }

  SiftDown (currentIdx , maxIdx , heap) { return this.SiftDown_Helper(currentIdx , parseInt((2*currentIdx) + 1)  , parseInt((2*currentIdx) + 2) , maxIdx , heap) }

  SiftDown_Helper (currentIdx , leftChild , rightChild  , maxIdx , heap) {
      
      if (leftChild > maxIdx && rightChild > maxIdx) return

      leftChild = leftChild > maxIdx ? -1 : leftChild
      rightChild = rightChild > maxIdx ? -1 : rightChild
      
      let minIdx = 0
      if (leftChild !== -1 && rightChild !== -1)
        minIdx = heap[leftChild] < heap[rightChild] ? leftChild : rightChild
      else  
          minIdx = leftChild != -1 ? leftChild : rightChild
        
      

      if (heap[minIdx] < heap[currentIdx] ) 
        this.Swap(currentIdx , minIdx , heap)
      
          
      currentIdx = minIdx

      this.SiftDown_Helper(currentIdx , parseInt((2*currentIdx) + 1)  , parseInt((2*currentIdx) + 2) , maxIdx , heap)
  }
}

var heap = new MinHeap([ 5,3,17,10,84,19,6,22,9 ])

// heap.Insert(3)
// heap.Insert(1)
// heap.Insert(9)
// heap.Insert(5)
// heap.Insert(7)

while (!heap.IsEmpty()) console.log(heap.Remove())



