import React from "react";
import "./design.css";

function Iterative() {
  return (
    <body>
      <div className="flex">
        <div className="title-center">GeoJournal Design</div>
        <div className="left-half-noDash">
          <div>
             For the final project in my <a href="https://cs.brown.edu/courses/csci1951-v/" target="_blank" rel="noreferrer">Hypertext Course</a>
             , my group members and I used CSS, TypeScript, React, and MongoDB to create a system that 
             organized documents both geographically and temporally. After the creation of a location specific document — which 
             could be a video, image, or text — it is added to a timeline associated with that 
             location, which is represented by a pin on the map. In addition to map and timeline 
             navigation, the user can also search for specific documents. GeoJournal was a month long project with two additional team members.
             <br/><br/>On the development side, I handled Google maps API functionality, 
             image documents, the text editor, and search. You can find the GitHub repository{" "}
             <a href="https://cs.brown.edu/courses/csci1951-v/" target="_blank" rel="noreferrer">
              here.
            </a>
          </div>
        </div>
        <img
          className="smallerimg"
          src="https://i.imgur.com/uOF35lu.png"
        ></img>
      </div>
      <div className="seperator"></div>
      <div className="flex">
        <div className="subhead">Part 1: Ideation and Empathization</div>
        <div className="disc-large">
          Tasked with creating a hypertext corpus, my group members and I originally conceptualized the 
          product as a travel journal. To help guide our narrow the scope and define our goals, we 
          created two simple user personas: Bill and Kate.
          <br></br>
        </div>
      </div>
      <div className="flex-constrained">
        <img
          className="smallerimg"
          src="https://i.imgur.com/8ceCx3L.png"
        />
        <div className="a-little-pad"/>
        <img
          className="smallerimg"
          src="https://i.imgur.com/82r1AbS.png"
        />
      </div>
      <div className="padBottom" />
      <div className="padBottom" />
      <div className="seperator"></div>
      <div className="flex">
        <div className="subhead">Part 2: Wireframing</div>
        <div className="disc-large">
          With these two users in mind, the team mocked up wireframes for the application. In both Bill and 
          Kate's use cases, we saw that in addition to the original map functionality, a time-based element 
          would be important to organize their information. As such, we added a timeline for each location.
          <br/><br/>
          As GeoJournal's niche is location-based tagging, the design is primarily figured around the 
          map. Each location was given a pin that, when clicked, took the user to all the notes 
          associated with that area. On the left side of the home screen, we included a menu where a user 
          could access all their notes in chronological order, rather than the geographical grouping 
          found on the map. We then added a navigation bar that was consistent across the screens, 
          anchoring the user no matter where in the corpus they were.
          <br />
          <br />
          <div className="centerElements">
            <img src="https://i.imgur.com/AbE1Z9F.png" className="smallimg" />
            <img src="https://i.imgur.com/hSsavBz.png" className="smallimg" />
            <img src="https://i.imgur.com/imsXOgy.png" className="smallimg" />
          </div>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="subhead">Part 3: Implementation & Conclusion</div>
      <body className="flex">

      <div>
        <div className="left-text-small-geo">
          When implementing the project, we added a few more features than were included in the 
          wireframe. Namely, we added a few more buttons to richly edit text, image cropping sliders, 
          and the ability to "link" notes to a "parent" note (i.e., one node could be a collection of 
          other notes).
        </div>
      </div>
      <div className="a-little-pad" />
      <iframe
        src="https://player.vimeo.com/video/659475309?h=57b7e5d845&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="soundtable demo"
        className="vimeo-geo"
      ></iframe>
      <div className="disc-large-geo">
          GeoJournal was one of my first forrays into UX and web design. 
          Although there are things I might go back and change (styling, more rigorous prototyping, 
          and timeline functionality), this project introduced me to the excitement of designing 
          useful applications for users. On the whole, I think it was successful. It exposed me to the 
          power of design and the importance of taking an empatheic approach with project teammembers 
          and the user.
      </div>
      </body>
    </body>
  );
}

export default Iterative;
