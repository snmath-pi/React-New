import Proptypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number,
  isStudent: Proptypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;
