const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const count = document.getElementById("countlabel");

let Count = 0;
increaseBtn.onclick = function(){
    Count++;
    document.getElementById("countlabel").textContent = Count
};

decreaseBtn.onclick = function(){
    Count--;
    document.getElementById("countlabel").textContent = Count
};

resetBtn.onclick = function(){
    Count = 0;
    document.getElementById("countlabel").textContent = Count
};