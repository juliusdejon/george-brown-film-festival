const sendBtn = document.querySelector("#send-message-contact");


const sendMessage = (e) => {
  e.preventDefault();
  const name = document.querySelector("#contact-name").value;
  const phone = document.querySelector("#contact-phone").value;
  const email = document.querySelector("#contact-email").value;
  const message = document.querySelector("#contact-message").value;

  if (!name || !phone || !email || !message) {
    document.querySelector("#contact-error-message").innerHTML = "Please fill up all fields";
    return;
  } else {
    document.querySelector("#contact-error-message").innerHTML = "";
    alert("Successfully Sent");
  }
};


sendBtn.addEventListener("click", sendMessage);
