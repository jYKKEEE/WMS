import { Link } from "react-router-dom";
function addButton(props) {
  const { product } = props;
  return (
    <Link to="/add">
      <div
        onClick={() => {
          alert(`clickki toiminto puuttuu`);
        }}
      >
        Add to this slot
      </div>
    </Link>
  );
}
export default addButton;
