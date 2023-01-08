import React from "react";
import "./design.css";

function Tapback() {
  return (
    <body className="flex-apple">
      <div className="row-tapback-head">
        <div className="tapback-text">
          <div className="title">iMessage Tapback Expansion</div>
          <div className="disc-apple-main">
            Interested in designing within a brand's idenity and creating a
            custom icon set, I expanded Apple's fleet of iMessage tapback
            reactions.
          </div>
        </div>
        <div className="iphoneMockup">
          <img
            src="https://i.imgur.com/WBM4XJy.png"
            alt="expanded tapback reaction to a song"
          ></img>
        </div>
      </div>
      <div className="row-tapback-head">
        <img
          className="apple-sketch"
          src="https://i.imgur.com/NPNwIMd.jpg"
          alt="prototype sketch made on the plane"
        ></img>
        <div>
          <div className="subhead-apple">Inspiration strikes</div>
          <div className="disc-apple">
            When my friend agreed to pick me up from the airport at a new time,
            I realized iMessage's "love" reaction didn't quite carry the meaning
            I wanted to convey. Looking to combine love, gratitude, and
            protection, I said I wished I could "angel" react instead. As such,
            the plane ride saw me doodling early plans for an expanded and
            changeable iMessage reaction icon set on the tray table.{" "}
          </div>
        </div>
      </div>
      <img
        className="iphoneMockup-even"
        src="https://i.imgur.com/XGgzsaO.png"
        alt="the original inspiration text"
      ></img>
      <img
        src="https://i.imgur.com/IxRAJbY.png"
        className="iphoneMockup-even"
        alt="the inspiration text edited with the angel react"
      ></img>
      <div className="row-tapback-head">
        <div>
          <div className="subhead-apple-blue">Process</div>
          <div className="disc-apple">
            In order to design a minimum viable product I adapted existing Apple
            screens, designed 30 sample icons, and created a workflow where a
            user can swap out their six reaction core icons.
          </div>
        </div>
        <img
          src="https://i.imgur.com/OLq7fAW.png"
          className="iphoneMockup-small"
          alt="example of the message tapbacks"
        ></img>
      </div>
      <div className="row-tapback-head">
        <div>
          <div className="disc-apple-wide">
            Working off the existing macOS and iOS mental map, a user can hold
            down an icon—making it shake—to open the menu that shows replacement
            icons. I added a search bar becasue I envision a future, shippable
            iteration that includes more icons than the sample set I designed.
          </div>
        </div>
      </div>
      <img
        className="iphoneMockup-small-noPad"
        src="https://i.imgur.com/Z4b5KFv.png"
        alt="message tapback replacement on MacBook"
      ></img>
      <img
        className="iphoneMockup-small-noPad"
        src="https://i.imgur.com/8Xatz8U.png"
        alt="message tapback replacement on iPhone"
      ></img>
      <div className="row-tapback-head">
        <div>
          <div className="disc-apple">
            In the end, I designed 30 tapbacks in addition to the original six.
            Tapbacks are distinct from emojis, conveying reactions rather than
            emotions. As such, I stayed away from people and expressions.
            However, I attempted to make them abstract and wide-ranging,
            allowing each user to put a unique spin on their communication
            style.
          </div>
        </div>
      </div>
      <img
        className="iconMockup"
        src="https://i.imgur.com/dJskQYq.png"
        alt="the entire icon set Will ALlstetter designed"
      ></img>
    </body>
  );
}

export default Tapback;
