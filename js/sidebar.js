const Storage = (() => {
  const STORAGE_KEY = 'chatInterface.state.v1';

  function getDefaultState() {
    return { activeChatId: null, chats: [] };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.chats)) return getDefaultState();
      return parsed;
    } catch (err) {
      console.error('Storage: failed to load state, resetting.', err);
      return getDefaultState();
    }
  }

  function save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (err) {
      console.error('Storage: failed to persist state.', err);
      return false;
    }
  }

  function clearAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (err) {
      console.error('Storage: failed to clear state.', err);
      return false;
    }
  }

  return { load, save, clearAll, getDefaultState };
})();