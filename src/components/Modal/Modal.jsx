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
        <div className="flex flex-col items-center justify-center md:w-1/4 w-[95%] gap-2 rounded-md dark:bg-slate-700 bg-slate-200 md:h-1/4 h-1/2">
          <div>{props.text}</div>
          <button
            className="flex justify-center px-4 py-1 font-semibold rounded w-30 bg-rose-500/90 dark:text-slate-100 text-slate-950"
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
