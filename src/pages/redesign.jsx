import React from "react";
import "./design.css";

function Iterative() {
  return (
    <body>
      <div className="flex">
        <div className="title">powerHouse Books' Redesign</div>
        <div className="left-half-noDash">
          <div>
            For a project in my{" "}
            <a
              href="https://cs.brown.edu/courses/csci1300/"
              target="_blank"
              rel="noreferrer"
            >
              UI/UX class
            </a>
            , I redesigned powerHouse Bookstore's{" "}
            <a
              href="https://www.powerhousebookstores.com/"
              target="_blank"
              rel="noreferrer"
            >
              homepage
            </a>
            . It was out of date and hard to navigate. As a writer and avid
            reader, I recognize independent booksellers' importance and
            wanted to help modernize an iconic New York City bookstore.
          </div>
        </div>
        <div className="mePhoto">
          <img
            src="https://yourbrooklynguide.com/wp-content/uploads/2021/09/powerhouse-bookstore-in-Industry-City-in-Sunset-Park-Brooklyn.jpg"
            alt="inside of powerhouse books"
          />
        </div>
      </div>
      <div className="vert-pad"></div>
      <div className="seperator" />
      <div className="subhead">Part 1: Wireframes</div>
      <div className="flex">
        <div className="disc-large">
          When designing my wireframes, I tried to identify the major problems
          with powerHouse's website and remedy them. The issues I identified
          (with my solutions in the sub-bullets) are:<br/><br/>
          <ul>
            <li>
              <b>Redundant information</b>
              <ul>
                <li>listed staff picks and social media links only once</li>
                <li>removed information found on other pages on the website</li>
              </ul>
              <br/>
            </li>
            <li>
              <b>Unclear navigation</b>
              <ul>
                <li>
                  removed the menu bar, as links were easily accessible elsewhere on
                  the page
                </li>
              </ul>
              <br/>
            </li>
            <li>
              <b>Static cart</b>
              <ul>
                <li>made items removable in the cart</li>
              </ul>
              <br/>
            </li>
            <li>
              <b>Lacking information hierarchy</b>
              <ul>
                <li>
                  split the page into two sections: book browsing and bookstore
                  information
                </li>
              </ul>
              <br/>
            </li>
            <li>
              <b>Unreadable calendar</b>
              <ul>
                <li>
                  listed only upcoming events, linking to the full calendar for
                  more detailed information
                </li>
              </ul>
              <br/>
            </li>
            <li>
              <b>Text-heavy design</b>
              <ul>
                <li>
                  reworked language to display the same information in
                  less space
                </li>
              </ul>
              <br/>
            </li>
            <li>
              <b>Non-responsive design</b>
              <ul>
                <li>
                  exchanged detailed shopping cart to a clickable icon when page
                  is too small
                </li>
                <li>made a one-column, scrolling solution for small screens</li>
              </ul>
              <br/>
            </li>
          </ul>
          My design consolidates the page, making important information prominent and removing redundancies. <br/><br/>There were also accessibility issues.
          Accesibility for all users is both an ethical and usability issue. As
          such, I addressed the following:
          <ul>
            <li>Language not identified in header</li>
            <li>The HTML not split into regions</li>
            <li>Images without alternative text</li>
            <li>
              Certain areas (e.g., shopping cart) had low contrast between text
              and background
            </li>
            <li>Adjacent links go to the same URL (photo and header links)</li>
            <li>Underlined text that isn't a hyperlink</li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="centerElements">
          <img
            className="mediumImgPad-vw-max"
            src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/dQqCA7SGkpgLRm0b.png"
          />
          <div className="width100" hidden={true}>
          Desktop Wireframe
          </div>
        </div>
        <div className="centerElements">
          <img
            className="mediumImgPad-vw-max"
            src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/zJkfyz4oBFTpwKt6.png"
          />
          <div className="width100" hidden={true}>
          Tablet Wireframe
          </div>
        </div>
        <div className="centerElements">
          <img
            className="mediumImgPad-vw-max"
            src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/W19RyquNUoWSWpeH.png"
          />
          <div className="width100" hidden={true}>
          Phone Wireframe
          </div>
        </div>
      </div>
      <div className="seperator" />
      <div className="subhead">Part 2: Style Guide</div>
      <div className="flex">
        <div className="left-text-big-text">
          For the style guide, I  used simple, organic colors to
          replicate the cozy, "hygge" feeling that many bookstores, including
          powerHouse, try to achieve. Their current website uses metallic and modern
          colors, which seems discordant with their brick and mortar branding.
          For interactions, I followed dominant UI trends,
          making choices the user is familiar with.
        </div>

        <img
          src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/4AWMXDbQVf0WIjyL.png"
          className="smallimg"
        />
      </div>
      <div className="seperator"></div>
      <div className="centerElements">
        <div className="subhead">Part 3: Hi-Fi Annotated Mockup</div>
        <img
          src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/sOYxymcxGvl6uPIT.png"
          alt="annotated hifi"
          className="largeImg"
        />
      </div>
      <br></br>
      <div className="seperator"></div>
      <div className="centerElements">
        <div className="subhead">Part 4: Deploying My Design</div>
        <div className="disc-large">
          To the best of my HTML and CSS abilities, I implemented my Figma
          mockup. Thanks to the use of flexboxes, the design was
          responsive across screen sizes. I did, however, have to perform some CSS
          tricks to make a one-column solution on mobile pages. I used the{" "}
          <a
            href="https://www.w3schools.com/cssref/css3_pr_mediaquery.asp"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            @media
          </a>{" "}
          rule to create a single-column layout if the screen size was below
          750 pixels. At that size, I also replaced the shopping cart with a clickable cart icon. <br />
          <br />
          <br /> Check out the website{" "}
          <a
            href="https://woefulworm.github.io/assignment2-website/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            here
          </a>
          .<br></br>
          <br></br>
        </div>
        <img
          src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/1e1Be5BJt5j78hn9.gif"
          alt="annotated hifi"
          className="mediumImg"
        />
      </div>
    </body>
  );
}

export default Iterative;
