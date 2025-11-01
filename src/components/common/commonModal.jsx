import { useEffect } from "react";
import closeIcon from "../../assets/closeIcon.svg";
import { cn } from "../../utils/utils";

const ModalComponent = ({
  isOpen,
  children,
  onClose,
  closable = true,
  className,
  showCloseIcon = true,
  width,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen && closable) {
        onClose?.();
      }
    };
    if (isOpen) {
      document.body.classList.add("no_scroll");
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.classList.remove("no_scroll");
      document.addEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    if (closable) onClose?.();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const customWidthClass = width ? width : "w-[520px]";
  return (
    <div
      className={cn(
        "fixed inset-0 z-[1000] flex items-start justify-center overflow-auto bg-black/45 backdrop-blur-[5px]",
        className
      )}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          "modal_component_w m-auto max-w-[calc(100vw-32px)] pointer-events-auto",
          customWidthClass
        )}
        onClick={handleModalClick}
      >
        <div className="relative bg-white rounded-lg shadow-[0_6px_16px_rgba(0,0,0,0.08),0_3px_6px_-4px_rgba(0,0,0,0.12),0_9px_28px_8px_rgba(0,0,0,0.05)] overflow-hidden">
          {showCloseIcon && (
            <button
              className="absolute top-[12px] right-[5%] z-[10] w-[32px] h-[32px] p-0 cursor-pointer flex_center_center"
              onClick={onClose}
            >
              <img src={closeIcon} alt="Close" width={25} />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
