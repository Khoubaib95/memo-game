import "./index.scss";

function Shape({ src, alt }: { src: string; alt: string }) {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="shape">
      <img src={src} alt={alt} style={{ width: "100%" }} />
    </div>
  );
}

export default Shape;
