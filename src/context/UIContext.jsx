import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/Toast';
import ConfirmModal from '../components/ConfirmModal';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    message: '',
    onConfirm: null,
  });

  const showToast = useCallback((message, type = 'info') => {
    console.log('UIContext: showToast called!', { message, type });
    const id = Date.now();
    setToasts((prev) => {
      const next = [...prev, { id, message, type }];
      console.log('UIContext: current toasts:', next);
      return next;
    });
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      console.log('UIContext: auto-removing toast:', id);
      setToasts((prev) => prev.filter(toast => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter(toast => toast.id !== id));
  }, []);

  const confirmAction = useCallback((message, onConfirm) => {
    setConfirmState({
      isOpen: true,
      message,
      onConfirm: async () => {
        try {
          await onConfirm();
        } finally {
          setConfirmState(prev => ({ ...prev, isOpen: false }));
        }
      }
    });
  }, []);

  const cancelConfirm = useCallback(() => {
    setConfirmState(prev => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <UIContext.Provider value={{ showToast, confirmAction }}>
      {children}
      
      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast 
            key={toast.id} 
            message={toast.message} 
            type={toast.type} 
            onClose={() => removeToast(toast.id)} 
          />
        ))}
      </div>

      {/* Confirmation Modal */}
      {confirmState.isOpen && (
        <ConfirmModal 
          message={confirmState.message} 
          onConfirm={confirmState.onConfirm} 
          onCancel={cancelConfirm} 
        />
      )}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
