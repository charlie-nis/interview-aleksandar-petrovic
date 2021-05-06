const Backdrop = ({ show, closeModal }) => {
  return show ? <div className='Backdrop' onClick={closeModal}></div> : null;
};

export default Backdrop;
