function myFunction() {
  document.getElementById("contact-form").className = "contact-form1";
  document.getElementById("print").className = "styleDiv";
  let fname,lname,email,subject,message;
  fname = 'Name      : ';
  lname = 'Last name : ';
  email = 'Email     : ';
  subject = 'Subject : ';
  message = 'Message : ';
   fname += document.getElementById("fname").value;
   lname += document.getElementById("lname").value;
   email += document.getElementById("mail").value;
   subject += document.getElementById("subject").value;
   message += document.getElementById("message").value;
  document.getElementById("fname-holder").innerHTML = fname;
  document.getElementById("lname-holder").innerHTML = lname;
  document.getElementById("email-holder").innerHTML = email;
  document.getElementById("sub-holder").innerHTML = subject;
  document.getElementById("msg-holder").innerHTML = message;
}

