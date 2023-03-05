import { useState, useEffect } from 'react';

const TMessage = ({ show, message, type = 'info', timeout = 3000, width = '100%', height = 'auto' }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setVisible(false);
      }, timeout);
    }
    return () => clearTimeout(timer);
  }, [show, timeout]);

  const backgroundColor = (() => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-200';
      case 'success':
        return 'bg-green-200';
      case 'error':
        return 'bg-red-200';
      default:
        return 'bg-blue-200';
    }
  })();

  return (
    <>
      {visible && (
        <div className={`fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full z-50`}>
          <div
            className={`flex items-center justify-center rounded-md shadow-md text-gray-800 ${backgroundColor}`}
            style={{ width: width, height: height }}
          >
            <span className="px-4 py-2">{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default TMessage;
