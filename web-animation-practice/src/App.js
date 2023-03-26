import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import useWebAnimations, {bounce} from '@wellyshen/use-web-animations';

function App() {
  const {ref, playState} = useWebAnimations({...bounce});

 /* const {ref, playState, getAnimation} = useWebAnimations({
    keyframes: [
      {transform: "translateX(0px)", background: "red"},
      {transform: "translateX(500px)", background: "yellow"}
    ],
    timing: {
      duration: 3000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    }, 
    onUpdate: ({playState, animate, animation}) => {
      console.log("Play State ", playState);
      console.log("animate ", animate);
      console.log("animation ", animation);
    }
//we can view the result of onUpdate on console

  });
  */   
  return (
    <div>
      <div ref={ref} style={{background: "red", width: "100px", height: "50px"}}>
      Hello World {playState}
      </div>
    </div>
  );
}

export default App;
