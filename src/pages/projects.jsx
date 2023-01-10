import React from "react";

function Projects() {
  return (
    <body>
      <div className="subhead">Art/Design</div>
      <div className="bricks">
        <a href="/portfolioV2/soundtable">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://i.imgur.com/8PB7tdj.jpg"
            ></img>
            <div class="overlay">
              <div class="overlayText">soundtable</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/techlands">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://i.imgur.com/A50iPdN.png"
            ></img>
            <div class="overlay">
              <div class="overlayText">the map is not the territory</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/cyanobacteria">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://i.imgur.com/rmVfAdn.jpg"
            ></img>
            <div class="overlay">
              <div class="overlayText">cyanobacteria sonification</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/bluenoAr">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://media4.giphy.com/media/YUu0xmmRmePOyu8uIh/giphy.gif?cid=790b76114918966cc373c0d38ecd43826ed176ce4cf224d3&rid=giphy.gif&ct=g"
            ></img>
            <div class="overlay">
              <div class="overlayText">blueno ar</div>
            </div>
          </div>
        </a>
      </div>
      <div className="subhead">UI/UX</div>
      <div className="bricks">
        <a href="/portfolioV2/tapback">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://i.imgur.com/mlrfRnX.png"
            ></img>
            <div class="overlay">
              <div class="overlayText">iMessage tapback expansion</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/iterative">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://i.imgur.com/sESXgRm.png"
            ></img>
            <div class="overlay">
              <div class="overlayText">andi design</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/backpack">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://spiela.co.uk/uploads/community/1638364768Image.jpeg"
            ></img>
            <div class="overlay">
              <div class="overlayText">resident advisor redsign</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/redesign">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://cdn.vox-cdn.com/thumbor/fvwx9IbRHceEHEWFjYFvRF6S0i0=/41x0:681x480/1400x1400/filters:focal(41x0:681x480):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47552007/unnamed-4.0.0.jpg"
            ></img>
            <div class="overlay">
              <div class="overlayText">powerHouse redesign</div>
            </div>
          </div>
        </a>
      </div>
      <div hidden={true}>
        <div className="subhead">Software Engineering</div>
        <div className="bricks">
          <a href="/weensyOS">
            <div className="brickHomepage">
              <img
                className="sampleImg"
                src="https://media3.giphy.com/media/cnagYypJlDdV4b0Uei/giphy.gif?cid=790b76113674abdbe3bcf55322b48ca1826b81c0f38a9fb9&rid=giphy.gif&ct=g"
              ></img>
              <div class="overlay">
                <div class="overlayText">weensyOS</div>
              </div>
            </div>
          </a>
          <a href="/iterative">
            <div className="brickHomepage">
              <img
                className="sampleImg"
                src="https://i.imgur.com/8EPBv3q.jpg"
              ></img>
              <div class="overlay">
                <div class="overlayText">handwritten digit generator</div>
              </div>
            </div>
          </a>
          <a href="/iterative">
            <div className="brickHomepage">
              <img
                className="sampleImg"
                src="https://i.imgur.com/0xa94m1.jpg?1"
              ></img>
              <div class="overlay">
                <div class="overlayText">dog-cat identifier</div>
              </div>
            </div>
          </a>
          <a href="/iterative">
            <div className="brickHomepage">
              <img
                className="sampleImg"
                src="https://i.imgur.com/tOG1dJt.gif"
              ></img>
              <div class="overlay">
                <div class="overlayText">gitlab prune</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </body>
  );
}

export default Projects;
