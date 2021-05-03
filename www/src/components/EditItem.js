import { useEffect } from 'react';
import M from 'materialize-css';
const EditItem = () => {
  useEffect(() => {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: '4%',
      endingTop: '10%',
    };
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, options);
    //M.Modal.getInstance(elems).open();
  }, []);

  return (
    <div id='modal1' className='modal'>
      <div className='modal-content'>
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'>
          Agree
        </a>
      </div>
    </div>
  );
};

export default EditItem;
