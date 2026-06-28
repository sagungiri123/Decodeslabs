const App = (() => {
  let state = Storage.getDefaultState();
  const activeChatTitleEl = document.getElementById('activeChatTitle');
  const newChatBtn = document.getElementById('newChatBtn');

  function persist() {
    Storage.save(state);
  }

  function getActiveChat() {
    return state.chats.find(c => c.id === state.activeChatId) || null;
  }

  function refreshSidebar() {
    Sidebar.render(state.chats, state.activeChatId);
  }

  function refreshHeader() {
    const chat = getActiveChat();
    activeChatTitleEl.textContent = chat ? chat.title : 'New conversation';
  }

  function selectChat(chatId) {
    state.activeChatId = chatId;
    persist();
    refreshSidebar();
    refreshHeader();
    Chat.renderMessages(getActiveChat()?.messages || []);
  }

  function createChat() {
    const chat = {
      id: Utils.generateId(),
      title: 'New conversation',
      createdAt: Date.now(),
      messages: []
    };
    state.chats.push(chat);
    state.activeChatId = chat.id;
    persist();
    refreshSidebar();
    refreshHeader();
    Chat.renderMessages([]);
  }

  function deleteChat(chatId) {
    const wasActive = chatId === state.activeChatId;
    state.chats = state.chats.filter(c => c.id !== chatId);

    if (wasActive) {
      state.activeChatId = state.chats[0]?.id || null;
    }
    persist();
    refreshSidebar();
    refreshHeader();
    Chat.renderMessages(getActiveChat()?.messages || []);
  }

  function renameChat(chatId, newTitle) {
    const chat = state.chats.find(c => c.id === chatId);
    if (!chat) return;
    chat.title = newTitle;
    persist();
    refreshSidebar();
    refreshHeader();
  }

  function deriveTitleFromText(text) {
    return Utils.truncate(text, 40);
  }

  function handleSend(text) {
    let chat = getActiveChat();

    // Auto-create a conversation if none is active yet.
    if (!chat) {
      chat = {
        id: Utils.generateId(),
        title: 'New conversation',
        createdAt: Date.now(),
        messages: []
      };
      state.chats.push(chat);
      state.activeChatId = chat.id;
    }

    const isFirstMessage = chat.messages.length === 0;
    const userMsg = { id: Utils.generateId(), role: 'user', text, timestamp: Date.now() };
    chat.messages.push(userMsg);

    if (isFirstMessage) {
      chat.title = deriveTitleFromText(text);
    }

    persist();
    refreshSidebar();
    refreshHeader();
    Chat.appendMessage(userMsg);

    simulateReply(chat);
  }

  function simulateReply(chat) {
    Chat.showTyping();
    const delay = 600 + Math.random() * 700;

    setTimeout(() => {
      Chat.hideTyping();
      const botMsg = {
        id: Utils.generateId(),
        role: 'assistant',
        text: buildEchoReply(chat.messages[chat.messages.length - 1].text),
        timestamp: Date.now()
      };
      chat.messages.push(botMsg);
      persist();
      Chat.appendMessage(botMsg);
    }, delay);
  }

  function buildEchoReply(userText) {
    return `You said: "${userText}". This interface stores state locally — connect a real API in js/chat.js to replace this echo.`;
  }

  function init() {
    state = Storage.load();

    Theme.init();
    Sidebar.init({
      onSelect: selectChat,
      onDelete: deleteChat,
      onRename: renameChat
    });
    Chat.init({ onSend: handleSend });

    newChatBtn.addEventListener('click', createChat);

    refreshSidebar();
    refreshHeader();
    Chat.renderMessages(getActiveChat()?.messages || []);
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);