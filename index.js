// hello there
document.getElementById("login-button").addEventListener("click",function(){
  let log_id = document.getElementById("input-id").value;
  let log_pswd = document.getElementById("input-pswd").value;
  if(log_id == "shirazhambi786@gmail.com" && log_pswd == "Passw@123"){
    console.log(log_id);
    console.log(log_pswd);

  }
  window.open("appointment-form.html")
});
