import Item from './Item';

const Items = ({ items, onDelete, onToggleCompleted }) => {
  return (
    <div className='col'>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} onToggleCompleted={onToggleCompleted} />
      ))}
    </div>
  );
};

export default Items;
