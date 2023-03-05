function showMessage({ show, position = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', width = 'max-w-sm', height = 'h-12', color = 'bg-green-500', message = 'Message', duration = 3000, onClose }) {
  const messageContainer = document.createElement('div');
  messageContainer.className = `${position} z-50 ${width} ${height} ${color} opacity-0 pointer-events-none flex justify-center items-center`;
  const messageText = document.createElement('span');
  messageText.className = 'text-white text-center';
  messageText.innerText = message;
  messageContainer.appendChild(messageText);

  const showMsg = () => {
    messageContainer.classList.add('opacity-100', 'pointer-events-auto');
    setTimeout(() => {
      hideMsg();
    }, duration);
  };

  const hideMsg = () => {
    messageContainer.classList.remove('opacity-100', 'pointer-events-auto');
    if (onClose) {
      onClose();
    }
  };

  document.body.appendChild(messageContainer);

  const updateMessage = (options) => {
    if (options.show) {
      showMsg();
    } else {
      hideMsg();
    }
    if (options.message) {
      messageText.innerText = options.message;
    }
    if (options.color) {
      messageContainer.classList.remove(color);
      messageContainer.classList.add(options.color);
    }
    if (options.width) {
      messageContainer.classList.remove(width);
      messageContainer.classList.add(options.width);
    }
    if (options.height) {
      messageContainer.classList.remove(height);
      messageContainer.classList.add(options.height);
    }
    if (options.duration) {
      duration = options.duration;
    }
    if (options.position) {
      messageContainer.classList.remove(position);
      messageContainer.classList.add(options.position);
    }
  };

  updateMessage({ show });

  return updateMessage;
}

const storage = {
  get(key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data || [];
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  add(key, value) {
    const data = this.get(key);
    data.push(value);
    this.set(key, data);
  },
  remove(key, index) {
    const data = this.get(key);
    data.splice(index, 1);
    this.set(key, data);
  },
  update(key, index, value) {
    const data = this.get(key);
    data[index] = value;
    this.set(key, data);
  },
  addUser(key, username, name = '', password = '') {
    const data = this.get(key);
    const existingUserIndex = data.findIndex(user => user.username === username);
    if (existingUserIndex === -1) {
      data.push({ username, password, name });
    } else {
      const existingUser = data[existingUserIndex];
      data[existingUserIndex] = { ...existingUser, password, name };
    }
    this.set(key, data);
  },
  userExists(key, username) {
    const data = this.get(key);
  
    return data.some(user => user.username === username);
  }
  
};


export {showMessage,storage} ;
