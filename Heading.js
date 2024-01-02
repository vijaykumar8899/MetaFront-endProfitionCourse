import "../index.css";

function Heading(props) {
  return (
    <div className="Heading-section">
      <div>
        <p>Hello, {props.name}</p>
      </div>
      {/* <div>
        <h2>{props.data}</h2>
      </div> */}
    </div>
  );
}

export default Heading;
