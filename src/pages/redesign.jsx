import React from "react";
import "./design.css";

function Iterative() {
  return (
    <body>
      <div className="flex">
        <div className="title">POWERHOUSE Books Redesign</div>
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
            , I redesigned Powerhouse Bookstore's{" "}
            <a
              href="https://www.powerhousebookstores.com/"
              target="_blank"
              rel="noreferrer"
            >
              homepage
            </a>
            . It was out of date and hard to navigate. As a writer and avid
            reader, I appricate the importance of independent booksellers and
            wanted to help modernize an iconic NYC one.
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
          with Powerhouse's website and remedy them. The issues I identified
          (and solved in the sub-bullets) were:
          <ul>
            <li>
              <b>Redundant information</b>
              <ul>
                <li>only listed staff picks and social media links once</li>
                <li>removed any information found on pages linked to</li>
              </ul>
            </li>
            <li>
              <b>Unclear navigation</b>
              <ul>
                <li>
                  removed the menu bar, as all the info was linked elsewhere in
                  the page
                </li>
              </ul>
            </li>
            <li>
              <b>Static cart</b>
              <ul>
                <li>Made items removable in the cart</li>
              </ul>
            </li>
            <li>
              <b>Lacking information hierarchy</b>
              <ul>
                <li>
                  Split the page into two sections: book browsing and bookstore
                  information
                </li>
              </ul>
            </li>
            <li>
              <b>Unreadable calendar</b>
              <ul>
                <li>
                  Only listed upcoming events, linking to the full calendar for
                  more detailed information
                </li>
              </ul>
            </li>
            <li>
              <b>Text heavy design</b>
              <ul>
                <li>
                  Reworked their language to display the same information in
                  less space
                </li>
              </ul>
            </li>
            <li>
              <b>Non-responsive design</b>
              <ul>
                <li>
                  exchanged detailed shopping cart to a clickable icon when page
                  is small enough
                </li>
                <li>made a one-column, scrolling solution on small screens</li>
              </ul>
            </li>
          </ul>
          My new design attempts to consolidate the page, making what needs to
          be visible prominent while removing redundancies and unnecessary
          information. There was also a fair amount of accessibility issues.
          Accesibility by all users is both an ethical and usability issue. As
          such I addressed the following issues:
          <ul>
            <li>Language not identified in header</li>
            <li>The HTML was not split into regions</li>
            <li>Images without alternative text</li>
            <li>
              Certain areas (e.g. shopping cart) had low contrast between text
              and background
            </li>
            <li>Adjacent links go to the same URL (photo and header links)</li>
            <li>Underlined text that isn't a hyperlink</li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="flex-constrained-w">
          <img
            className="mediumImgPad-vw"
            src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/dQqCA7SGkpgLRm0b.png"
          />
          Desktop Wireframe
        </div>
        <div className="flex-constrained-w">
          <img
            className="mediumImgPad-vw"
            src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/zJkfyz4oBFTpwKt6.png"
          />
          Desktop Wireframe
        </div>
        <div className="flex-constrained-w">
          <img
            className="mediumImgPad-vw"
            src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/W19RyquNUoWSWpeH.png"
          />
          Desktop Wireframe
        </div>
      </div>
      <div className="seperator" />
      <div className="subhead">Part 2: Style Guide</div>
      <div className="flex">
        <div className="left-text-big-text">
          For the style guide, I tried to use simple, organic colors, looking to
          replicate the cozy, "hygge" feeling that many bookstores, including
          Powerhouse, play into. Their current website uses metallic and modern
          colors, which seems discordant with their brick and mortar branding.
          For interactions, I tried to keep it in line with the dominant trends,
          not making any choices that wouldn't be seen elsewhere and the user
          wouldn't be used to.
        </div>

        <img
          src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/4AWMXDbQVf0WIjyL.png"
          className="smallimg"
        />
      </div>
      <div className="seperator"></div>
      <div className="centerElements">
        <div className="subhead">Part 3: Hi-fi Annotated Mockup</div>
        <img
          src="https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/sOYxymcxGvl6uPIT.png"
          alt="annotated hifi"
          className="mediumImg"
        />
      </div>
      <br></br>
      <div className="seperator"></div>
      <div className="centerElements">
        <div className="subhead">Part 4: Deploying my Design</div>
        <div className="disc-large">
          I, to the best of my HTML and CSS abilities, implemented my Figma
          mockup. Thanks to my use of flexboxes, the design was already
          responsive across screen sizes. I did, however, have to do some CSS
          tricks to make a one column solution on mobile pages. I used the{" "}
          <a
            href="https://www.w3schools.com/cssref/css3_pr_mediaquery.asp"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            @media
          </a>{" "}
          rule to create a single column solution when the screen size was below
          750px. At that size, I also unhid the shopping cart icon, removed the
          detailed shopping cart. <br />
          <br />
          There were a few discrepancies (thanks to my limited web-dev
          abilities) between the Hi-Fi prototype and the HTML page, such as
          fonts, minor alignment issues, and the ability to implement a
          carousel. I also did not implement the (ideal + prototyped) infinite
          scroll, but stuck to four browsing rows.
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
