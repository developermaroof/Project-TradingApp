import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import trading from "../Images/Trading.png";

export const StockOverviewPage = () => {
  return (
    <div>
      <div className="text-center">
        <img src={trading} alt="trading img" />
      </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
