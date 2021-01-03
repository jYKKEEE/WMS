const AddSlotButton = (props) => {
  const { shelf } = props;

  return (
    <div>
      <button
        onClick={() => {
          console.log(`check`);
          shelf.slots.push({
            barcode: Math.ceil(Math.random() * 9999999999),
            level: 0,
            slot: 5,
            products: [],
          });
        }}
      >
        add slot
      </button>
    </div>
  );
};
export default AddSlotButton;
