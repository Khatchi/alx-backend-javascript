export function taskFirst() {
    const task = 'I prefer const when I can.'; /*instantiation using const*/
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let'; /*instantiation using let*/
    combination += getLast();
  
    return combination;
  }
  