function sendMessage() {
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

    // Add "Seen" after 4 seconds delay
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

function createReceivedMessageSection() {
  var receivedMessageSection = document.createElement("div");
  receivedMessageSection.classList.add("message", "received");
  receivedMessageSection.innerHTML = `
        <div class="message-dis"><img class="img" src="https://i.ibb.co/znCFVm5/cute-handsome-man-round-avatar-icon-symbol-vector-16831401-removebg-preview.png" alt="Demo Photo" class="profile-photo"/> <p class="message-name">Saifuddin</p></div>
        <div>
            <span class="message-text">Welcome, Admin!. I am just a Chat Bot. Thank you. </span>
        </div>`;
  return receivedMessageSection;
}
function createMessageElement(message, type) {
  var messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.innerHTML = `
    <div class="message-div relative self-end">
    <div>
    <div class="message-box">
    <p class="message-name">Sabbir Hasan</p>
    <img class="img" src="https://i.ibb.co/fDDyFwW/rsz-1sabbir.jpg" alt="image">
    </div>
    <div>
    <div class="message-two"><span>${message}</span></div>
    </div>
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
