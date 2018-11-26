// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
    let sum = 0;
  
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    };
    
    return sum;

}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
//console.log(sumFunc(array)); // -> should log 10

function returnIterator(array) {
    let i = 0;
	return function(){
    let el = array[i];
    i++;
    return el;
  }
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
//console.log(myIterator()); // -> should log 'a'
//console.log(myIterator()); // -> should log 'b'
//console.log(myIterator()); // -> should log 'c'
//console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
    let i = 0;
	return {
        next: function(){
            let el = array[i];
            i++;
            return el;
    }
  }

}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(array) {
    let sum = 0;

    let iterator = nextIterator(array);
    
    for (let i=0; i<array.length; i++) {
      sum += iterator.next();
    }

    return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
//console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
    let i = 0;
    let arraySet = Array.from(set);
      return {
      next: function() {
        let el = arraySet[i];
        i++;
        return el;
      }
    }

}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
//console.log(iterateSet.next()); // -> should log 'h'
//console.log(iterateSet.next()); // -> should log 'e'
//console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(array) {
    let i = 0;
	return {
        next: function(){
            let el = array[i];
            i++;
            return [i-1,el];
    }
  }

}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
  return this.str.split(" ");
}

Words.prototype[Symbol.iterator] = function() {
    let i = 0;
    return {
      next: function() {
        let el = this[i];
        i++;
        return el;
      }
    };

}

// Uncomment the lines below to test your work
const helloWorld = new Words('Hello World Icardi');
//for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
    let i = 0, str = "";
  return {
    sentence: function() {
       if (i === 0){
           str = "I am the first element";
       }
       else 
       {
           str = array[i] + ' was found after index ' + (i-1);
       }
       i++;
       return str;
    }
  }
}

const returnedSentence = valueAndPrevIndex([4,5,6])
//console.log(returnedSentence.sentence());
//console.log(returnedSentence.sentence());
//console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
    let conversation = "";

    if(string === "english"){
      conversation = "Hello There!";
    } 
    else {
        conversation = "Gibberish!";
    }
  
    yield setInterval(function(){
        console.log(conversation);
      }, 3000);

}

//console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) { 
    let verb = "Smelly";
    let sentence = setInterval(() => console.log(`${verb} ${noun}.`), 3000);
    return sentence;
}

async function f(noun) {
    let sentence = await waitForVerb(noun);
    return sentence;
}

f("cat");