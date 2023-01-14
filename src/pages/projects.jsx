import React from "react";

function Projects() {
  return (
    <body>
      <span className="monospace">
        <div className="subhead">Art/Design</div>
        <br/>
      </span>
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
              <div class="overlayText">cyanobacteria<br/>sonification</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/bluenoAr">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://media2.giphy.com/media/SnpJaTN9Ig6euKCNzh/giphy.gif?cid=790b7611610fad29c5c999d5e51c9314384fa740e497e561&rid=giphy.gif&ct=g"
            ></img>
            <div class="overlay">
              <div class="overlayText">blueno ar</div>
            </div>
          </div>
        </a>
        <div className="vert-pad"/>
        <div className="vert-pad"/>
      </div>
      <div className="seperator"></div>
      <span className="monospace">
        <br/>
        <div className="subhead">UI/UX</div>
        <br/>
      </span>
      <div className="bricks">
        <a href="/portfolioV2/tapback">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://i.imgur.com/mlrfRnX.png"
            ></img>
            <div class="overlay">
              <div class="overlayText">iMessage<br/>tapback<br/>expansion</div>
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
              <div class="overlayText">powerHouse<br/>redesign</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/iterative">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://i.imgur.com/0rltLpw.png"
            ></img>
            <div class="overlay">
              <div class="overlayText">andi design</div>
            </div>
          </div>
        </a>
        <a href="/portfolioV2/geoJournal">
          <div className="brickHomepage">
            <img
              className="sampleImg"
              src="https://cdn.shopify.com/s/files/1/1061/1924/products/Earth_Globe_Americas_Emoji_large.png?v=1571606063"
            ></img>
            <div class="overlay">
              <div class="overlayText">geo journal</div>
            </div>
          </div>
        </a>
      </div>
      <div className="vert-pad"/>
      <div className="vert-pad"/>
      <div hidden={false}>
        <div className="seperator"></div>
      <span className="monospace">
        <br/>
        <div className="subhead">Software Engineering</div>
        <br/>
      </span>
        <div className="bricks">
          <a href="/portfolioV2/weensyOS">
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
          <a href="/portfolioV2/mnist">
            <div className="brickHomepage">
              <img
                className="sampleImg"
                src="https://i.imgur.com/8EPBv3q.jpg"
              ></img>
              <div class="overlay">
                <div class="overlayText">handwritten digit <br/>generator</div>
              </div>
            </div>
          </a>
          <a href="/portfolioV2/gitlab">
            <div className="brickHomepage">
              <img
                className="sampleImg"
                src="https://almalinux.org/media/da/e5/08/gitlab-logo-gray-stacked-rgb.png"
              ></img>
              <div class="overlay">
                <div class="overlayText">gitlab prune</div>
              </div>
            </div>
          </a>
          <a href="/portfolioV2/dogCat">
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
        </div>
      </div>
      <div className="vert-pad"/>
    </body>
  );
}

export default Projects;
