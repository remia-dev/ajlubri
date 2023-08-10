import Product from "./components/Product";
import DataTable from "./components/Table";

function App() {
  return (
    <div className="flex justify-evenly my-20">
      <DataTable />
      <Product />
    </div>
  );
}

export default App;
