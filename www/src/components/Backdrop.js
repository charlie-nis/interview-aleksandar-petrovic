const Backdrop = ({ show, modalHandler }) => {
  return show ? <div className='Backdrop' onClick={modalHandler}></div> : null;
};

export default Backdrop;
