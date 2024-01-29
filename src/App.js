import "./App.css";
import ButtonComponent from "./ButtonComponents";
import ImageComponent from "./imagesComponents";

function App() {
  return (
    <>
      <div className="container">
        <ButtonComponent buttonText="Primo Bottone" buttoncolor="button1" />
        <ButtonComponent buttonText="Secondo Bottone" buttoncolor="button2" />
      </div>
      <div className="container">
        <div className="imageDiv">
          <ImageComponent src="logo512.png" alt="reactLogo" />
          <ImageComponent
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg"
            alt="car1"
          />
          <ImageComponent
            src="https://collectingcars.imgix.net/011570/10-ww-4.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85"
            alt="car2"
          />
        </div>
      </div>
    </>
  );
}

export default App;
