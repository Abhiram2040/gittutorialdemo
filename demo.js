var geeks = {
    name : "ABC",
    printFunc: function(){
       document.write(this.name);}
       }
         
      var printFunc2= geeks.printFunc.bind(geeks);
       //using bind() 
       // bind() takes the object "geeks" as parameter//
      printFunc2();