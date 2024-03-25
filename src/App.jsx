import ExcelReader from "./components/ExelReader";
import ExcelReaderCell from "./components/ExelReaderCell";
import ExcelReaderTables from "./components/ExelRenderTables";
import XlsxFromYoutube from "./components/XlsxFromYoutube";

function App() {
  return (
    <>
      <XlsxFromYoutube />
      <ExcelReaderCell />
      <ExcelReaderTables />
      <ExcelReader />
    </>
  );
}

export default App;
