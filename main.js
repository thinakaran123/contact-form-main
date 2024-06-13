document.getElementById("btn").addEventListener("click", function (event) {
  // Prevent the default form submission
  event.preventDefault();
  //asigning variables
  let firstname = document.getElementById("first_name");
  let lastname = document.getElementById("last_name");
  //variables for mail
  let maillabel = document.getElementById("label_for_mail");

  const mailvalue = document.getElementById("mailbox").value;

  //variables for radic buttons
  let generalradio = document.getElementById("general_enquiry");

  let supportradio = document.getElementById("support_request");
  //variables for msg box
  let varmsgboxinput = document.getElementById("message_box").value;

  //variables for tickbox
  let tb = document.getElementById("cb");

  //----------conditions------------
  //if condition for firstname
  if (firstname.value === "") {
    msg_for_firstname.style.display = "block";
    firstname.style.borderColor = "hsl(0, 66%, 54%)";
  }
  //if condition for lastname
  if (lastname.value === "") {
    msg_for_lastname.style.display = "block";
    lastname.style.borderColor = "hsl(0, 66%, 54%)";
    maillabel.style.marginTop = "20px";
  }

  //codition for mail box
  if (mailvalue.length === 0) {
    msg_for_mail.style.display = "block";
    mailbox.style.borderColor = "hsl(0, 66%, 54%)";
    msg_for_mail.style.marginTop = "5px";
  }

  if (mailvalue.value !== "") {
    if (
      mailvalue.includes(".") === false ||
      mailvalue.includes("@") === false
    ) {
      msg_for_invalid_mail.style.display = "block";
    }
  }
  // condition for query
  if (generalradio.checked == false && supportradio.checked == false) {
    msg_for_query.style.display = "block";
  }

  //codition for message box
  if (varmsgboxinput.length === 0) {
    message_box.style.borderColor = "hsl(0, 66%, 54%)";
    msg_or_txtbox.style.display = "block";
  }

  //last tick box
  if (tb.checked == false) {
    tickboxmsg.style.display = "block";
  }

  //condition for success box
  if (
    firstname.value !== "" &&
    lastname.value !== "" &&
    (mailvalue.includes("@") || mailvalue.includes(".")) &&
    (generalradio.checked == true || supportradio.checked == true) &&
    varmsgboxinput.length !== 0 &&
    tb.checked == true
  ) {
    divforflexsuccessmsg.style.visibility = "visible";
  }
});

//function for changing background color of query box
qbox1 = document.getElementById("querytypediv-q1");
qbox2 = document.getElementById("querytypediv-q2");

document
  .getElementById("general_enquiry")
  .addEventListener("change", function () {
    qbox1.style.backgroundColor = "hsl(148, 38%, 91%)";
    qbox2.style.backgroundColor = "";
  });

document
  .getElementById("support_request")
  .addEventListener("change", function () {
    qbox1.style.backgroundColor = "";
    qbox2.style.backgroundColor = "hsl(148, 38%, 91%)";
  });
