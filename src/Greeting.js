function Greeting(props) {
  console.log(props);

  // Solve it with a ternary
  //return props.lang === 'es' ? <p>Hola!</p> : <p>Hey there!</p>;

  return <p> {props.lang === 'es' ? 'Hola!' : 'Hey there!'} </p>


  // if (props.lang === 'en') {
  //   return (
  //     <p>Hey there!</p>
  //   );
  // } else if (props.lang === 'es') {
  //   return (
  //     <p>Hola!</p>
  //   );
  // }
}
export default Greeting;