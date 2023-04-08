import QrCode from "./components/QrCode";
import "./styles.css";
import "./firebase";

export default function App() {
  return (
    <div className="section container">
      <QrCode />
    </div>
  );
}
