// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //CHRIS NOTES: lets try to pull the data from the HTML and create a 
  //multidimensional object. 
  //for the test we know it will be 3.  we will adjust to 8 should it work.
  //the object to receive the values.
  var dayList = [
    {
      theTime: "9am",
      userText:"no Appointments",
      saveValue: false
    },{
      theTime: "10am",
      userText:"No Appointments",
      saveValue: false
    },{
      theTime: "11am",
      userText:"No Appointments",
      saveValue: false
    },{
      theTime: "12pm",
      userText:"No Appointments",
      saveValue: false
    },{
      theTime: "1pm",
      userText:"No Appointments",
      saveValue: false
    },{
      theTime: "2pm",
      userText:"No Appointments",
      saveValue: false
    },{
      theTime: "3pm",
      userText:"No Appointments",
      saveValue: false
    },{
      theTime: "4pm",
      userText:"No Appointments",
      saveValue: false
    },{
      theTime: "5pm",
      userText:"No Appointments",
      saveValue: false
    }


  ]
  //get the local storage test
  
  console.log(dayList[0].userText);
var inText = "";
var inClass = "";
var findIndex = 0;
  function setStorage(inText, inClass, event){
    
    console.log("this is testStorage: " + testStorage);
    console.log('this is the inText: ' + inText);
    console.log("this is the inClass" + inClass);
    if (inClass = "col-8 col-md-10 description text hour-9"){
      dayList[0].userText = inText;
      localStorage.setItem("hour-9", inText);
    }
    //dayList[i].userText = testStorage;
    
    
    //localStorage.setItem(workHour, dayList[i].userText)
  } 
  var mainEl = document.querySelector(".container-fluid");

  //this is where we should add the clock element that will be compared when the loop
  //is generating the calendar - if that is successful.
  var realtime = dayjs().hour();
  var headEl = document.getElementsByTagName('header');
  var clockEl = document.createElement("p");
  var timerInterval;
  var timercount = dayjs().hour() + ':' + dayjs().minute() + ':' + dayjs().second();
  function clockTime (){
 
}
var timerInterval = setInterval(function (){
  timercount = dayjs().hour() + ':' + dayjs().minute() + ':' + dayjs().second();
  clockEl.innerHTML= 'time: ' + timercount;

}, 1000)
 
  mainEl.appendChild(clockEl);
 clockTime(); 
  console.log(realtime);


  //we have to get the DOm before we can begin adding junk
  

  //this for loop is going to attempt to generate the same values of the HTML
  //dynamically and will get and set local storage. hour container-fluid text-center 5-px
  for (i=0; i<9; i++){
    workHour = "hour-"+(i+9);
    var hourcheck = i + 9;
    console.log(workHour);
    var entryGen = document.createElement("div");
    entryGen.setAttribute("id", workHour);
    //entryGen.setAttribute("class","row time-block");
    if (realtime == (hourcheck)){
      entryGen.setAttribute("class", "row time-block present");
    }
    else if (realtime > hourcheck){
      entryGen.setAttribute("class","row time-block past" )
    }
    else{
      entryGen.setAttribute("class", "row time-block future")
    }
    
    mainEl.appendChild(entryGen);
        //set the sub div
        var scriptRef1 = document.createElement("script", "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
        var scriptRef2 = document.createElement("script", "https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js");

        var entryGen2 = document.createElement('div');
        entryGen2.setAttribute("class","col-2 col-md-1 text-center py-3 hour" + " " + workHour);
        entryGen2.innerHTML = dayList[i].theTime;
        entryGen.appendChild(entryGen2);
        var textArea = document.createElement("textarea");
        textArea.setAttribute("class", "col-8 col-md-10 description text"+ " " + workHour);
        textArea.setAttribute("rows", '3');
        textArea.setAttribute("id", "text"+workHour);
        var testStorage = localStorage.getItem(workHour);
        //getting the local storage
        if (testStorage == undefined){
          console.log("this worked");
          dayList[i].userText = "No Appointments";
        }
        else{
          dayList[i].userText = localStorage.getItem(workHour);
        }
        textArea.innerText = dayList[i].userText;
        entryGen.appendChild(textArea);
        var btn = document.createElement("button");
        btn.setAttribute("type", "submit");
        btn.setAttribute("class", "btn saveBtn col-2 col-md-1");
        btn.setAttribute("id", "button"+workHour);
        btn.setAttribute("aria-label", "save");
        entryGen.appendChild(btn);
        var clickRead = document.createElement("i");
        clickRead.setAttribute("class", "fas fa-save");
        clickRead.setAttribute("aria-hidden", "true");
        clickRead.style = "::before";
        console.log("this is the btn " + workHour + " " +testStorage + " " + dayList[i].userText);
        btn.appendChild(clickRead);
        //btn.addEventListener("click", localStorage.setItem(workHour, dayList[i].userText));
        //btn saveBtn col-2 col-md-1 buttonhour-
      
        //btn.addEventListener("submit", setStorage(textArea.firstChild.nodeValue, textArea.className));
        
        

        
        
  }
 

  
//the net says that I am event bubbling.  I am napping then tacking this in an hour.

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var clickEvent = document.getElementById('buttonhour-9').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[0].userText = document.getElementById("texthour-9").value;
    localStorage.setItem('hour-9', dayList[0].userText);
    console.log(dayList[0].userText);
    console.log(textArea.innerText);

  
    
  
  })

  var clickEvent = document.getElementById('buttonhour-10').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[1].userText = document.getElementById("texthour-10").value;
    localStorage.setItem('hour-10', dayList[1].userText);
    console.log(dayList[1].userText);
    console.log(textArea.innerText);

  
    
  
  })
  var clickEvent = document.getElementById('buttonhour-11').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[2].userText = document.getElementById("texthour-11").value;
    localStorage.setItem('hour-11', dayList[2].userText);
    console.log(dayList[2].userText);
    console.log(textArea.innerText);

  
    
  
  })
  var clickEvent = document.getElementById('buttonhour-12').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[3].userText = document.getElementById("texthour-12").value;
    localStorage.setItem('hour-12', dayList[3].userText);
    console.log(dayList[3].userText);
    console.log(textArea.innerText);

  
    
  
  })
  var clickEvent = document.getElementById('buttonhour-13').addEventListener('click', function(event){
       
    event.preventDefault();
  
  
    dayList[4].userText = document.getElementById("texthour-13").value;
    localStorage.setItem('hour-13', dayList[4].userText);
    console.log(dayList[4].userText);
    console.log(textArea.innerText);

  
    
  
  })
  var clickEvent = document.getElementById('buttonhour-14').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[5].userText = document.getElementById("texthour-14").value;
    localStorage.setItem('hour-14', dayList[5].userText);
    console.log(dayList[5].userText);
    console.log(textArea.innerText);

  
    
  
  })
  var clickEvent = document.getElementById('buttonhour-15').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[6].userText = document.getElementById("texthour-15").value;
    localStorage.setItem('hour-15', dayList[6].userText);
    console.log(dayList[6].userText);
    console.log(textArea.innerText);

  
    
  
  })
  var clickEvent = document.getElementById('buttonhour-16').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[7].userText = document.getElementById("texthour-16").value;
    localStorage.setItem('hour-16', dayList[7].userText);
    console.log(dayList[7].userText);
    console.log(textArea.innerText);

  
    
  
  })
  var clickEvent = document.getElementById('buttonhour-17').addEventListener('click', function(event){
       
    event.preventDefault();
    
  
    dayList[8].userText = document.getElementById("texthour-17").value;
    localStorage.setItem('hour-17', dayList[8].userText);
    console.log(dayList[8].userText);
    console.log(textArea.innerText);

  
    
  
  })
});

