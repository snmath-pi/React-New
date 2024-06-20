import PropTypes from "prop-types";

function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h2>Welcome {props.username}</h2>
  ) : (
    <h2>Please log in</h2>
  );
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "John Doe",
};
export default UserGreeting;
