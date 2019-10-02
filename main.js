function isHot(todayTemp) {
  // let todayTemp = ' '
  let weatherReport = 80
  return todayTemp >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.';  

}


function helloThere(name) {

  // let shortGreeting = "Hi, ";
  // let longerGreeting = "Hello, ";
  return name.length > 5 ? 'Hi, ' + name : 'Hello, ' + name; 

}


function goodbyeYou(name) {
  return name === undefined ? 'Goodbye, stranger' : 'Goodbye, ' + name;

}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}