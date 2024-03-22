import React from "react";

const Modal = (props) => {
  const handleModalButton = () => {
    props.closeModal();
  };

  return (
    <>
      <div
        className={`absolute top-0 w-full h-full ${
          props.visibility === "hidden"
            ? "pointer-events-none"
            : "pointer-events-auto"
        } bg-slate-700/70 justify-center items-center ${props.visibility}`}
      >
        <div className="flex flex-col items-center justify-center w-1/4 gap-2 rounded-md bg-slate-700 h-1/4">
          <div>{props.text}</div>
          <button
            className="flex justify-center px-4 py-1 rounded w-30 bg-rose-500/90"
            onClick={handleModalButton}
          >
            {props.btnText}
          </button>
        </div>
      </div>
    </>
  );
};
export default Modal;
