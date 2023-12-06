import "./App.css";
import Header from "./componets/Header";
import Balance from "./componets/Balance";
import IncomeExpences from "./componets/IncomeExpences";
import TransactionList from "./componets/TransactionList";
import AddTransaction from "./AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
