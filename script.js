document.addEventListener("DOMContentLoaded", () => {
  const pages = ["page1","page2","page3","page4","page5","page6"];
  function showPage(id){
    pages.forEach(p => {
      document.getElementById(p).classList.remove("active");
      document.getElementById(p).classList.add("hidden");
    });
    document.getElementById(id).classList.add("active");
    document.getElementById(id).classList.remove("hidden");
  }

  // Start on page1
  showPage("page1");

  // Page1 buttons
  document.getElementById("yesButton").addEventListener("click", ()=>showPage("page3"));
  document.getElementById("noButton").addEventListener("click", ()=>showPage("page2"));

  // Page2 buttons
  document.getElementById("okayFineButton").addEventListener("click", ()=>showPage("page3"));
  document.getElementById("stillNoButton").addEventListener("click", ()=>{
    showPopup("⚠️ Please Fatima maaf kar do yaar 😭 Apka hi baccha hu me 💔");
  });

  // Page3
  document.getElementById("nextPage3Button").addEventListener("click", ()=>showPage("page4"));

  // Page4
  document.getElementById("nextPage4Button").addEventListener("click", ()=>showPage("page5"));

  // Page5
  document.getElementById("forgiveFullyButton").addEventListener("click", ()=>showPage("page6"));
  document.getElementById("stillAngryButton").addEventListener("click", ()=>{
    showPopup("Please ap maaf kar do 😭 I’m really sorry, apka hi baccha hu me 💔");
  });

  // Page6 video
  document.getElementById("playSorryVideoButton").addEventListener("click", ()=>{
    document.getElementById("videoContainer").classList.remove("hidden");
    document.getElementById("sorryVideo").play();
  });
});

// Popup logic
function showPopup(msg){
  const pop = document.getElementById("globalPopup");
  document.getElementById("popupText").innerText = msg;
  pop.classList.remove("hidden");
}
function hidePopup(){
  document.getElementById("globalPopup").classList.add("hidden");
}
