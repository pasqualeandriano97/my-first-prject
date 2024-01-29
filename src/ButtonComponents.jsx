const ButtonComponent = (propsObj) => {
  return (
    <>
      <div className="buttonDiv">
        <button className={propsObj.buttoncolor}>{propsObj.buttonText}</button>
      </div>
    </>
  );
};

export default ButtonComponent;
