import React from "react";
import "./design.css";

function Soundtable() {
  return (
    <body>
      <body className="centerElements">
      <div className="title-center">Dog-Cat Identifier
</div>
<br/><br/>
      <div className="flex">
        <div className="left-half-noDash">
          <div className="disc">
            Using the <a href="https://www.cs.toronto.edu/~kriz/cifar.html" target="_blank" rel="noreferrer">CIFAR-10 dataset</a> 
            {" "}dataset and <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">TensorFlow</a>, 
            {" "}I developed a convolutional neural network 
            that was able to correctly distinguish between images of dogs and cats ~75% of the time. 
            To achieve this result, I filtered the dataset to include only dogs and cats, and then 
            trained three convolutional layers, two max pooling layers, and three dense layers.
          </div>
        </div>{" "}
        <img src="https://i.imgur.com/nIIwbOv.png" className="cnn"></img>
      </div>
      
    </body>
      <div className="footer2">credit to brown <a href="https://brown-deep-learning.github.io/dl-website-f22/" target="_blank" rel="noreferrer">cs 1470</a>, fall 2021</div>
    </body>
  );
}

export default Soundtable;
