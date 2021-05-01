import { MdCancel } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdRadioButtonUnchecked } from 'react-icons/md';

const Item = ({ item, onDelete, onToggleCompleted }) => {
  return (
    <div className=''>
      <h4>
        <span>
          {item.completed ? (
            <>
              <MdCheckCircle style={{ color: 'green', cursor: 'pointer' }} onClick={() => onToggleCompleted(item.id)} />
              <span style={{ textDecoration: 'line-through' }}> {item.text}</span>
            </>
          ) : (
            <>
              <MdRadioButtonUnchecked style={{ color: 'gray', cursor: 'pointer' }} onClick={() => onToggleCompleted(item.id)} />
              {item.text}
              <MdModeEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={() => onToggleCompleted(item.id)} />
            </>
          )}
        </span>

        <MdCancel style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(item.id)} />
      </h4>
    </div>
  );
};

export default Item;
