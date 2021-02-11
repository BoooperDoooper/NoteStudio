const infoButton = document.getElementById("infoButton");
const notePad = document.getElementById("notePad");
const calC = document.getElementById("calcuLator");
const checkList = document.getElementById("checkList");
const dictionAry = document.getElementById("dictionAry");
const clock = document.getElementById("clock");
const clearAll = document.getElementById("clearButton");

infoButton.addEventListener("click", displayInfo); //Info Code
calC.addEventListener("click", displayCal); //Calculator Code
notePad.addEventListener("click", displayNote); //Notepad Code
checkList.addEventListener("click", displayCheck); //Checklist Code
dictionAry.addEventListener("click", displayDict); //Dictionary Code to be completed
clock.addEventListener("click", displayClock);
clearAll.addEventListener("click", hideAll);

function hideAll() {
    document.getElementById("infoBox").remove();
    document.getElementById("calBox").remove();
    document.getElementById("noteBox").remove();
    document.getElementById("checkBox").remove();
    document.getElementById("dictBox").remove();
    document.getElementById("youtubeBox").remove();
    document.getElementById("clockBox").remove();
}


function displayInfo() {
    if (document.getElementById("infoBox") == null) {
        var infoDiv = document.createElement("DIV");
        infoDiv.setAttribute("id","infoBox");
        infoDiv.innerHTML = 
            "<div id='upperDrag1' class='noSelect'><button class='innerButton' onclick='hideInfo()'>X</button><h3 class='innerH3'>Info Box</h3><p class='innerText'>This Website was proudly made during coronavirus pandemic, mostly while in quarantine. It's use is for school learning but also for taking notes while working on projects. Guillaume made his first website for your best experience. Of course, the author didn't know a single thing about javascript before. This site made him learn so much, but not as much as your going to be learning, if you use this awesome site!</p></div>";
        newDiv.appendChild(infoDiv);
    }    
}
function hideInfo() {
    document.getElementById("infoBox").remove();
}


function displayCal() {
    if (document.getElementById("calBox") == null) {
        var calDiv = document.createElement("DIV");
        calDiv.setAttribute("id", "calBox");
        calDiv.innerHTML =
            "<div id='upperDrag2' class='noSelect'><button class='innerButton' onclick='hideCal()'>X</button><h3 class='innerH3'>Calculator</h3><table><tr><td colspan='4' id='display'>0</td></tr><tr><td colspan='2' class='clearAll'><button onclick='pushBtn(`ac`)'>AC</button></td><td class='delete'><button onclick='pushBtn(`del`)'>Del</button></td><td class='operator' id='divide'><button onclick='pushBtn(`/`)'>/</button></td></tr><tr><td class='number'><button onclick='pushBtn(7)'>7</button></td><td class='number'><button onclick='pushBtn(8)'>8</button></td><td class='number'><button onclick='pushBtn(9)'>9</button></td><td class='operator' id='times'><button onclick='pushBtn(`*`)'>*</button></td></tr><tr><td class='number'><button onclick='pushBtn(4)'>4</button></td><td class='number'><button onclick='pushBtn(5)'>5</button></td><td class='number'><button onclick='pushBtn(6)'>6</button></td><td class='operator' id='minus'><button onclick='pushBtn(`-`)'>-</button></td></tr><tr><td class='number'><button onclick='pushBtn(1)'>1</button></td><td class='number'><button onclick='pushBtn(2)'>2</button></td><td class='number'><button onclick='pushBtn(3)'>3</button></td><td class='operator' id='plus'><button onclick='pushBtn(`+`)'>+</button></td></tr><tr><td class='number'><button onclick='pushBtn(`00`)'>00</button></td><td class='number'><button onclick='pushBtn(0)'>0</button></td><td class='number'><button onclick='pushBtn(`.`)'>.</button></td><td class='operator' id='equal'><button onclick='pushBtn(`=`)'>=</button></td></tr></table></div>";
         newDiv.appendChild(calDiv);
    }
}
function hideCal() {
    document.getElementById("calBox").remove();
}

