function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();
    if (message !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var sentMessageElement = createMessageElement(message, 'sent');
        chatMessages.appendChild(sentMessageElement);
        
        // Add a tick mark after 2 seconds delay
        setTimeout(function() {
            var ticks = document.createElement('span');
            ticks.classList.add('tick');
            sentMessageElement.appendChild(ticks);
            setTimeout(function() {
                sentMessageElement.removeChild(ticks);
            }, 500);
        }, 500);
        

        // Add "Seen" after 4 seconds delay
        setTimeout(function() {
            var seen = document.createElement('span');
            seen.classList.add('seen');
            seen.textContent = 'Seen';
            sentMessageElement.appendChild(seen);
            setTimeout(function() {
                sentMessageElement.removeChild(seen);
            }, 2000);

            // Display "Typing..." after 6 seconds delay
            setTimeout(function() {
                var typing = document.createElement('span');
                typing.classList.add('typing');
                typing.textContent = 'Typing...';
                chatMessages.appendChild(typing);

                // Simulate receiving a demo message after a delay
                setTimeout(function() {
                    chatMessages.removeChild(typing); // Remove "Typing..."
                    var receivedMessageSection = createReceivedMessageSection();
                    chatMessages.appendChild(receivedMessageSection);
                    // Scroll to bottom after adding the message
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 500);
            }, 1000);
        }, 3000);
        
        // Scroll to bottom after adding the message
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        messageInput.value = '';
    }
}

function createMessageElement(message, type) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerHTML=`
    <div class="message-dis"><img class="img" src="https://i.ibb.co/fDDyFwW/rsz-1sabbir.jpg" alt="Demo Photo" class="profile-photo"> <p class="message-name">Sabbir Hasan</p></div>
    <div class="message-content">
            <span class="message-text">${message}</span>
    </div>
    `
    //messageElement.textContent = message;
    return messageElement;
}

function createReceivedMessageSection() {
    var receivedMessageSection = document.createElement('div');
    receivedMessageSection.classList.add('message', 'received');
    receivedMessageSection.innerHTML = `
        <div class="message-dis"><img class="img" src="https://i.ibb.co/znCFVm5/cute-handsome-man-round-avatar-icon-symbol-vector-16831401-removebg-preview.png" alt="Demo Photo" class="profile-photo"> <p class="message-name">Assistant</p></div>
        <div class="message-content">
            <span class="message-text">Welcome, Admin!. I am just a Chat Bot. Thank you. </span>
        </div>`;
    return receivedMessageSection;
}
