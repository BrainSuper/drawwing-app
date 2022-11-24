import React, {useState} from 'react';
import './App.css';
import p5Types from "p5";
import Sketch from "react-p5";
import SideBar from "./components/SideBar";
interface IPoint {
  x: number;
  y: number;
  color: string;
  weight: number;
}


const paths: Array<IPoint>[] = [];
let currentPath: IPoint[] = [];

function App() {
  const [color, setColor] = useState('#000000');
  const [weight, setWeight] = useState(1);
  const [remove, setRemove] = useState(false);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
      p5.background(255);
  }
const draw = (p5: p5Types) => {
      if (remove) {
          // p5.remove();
        paths.splice(0);
          p5.background(255);
        setRemove(false)
      }
      p5.noFill();

    if (p5.mouseIsPressed) {
      let point: IPoint = {
        x: p5.mouseX,
        y: p5.mouseY,
        color: color,
        weight: weight

      }
      currentPath.push(point);
    }

    paths.forEach((path: IPoint[]) => {
      p5.beginShape();
      path.forEach((point: IPoint) => {
        p5.stroke(point.color);
        p5.strokeWeight(point.weight);
        p5.vertex(point.x, point.y);
      })
      p5.endShape();
    })
}

const mousePressed = () => {
    currentPath = [];
    paths.push(currentPath);
}

  return (
      <div className="App">
        <SideBar remove={remove} setRemove={setRemove} setColor={setColor} color={color} weight={weight} setWeight={setWeight}/>
        <Sketch setup={setup}  draw={draw} mousePressed={mousePressed}   />
      </div>
  )
}

export default App;
