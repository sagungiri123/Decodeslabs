const Chat = (() => {
  let messageListEl, emptyStateEl, chatMainEl, typingIndicatorEl;
  let composerForm, messageInput, sendBtn;
  let onMessageSent;

  function init({ onSend }) {
    messageListEl = document.getElementById('messageList');
    emptyStateEl = document.getElementById('emptyState');
    chatMainEl = document.getElementById('chatMain');
    typingIndicatorEl = document.getElementById('typingIndicator');
    composerForm = document.getElementById('composerForm');
    messageInput = document.getElementById('messageInput');
    sendBtn = document.getElementById('sendBtn');
    onMessageSent = onSend;

    messageInput.addEventListener('input', () => {
      autoGrow();
      sendBtn.disabled = messageInput.value.trim().length === 0;
    });

    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitMessage();
      }
    });

    composerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitMessage();
    });
  }

  function autoGrow() {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 200) + 'px';
  }

  function submitMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    onMessageSent(text);

    messageInput.value = '';
    messageInput.style.height = 'auto';
    sendBtn.disabled = true;
    messageInput.focus();
  }

  function renderMessages(messages) {
    if (!messages || messages.length === 0) {
      emptyStateEl.hidden = false;
      messageListEl.hidden = true;
      messageListEl.innerHTML = '';
      return;
    }

    emptyStateEl.hidden = true;
    messageListEl.hidden = false;
    messageListEl.innerHTML = '';

    messages.forEach(msg => messageListEl.appendChild(buildBubble(msg)));
    Utils.scrollToBottom(chatMainEl, false);
  }

  function appendMessage(msg) {
    emptyStateEl.hidden = true;
    messageListEl.hidden = false;
    messageListEl.appendChild(buildBubble(msg));
    Utils.scrollToBottom(chatMainEl, true);
  }

  function buildBubble(msg) {
    const wrapper = document.createElement('div');
    wrapper.className = `message message--${msg.role === 'user' ? 'user' : 'bot'}`;

    const bubble = document.createElement('div');
    bubble.className = 'message__bubble';
    bubble.textContent = msg.text;

    const meta = document.createElement('p');
    meta.className = 'message__meta';
    meta.textContent = Utils.formatTime(msg.timestamp);

    wrapper.append(bubble, meta);
    return wrapper;
  }

  function showTyping() {
    typingIndicatorEl.hidden = false;
    Utils.scrollToBottom(chatMainEl, true);
  }

  function hideTyping() {
    typingIndicatorEl.hidden = true;
  }

  return { init, renderMessages, appendMessage, showTyping, hideTyping };
})();