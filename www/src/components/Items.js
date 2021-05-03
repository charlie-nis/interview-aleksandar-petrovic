import Item from './Item';

const Items = ({ items, onDelete, onToggleCompleted, onEdit }) => {
  return (
    <div className='col'>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} onToggleCompleted={onToggleCompleted} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default Items;
