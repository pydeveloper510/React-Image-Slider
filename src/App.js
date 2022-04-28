import "./styles.css";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png"
  },
  {
    url:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png"
  },
  {
    url:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png"
  }
];

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        duration={0.5}
        autoPlay={true}
      />
    </div>
  );
};

export default App;
