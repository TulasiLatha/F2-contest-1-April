let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let dev=arr.map(function(el){
     
     if(el.profession=='developer'){
        console.log(el.name)
     }
    })
  }
  PrintDeveloperbyMap();
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let dev=arr.forEach(function(el){
        if(el.profession=='developer'){
            console.log(el.name);
        }
    })

  }
  PrintDeveloperbyForEach();
  
  function addData() {
    //Write your code here, just console.log
    let object = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(object);
    console.log(arr);
  }
  addData();
  function removeAdmin() {
    //Write your code here, just console.log
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  }