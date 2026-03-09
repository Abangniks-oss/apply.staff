window.onload = () => {

setTimeout(()=>{
document.getElementById("loading").style.display="none";
},2000)

}

const webhook = "https://canary.discord.com/api/webhooks/1480527953812127845/cKRhUyevgeATndir7BsDVKUSxc531KYzMtX0cTEMJ9YqgnjKWpT1ZP4x6b0u_Bv1hy4S";

document.getElementById("form").addEventListener("submit",async(e)=>{

e.preventDefault();

let q1=document.getElementById("q1").value
let q2=document.getElementById("q2").value
let q3=document.getElementById("q3").value
let q4=document.getElementById("q4").value

const data={

embeds:[{

title:"📨 Staff Application",

color:16711680,

fields:[

{name:"Bisa dipercayai?",value:q1},

{name:"Yakin kontribusi?",value:q2},

{name:"Pengetahuan staff",value:q3},

{name:"Alasan bergabung",value:q4}

]

}]

}

await fetch(webhook,{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify(data)

})

alert("Application berhasil dikirim!")

})