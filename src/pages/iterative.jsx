import React from "react";
import "./design.css";

function Iterative() {
  return (
    <body>
      <div className="flex">
        <div className="title-center">Andi Mobile Design</div>
        <div className="left-half-noDash">
          <div>
            Andi is a Y Combinator-backed startup that uses AI and language models to create a better search 
            engine. Andi summarizes its findings, giving simple answers to its users while encouraging 
            divergent online journeys. This redesign was a three-week project in my <a href="https://cs.brown.edu/courses/csci1300/" target="_blank" rel="noreferrer">
            UI/UX class</a> class. The team consisted of myself, and three other design students.
            <br/>
            <br/>
            We focused on the mobile application and used Andi&apos;s mission as design inspiration. 
            Andi uses a machine learning-powered method of page ranking that stands in opposition to the 
            SEO-optimized, advertisement-cluttered, and data-tracking state of modern search engines. 
            As a techy alternative to the industry giants, we knew that Andi&apos;s target audience was 
            digital natives who frequently use search engines, such as Google, and are looking for a 
            better alternative.
            <br/>
            <br/>
            Andi uses AI to find direct, accurate answers. This simplicity directly translated to our streamlined UI, which encourages exploration and highlights the most crucial information.
          </div>
        </div>
        <img
          className="smallimg"
          src="https://media3.giphy.com/media/fvCdHSSIuYUkfGhOc0/giphy.gif?cid=790b7611f6848dedc6d007c6832f3337b3e6b86dd8e92d89&rid=giphy.gif&ct=g"
        ></img>
      </div>
      <div className="seperator"></div>
      <div className="flex">
        <div className="subhead">Part 1: Sketching</div>
        <div className="disc-large">
          We brainstormed what Andi could look like in the following sketches,
          ranging from a persona that engages with the user to a traditional
          search engine interface. We also played with the way results are
          shared and organized. While designing, we considered
          layouts that would be easiest for a new user to apply their existing mental
          maps, while also communicating Andi's difference from its
          competitors.
          <br></br>
        </div>
      </div>
      <div className="flex-constrained">
        <img
          className="smallimg"
          src="https://iterative-design.vercel.app/IMG_4695.jpeg"
        />
        <img
          className="smallimg"
          src="https://iterative-design.vercel.app/IMG_4694.jpeg"
        />
        <img
          className="shortImg"
          src="https://iterative-design.vercel.app/wireframe3.png"
        />
      </div>
      <div className="padBottom" />
      <div className="padBottom" />
      <div className="seperator"></div>
      <div className="flex">
        <div className="subhead">Part 2: Wireframing</div>
        <div className="disc-large">
          After sketching, we mocked up the concept in Balsamiq. In the end, we
          decided to follow a traditional search engine layout, as prototyped
          in the second sketch. This design communicates Andi's difference in the simplcity
          of the search results rather than a radical UI. We displayed results that
          summarize the most relevant information first, then
          follow up with more context upon interaction. We agreed that stepping too far out of
          convention would go against Andi's goal of creating a smooth,
          simple search experience. We also included an "About Andi" modal that
          communicates Andi's unique mission to users.
          <br />
          <br />
          <img src="https://iterative-design.vercel.app/New-Wireframe-1.png" />
        </div>
      </div>
      <div className="subhead">Part 3: Hifi Prototype</div>
      <div className="flex" width="100%">
        <div class="figma">
          <iframe
            src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fc8WzWfbsaWjfoNZuJudGm2%2Fiterative-(Copy)%3Fnode-id%3D2%253A35%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A35"
            allowfullscreen=""
            className="figma"
          ></iframe>
        </div>
        <div className="disc-large">
          Following an in-class critique session, we incorporated a handful of changes, including:
          <ul>
            <li>
              Addition of a bolded, simplified description of Andi on the “How
              it works” frame. This “TL;DR” text
              embodies Andi's ethos by giving a straightforward, quick answer to
              the frame's proposed question
            </li>
            <li>
              Addition of contextualizing captions to image and video results
            </li>
            <li>
              A more consitent use of shadows to signify clickable elements
            </li>
          </ul>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="flex">
        <div className="subhead">Part 4: User Testing</div>
        <div className="disc-large">
         The last step was testing our
          prototype with real users, giving them the following prompt:
        </div>
        <div class="block-quote">
          "Andi is a search engine that uses AI models to generate
          simple answers to your questions. Presented here is a prototype of
          Andi's user interface, designed specifically for mobile users. Suppose
          you want to visit the Brown Computer Science Department offices. Using
          Andi, find the location of the Brown CS department and open the
          location in Apple Maps. As you complete the task, please think aloud
          so that our designers can better understand your train of thought
          while using the interface. Thank you!"
        </div>
        <div className="disc-large">
          And these subtasks:
          <ul>
            <li>Using Andi, search for "Brown CS"</li>
            <li>Navigate to the result containing the department's location</li>
            <li>Open the building's location in "Maps"</li>
          </ul>
          From our first respondent, we noticed that he struggled with the
          second subtask. He found the search bar easily and was able to
          determine each component on the page. However, he expressed
          trouble figuring out whether he was supposed to select from the field
          of search queries automatically populated in the search bar or to
          click the search button call-to-action (CTA). This struggle is
          something that we anticipated, as our prototype used a mock
          version of type-to-search functionality, so the search queries
          populating the dropdown menu were not based on anything the user typed
          in. This initial confusion was likely due to the user's mental model
          of type-to-search dropdowns in other interfaces, where, as you type,
          results are dynamically populated. However, our given dropdown menu only displayed
          content that we manually added to display on the screen. The user did,
          however, successfully search for Brown CS.
          <br></br>
          <br></br>Once all the users completed the first task, they were able to
          successfully search on our interface and complete the remaining
          subtasks. The second respondent was able to complete the tasks quickly
          and validated our expectation that the interface would be intuitive
          for a user unfamiliar with Andi, stating that the app was “super simple and
          easy to use” at timestamp 1:32.<br></br>
          <br></br> We found that the third user had an easy time navigating
          through the app and completing the tasks. She only struggled with
          navigating from the individual search result
          page to the “open in maps” button. Both the third and first users
          expressed difficulty with noticing the maps icon on the search
          results page. Since this was a bottleneck for two of the three users, improvements on our interface include distinguishing between navigating the embedded in-app map and opening the
          address on their phone's map software.
        </div>
        <div className="flex">
          <iframe
            src="https://www.youtube.com/embed/PQk1jDrAmGw"
            className="pad"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/fSNIWrx390g"
            title="YouTube video player"
            className="pad"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/SNTNFMDG7Eg"
            className="pad"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </body>
  );
}

export default Iterative;
