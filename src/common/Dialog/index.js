import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export const Dialog = ({ isOpen, onClose, children }) => {
  // Close dialog on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="dialog-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      aria-label="Dialog overlay"
    >
      <div
        className="dialog-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1} // make focusable for screen readers
      >
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
