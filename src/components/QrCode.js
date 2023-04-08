import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [txt, settxt] = useState("");

  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `Helium_QRcode.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    settxt("");
  };

  const qrCodeEncoder = (e) => {
    settxt(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={txt}
      size={300}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );

  return (
    <div className="qrcode__container">
      <div ref={qrRef}>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label>Enter Text</label>
          <input
            type="text"
            value={txt}
            onChange={qrCodeEncoder}
            placeholder="Enter your text here..."
          />
          <button type="submit" disabled={!txt}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
