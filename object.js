function createInstructors(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
// same keys and values es2015
function createInstructor(firstName, lastName){
    return{
        firstName, lastName
    }
}

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

//coputued property name in es2015
function instructors(fName, favoriteNumber){
return {
    firstName: fName,
    [favoriteNumber] : 'that is my fav',
}
}

const  inst = {
firstName: 'colt',
sayHi(){
    return "hi!"
},
sayBye(firstName){
    return this.firstName + " says bye!"
},

}

var instructorr = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }


  function createAnimal(species, verb, noise){
      return {
      species, 
      [verb] : function(){
        return noise
      },
    }

  }