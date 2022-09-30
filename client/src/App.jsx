import Button from "components/Button";
import useHook from "hooks/useHook";
import moment from "moment";

function App() {
  const { ja } = useHook();
  moment("1994-08-04")
  return (
    <div className="App">
      Hello {ja}
      <Button />
    </div>
  );
}

export default App;
