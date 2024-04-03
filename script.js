var sentMessages = 0;

function sendMessage() {
  sentMessages = sentMessages + 1;
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value.trim();
  if (message !== "") {
    var chatMessages = document.getElementById("chat-messages");
    var sentMessageElement = createMessageElement(message, "sent");
    chatMessages.appendChild(sentMessageElement);

    // Add a tick mark after 2 seconds delay
    setTimeout(function () {
      var receivedDoneSection = createDoneSection();
      sentMessageElement.appendChild(receivedDoneSection);
      setTimeout(function () {
        sentMessageElement.removeChild(receivedDoneSection);
        var deliveredSection = creteDeliveredSection();
        sentMessageElement.appendChild(deliveredSection);
        setTimeout(function () {
          sentMessageElement.removeChild(deliveredSection);
        }, 1400);
      }, 1100);
    }, 400);

    setTimeout(function () {
      var readSection = createReadSection();
      sentMessageElement.appendChild(readSection);
      setTimeout(function () {
        // sentMessageElement.removeChild(readSection);
        var typing = createTypingSection();
        chatMessages.appendChild(typing);
        setTimeout(function () {
          chatMessages.removeChild(typing);
          var receivedMessageSection = createReceivedMessageSection();
          chatMessages.appendChild(receivedMessageSection);
          // var value = document.getElementById("received-message");
          typeWriterDriver();
          chatMessages.insertBefore(receivedMessageSection, sentMessageElement);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 3000);
      }, 3000);
    }, 3000);

    // Scroll to bottom after adding the message
    chatMessages.scrollTop = chatMessages.scrollHeight;
    messageInput.value = "";
  }
}

function typeWriterDriver() {
  var i = 0;
  var txt = "Welcome, Admin!. I am just a Chat Bot. Thank you.";
  var speed = 50;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById(`received-message-${sentMessages}`).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}


function createReceivedMessageSection() {
  // var demoDiv = document.createElement('div');
  var receivedMessageSection = document.createElement("div");
  receivedMessageSection.classList.add("message", "received");
  receivedMessageSection.innerHTML = `
        <div class="message-dis"><img class="img" src="https://i.ibb.co/znCFVm5/cute-handsome-man-round-avatar-icon-symbol-vector-16831401-removebg-preview.png" alt="Demo Photo" class="profile-photo"/> <p class="message-name">Saifuddin</p></div>
        <div>
            <span id="received-message-${sentMessages}" class="message-text"></span>
        </div>`;

  return receivedMessageSection;
}

// Keep track of the last sender message
var lastSenderMessage = null;

function createMessageElement(message, type) {
  var messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  
  if (type === "sent") {
    // If it's a sent message, only show the sender image if it's the last sender message
    if (lastSenderMessage !== null) {
      lastSenderMessage.querySelector('.message-box img').style.display = 'none';
    }
    lastSenderMessage = messageElement;
  }

  messageElement.innerHTML = `
    <div class="message-div relative self-end">
    <div class="message-box">
    <p class="message-name">Sabbir Hasan</p>
    <img class="img" src="https://i.ibb.co/fDDyFwW/rsz-1sabbir.jpg" alt="image">
    </div>
    <div class="message-two">${message}</div>
    </div>
    </div>
    `;
  //messageElement.textContent = message;
  return messageElement;
}

function createDoneSection() {
  var receivedDoneSection = document.createElement("div");
  receivedDoneSection.classList.add("message", "received");
  receivedDoneSection.innerHTML = `
    <div class="right-section">
        <div class="done-icon absolute -top-9 right-9 z-4"></div>
    </div>`;
  return receivedDoneSection;
}

function creteDeliveredSection() {
  var deliveredSection = document.createElement("div");
  deliveredSection.classList.add("message", "received");
  deliveredSection.innerHTML = `
        <div class="right-section">
        <div class="done-icon-delivered absolute -top-9 right-9 z-4"></div>
        </div>`;
  return deliveredSection;
}

function createReadSection() {
  var readSection = document.createElement("div");
  readSection.classList.add("message", "received");
  readSection.innerHTML = `
        <div class="right-section">
        <div class="done-icon-read absolute -top-9 right-9 z-4"></div>
        </div>`;
  return readSection;
}

function createTypingSection() {
  var typing = document.createElement("div");
  typing.classList.add("message", "received");
  typing.innerHTML = `
    <div class="loadingContainer max-w-max absolute left-[25%] bottom-14">
        <div class="text">Saifuddin is typing</div>
        <div class="dot-wave">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
    `;
  return typing;
}