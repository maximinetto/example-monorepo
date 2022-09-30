import Button from "components/Button";
import useHook from "hooks/useHook";
import moment from "moment";
import u from "utils/u"

function App() {
  const { ja } = useHook();
  moment("1994-08-04");
  u()
  return (
    <div className="App">
      Hello {ja}
      <Button />
    </div>
  );
}

export default App;
