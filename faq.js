const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.getElementsByClassName("accordian_body")[0]
const faqs = [];
showFaq();

function showFaq() {
  console.log("show faqs...");

  faqData.forEach(element => {
    var listItem=createFaq(element.question,element.answer);
    bindTaskEvents(listItem);
    accordianBody.appendChild(listItem);
  });


}

function createFaq(qst,ans) {

  console.log("create faq...");
    var listItem=document.createElement("div");
    listItem.className="faq"
    var headerItem=document.createElement("div");
    headerItem.className="faq_header"
    //heading
    var heading=document.createElement("h3");//heading
    //label
    var label=document.createElement("p");//label
    //button
    var buttonstatus=document.createElement("button");// button

    heading.innerText=qst;
    label.innerText=ans;
    label.style.display="none";
    buttonstatus.innerText="+";//innerText encodes special characters, HTML does not.
    buttonstatus.className="show_btn";
    headerItem.appendChild(heading);
    headerItem.appendChild(buttonstatus);
    listItem.appendChild(headerItem);
    listItem.appendChild(label);
    return listItem;
  }

  function bindTaskEvents(taskListItem){
    console.log("bind list item events");
    var showButton=taskListItem.querySelector("button.show_btn");
    showButton.onclick=btnStatusUpdate;
 }

function btnStatusUpdate() {
  var listItem=this.parentNode;
  var showButton=listItem.querySelector("button.show_btn");
  var parentItem=listItem.parentNode;
  var answerp=parentItem.querySelector("p");
  if(showButton.innerText=="+"){
    answerp.style.display="block";
    showButton.innerText="-";
  }
  else{
  answerp.style.display="none";
  showButton.innerText="+";
}


}


