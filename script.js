
let name=document.getElementById("name");
let email=document.getElementById("email");
let addres=document.getElementById("addres");
let phone=document.getElementById("phone");
let summary =document.getElementById("summary");


let degre=document.getElementById("degre");
let colg=document.getElementById("colg");
let year=document.getElementById("year");
let cgp=document.getElementById("cgp");

let company=document.getElementById("company");
let role=document.getElementById("role");
let duration=document.getElementById("duration");
let decp=document.getElementById("decp");

let skill=document.getElementById("skill");

let title=document.getElementById("title");
let prodec=document.getElementById("prodec");
let tech=document.getElementById("tech");


let final=document.getElementById("final");

let addbtn=document.getElementById("addbtn");
let add2=document.getElementById("add2");
let add3=document.getElementById("add3");
let add4=document.getElementById("add4");
let add5=document.getElementById("add5");



addbtn.addEventListener( "click" ,()=>{
    
final.innerHTML = "<h1 id='resume'style='align-self: anchor-center;'><b>Resume</b></h1>";

let div = document.createElement("div");
    div.class = "a"
div.innerHTML = `

  <p class="one">${name.value}</p>
  <p class="to">${email.value}</p>
  <p class="to">${phone.value}</p>
  <p class="to">${addres.value}</p>
  <p class="to">${summary.value}</p>
`;
final.appendChild(div);

form1.style.display="none";
form2.style.display="flex";
})

add2.addEventListener( "click",()=>{
    

    let div2 = document.createElement("div");
    div2.class = "a"
    div2.innerHTML=`
    
    <h3>Education Details </h3>
    <\hr>
    <p class="to">${degre.value}</p>
    <p class="to">${colg.value}</p>
    <p class="to">${year.value}</p>
    <p class="to">${cgp.value}</p>
    `;
     final.appendChild(div2);

     form2.style.display="none";
     form3.style.display="flex"

})

add3.addEventListener( "click",()=>{
    let div3=document.createElement("div");
    div3.class = "a"
    div3.innerHTML=`
    <h3>Experience Details </h3>
    <\hr>
    <p class="to">${company.value}</p>
    <p class="to">${role.value}</p>
    <p class="to">${duration.value}</p>
    <p class="to">${decp.value}</p>
    `;
    final.appendChild(div3);

    form3.style.display="none";
    form4.style.display="flex";
})

add4.addEventListener( "click",()=>{
    let div4=document.createElement("div");
    div4.class = "a"
    div4.innerHTML=`
    <h3>Skills </h3>
    <\hr>
    <p class="to">${skill.value}</p>
    `;
    final.appendChild(div4);

    form4.style.display="none";
    form5.style.display="flex";
})

add5.addEventListener( "click",()=>{
    let div5=document.createElement("div");
    div5.class = "a"
    div5.innerHTML=`
    <h3>Projects</h3>
    <\hr>
    <p class="to">${title.value}</p>
    <p class="to">${prodec.value}</p>
    <p class="to">${tech.value}</p>
    `;
    final.appendChild(div5);

    form5.style.display="none";
})
