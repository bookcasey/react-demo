export default function Content(props) {
  return (
    <div>
      {props.loggedIn && <p>Content Goes Here!</p>}
    </div>
  );
}