function pushBtn(action) {
    var inputLabel = document.getElementById('display');
    var labelLength = document.getElementById("display").innerHTML.length

    if (action == "=") {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (action == "ac") {
        inputLabel.innerHTML = "0";
    } else if (action == "del") {
        inputLabel.innerHTML = inputLabel.innerHTML - action; // To complete with Antoniac
    } else {
        if (inputLabel.innerHTML == "0") {
            inputLabel.innerHTML = action;
        } else if (labelLength < 17) {
            inputLabel.innerHTML += action;
        } else {
            inputLabel.innerHTML = inputLabel.innerHTML;
        }
    }
}



function displayNote() {
    if (document.getElementById("noteBox") == null) {
        var noteDiv = document.createElement("DIV");
        noteDiv.setAttribute("id","noteBox");
        noteDiv.innerHTML =
            "<div id='upperDrag3' class='noSelect'><button class='innerButton' onclick='hideNote()'>X</button><h3 class='innerH3'>NotePad</h3><div><input placeholder='Unamed Note' type='text' id='noteTitle'><textarea></textarea></div</div>";
        newDiv.appendChild(noteDiv);
    }    
}
function hideNote() {
    document.getElementById("noteBox").remove();
}


function displayCheck() {
    if (document.getElementById("checkBox") == null) {
        var checkDiv = document.createElement("DIV");
        checkDiv.setAttribute("id","checkBox");
        checkDiv.innerHTML =
            "<div id='upperDrag4'class='noSelect'><button class='innerButton' onclick='hideCheck()'>X</button><h3 class='innerH3'>Check List</h3><div><ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div><input id='list1' class='list'><input id='list2' class='list'><input id='list3' class='list'><input id='list4' class='list'><input id='list5' class='list'><input id='list6' class='list'><input id='list7' class='list'><input id='list8' class='list'></div>";
        newDiv.appendChild(checkDiv);
    }   
}
function hideCheck() {
    document.getElementById("checkBox").remove();
}



function displayClock() {
    if (document.getElementById("clockBox") == null) {
        var clockDiv = document.createElement("DIV");
        clockDiv.setAttribute("id","clockBox");
        clockDiv.innerHTML = 
            "<div id='upperDrag6' class='noSelect'><button class='innerButton' onclick='hideClock()'>X</button><h3 class='innerH3'>Clock</h3><div id='sunsetImg'><div id='myClockdisplay' class='clock'></div></div></div>";
        newDiv.appendChild(clockDiv);
        function clock() {
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var period = "AM"
            if (h == 0) {
                h = 12;
            }
            if (h > 12) {
                h = h - 12;
                period = "PM"
            }
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            var time = h + ":" + m + ":" + s + " " + period;
            document.getElementById("myClockdisplay").innerText = time;
            document.getElementById("myClockdisplay").textContent = time;
            setTimeout(clock, 1000);
        }
        clock();
    }    
}
function hideClock() {
    document.getElementById("clockBox").remove();
}








function displayDict () {
    if (document.getElementById("dictBox") == null) {
        var dictDiv = document.createElement("DIV");
        dictDiv.setAttribute("id","dictBox");
        dictDiv.innerHTML =
            "<div id='upperDrag5' class='noSelect'><button class='innerButton' onclick='hideDict()'>X</button><h3 class='innerH3'>Dictionary</h3><input type='text' id='wordInput' spaceholder='Enter Word'><button id='searchBtn' onclick='searchWord()'>Search</button><div id='defBox'></div></div>";
        newDiv.appendChild(dictDiv);
    }
}
function hideDict() {
    document.getElementById("dictBox").remove();
}

function searchWord() {

    var word = document.querySelector("#wordInput").value.trim();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((data) => data.json())
      .then((data) => {
        if (!data.title) {
          document.getElementById("defBox").innerHTML = data[0].word;
          document.getElementById(
            "defBox"
          ).innerHTML += `<br><br>${data[0].meanings[0].definitions[0].definition}`;
        }
      });
  }



  var draggedElement; //element that's dragged
  var xOffset=10; //the defualt offset of the elements
  var yOffset=10;
  
  //calls function when mouse in down
  function dragStart(element){
      //gets the element
      draggedElement = element;
  
      //sets the element to the defualt position if there is not set position
      if(draggedElement.parentNode.style.left == "")
          draggedElement.parentNode.style.left = "5px";
      if(draggedElement.parentNode.style.top == "")
          draggedElement.parentNode.style.top = "0px";
  
      //get the position of the cursors
      xOffset = MouseEvent.pageX-parseInt(draggedElement.parentNode.style.left);
      yOffset = MouseEvent.pageY-parseInt(draggedElement.parentNode.style.top);
  
      //adds eventListeners and remove them after drag is finished
      //the reason we can't just add eventListeners to the elements that going to be drags is because if the mouse moves too fast it goes out of the element and stops dragging.
      document.addEventListener("mousemove",drag);
      document.addEventListener("mouseup",endDrag);
  
      //increase and size and box shadow when dragging
      draggedElement.parentNode.style.boxShadow = "5px 5px 15px var(--shadow-dark)";
      draggedElement.parentNode.style.transform = "scale(1.01)";
  
      //make the iframes have no pointer events so you can still drag when over them
      elements = document.getElementsByTagName("iframe");
      for(let i = 0; i < elements.length; i++){
          elements[i].classList.add("no-pointer");
      }
  }
  
  function drag(e){
      //called ever time the mouse moves and moves the window to the mouse
      draggedElement.parentNode.style.left = (e.pageX-xOffset)+"px";
      //makes it not possible to drag under the header
      if(e.pageY>70)
          draggedElement.parentNode.style.top = (e.pageY-yOffset)+"px";
  }
  
  //ends the drag and removes the eventListeners
  function endDrag(e){
      document.removeEventListener("mousemove",drag);
      draggedElement.parentNode.style.boxShadow = "5px 5px 15px var(--shadow)"
      draggedElement.parentNode.style.transform = "scale(1)"
      elements = document.getElementsByTagName("iframe");
      for(let i = 0; i < elements.length; i++){
          elements[i].classList.remove("no-pointer");
      }
  }