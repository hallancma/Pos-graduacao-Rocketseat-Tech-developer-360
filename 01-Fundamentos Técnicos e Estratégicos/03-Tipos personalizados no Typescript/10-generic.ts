/*
S => state
T => type
K => key
V => valeu
E => element
*/
function useState<T extends number | string = number>() {
  let state: T;
  function get() {
    return state;
  }

  function set(newValeu: T) {
    state = newValeu;
  }

  return { get, set };
}

//let newState = useState<number>();
let newState = useState();
newState.get();
newState.set(123);
newState.set("Pedro");
