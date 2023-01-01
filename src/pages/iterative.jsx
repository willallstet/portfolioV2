import React from "react";
import "./design.css";

function Iterative() {
  return (
    <body>
      <div className="flex">
        <div className="left-most-noDash">
          <div className="title">Andi Mobile Design</div>
          <div>
            For a project in my{" "}
            <a
              href="https://cs.brown.edu/courses/csci1300/"
              target="_blank"
              rel="noreferrer"
            >
              UI/UX class
            </a>
            , my group chose to redesign Andi, a startup using AI & language
            models to create a better search engine. I was especially interested
            in this product's mission as it stood in oppsotion to the SEO
            optimized, advertisement cluttered, and data tracking current state
            of online search engines. Andi summerizes it's findings, giving
            simple answers to it's users while still encouraging divergent
            online journeys.
            <br />
            <br />
            While Andi operates across interfaces, we designed specifically for
            their mobile application. In line with it's vision, Andi is
            primarily for users who are no longer interested in being the
            product for mega-corporations - specifically users frustrated by
            endless ads, data tracking, and convoluted search results. This
            encapsulates a large segment of potential customers, but as a tech
            minded alterative to the current industry giants, Andi is likely
            most relevant to users who are digitally native, frequently use
            search engines like Google or Yahoo (and are familiar with their
            layout), and are interested in need and actively searching for a
            better alterative.
            <br />
            <br />
            Andi would change the game - challanging competitors who subject
            their users to advertisments and SEO tricks that pollute their
            experience and obscure relevant information. Instead, it would offer
            more direct & accurate answers based on searches (helpful for
            researchers/frequent searchers), and also a friendlier UI that
            encourages exploration and highlights the most crucial information.
          </div>
        </div>
        <div className="mePhotoSmall">
          <img
            className="mediumImgPad"
            src="https://media3.giphy.com/media/fvCdHSSIuYUkfGhOc0/giphy.gif?cid=790b7611f6848dedc6d007c6832f3337b3e6b86dd8e92d89&rid=giphy.gif&ct=g"
          ></img>
        </div>
      </div>
      <div className="bricks">
        <div className="brick">
          <div className="subhead">Part 1: Sketching</div>
          <div className="disc">
            We brainstormed what Andi could look like in the following sketches,
            ranging from a persona that engages with the user to a traditional
            search engine interface. We also played with the way resluts are
            shared and organized. While doing this, we tried to keep in mind
            what layout would be easiest for a new user to apply their existing
            mental maps to, while also communicating Andi's difference from it's
            competitors.
          </div>
          <img
            className="mediumImgPad"
            src="https://iterative-design.vercel.app/IMG_4695.jpeg"
          />
          <img
            className="mediumImgPad"
            src="https://iterative-design.vercel.app/IMG_4694.jpeg"
          />
          <img
            className="mediumImgPad"
            src="https://iterative-design.vercel.app/wireframe3.png"
          />
        </div>
        <div className="brick">
          <div className="subhead">Part 2: Wireframing</div>
          <div className="disc">
            After skteching, we mocked up this concept in Balsamiq. In the end,
            we decided to follow a more traditional search engine layout,
            displayed in the second image, commmincating Andi's difference in
            the simplcity of the search results. We decided to stick with
            box-based results that summarizes the most relevant
            information/high-level summary first, and then follows up with more
            context. In this way, search results more directly answer the user's
            inquiry and if needed they can easily find more related information.
            We agreed that stepping too far out of convention would go against
            Andi's goal of creating a smoother, simpler search experience. We
            also included an "About Andi" modal that communicates Andi's unique
            mission to users.
          </div>
          <img src="https://iterative-design.vercel.app/New-Wireframe-1.png" />
        </div>
        <div className="brick">
          <div className="subhead">Part 3: Hifi Prototype</div>
          <div class="figma">
            <iframe
              src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fc8WzWfbsaWjfoNZuJudGm2%2Fiterative-(Copy)%3Fnode-id%3D2%253A35%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A35"
              allowfullscreen=""
              className="figma"
            ></iframe>
          </div>
          <div className="disc">
            Following our critique session, we incorporated a handful of changes
            to further iterate on our prototype. These included:
            <ul>
              <li>
                Addition of a bolded, simplified description of Andi on the “How
                it works” frame (per industry critique). This “TL:DR” text
                embodies Andi's ethos by giving a straightforward, quick answer
                to the frame's proposed question.
              </li>
              <li>
                Addition of a caption to image and video results to help
                contextualize results.
              </li>
              <li>
                Removal of the “Open in YouTube” button in the video results
                frame to reduce redundancies. We transferred this action to a
                new frame which, upon clicking on a video result, presents the
                user an option to leave Andi to view the video, or cancel the
                operation and stay within the app.
              </li>
              <li>
                A more consitent use of shadows to signify clickable elements
              </li>
            </ul>
          </div>
        </div>
        <div className="brick">
          <div className="subhead">Part 4: User Testing</div>
          <div className="disc">
            After implementing our changes from the critique, we tested our
            prototype with real users, giving them the following prompt:
          </div>
          <div class="block-quote">
            "Andi is a search engine that uses generative AI models to generate
            simple answers to your questions. Presented here is a prototype of
            Andi's user interface designed specifically for mobile users.
            Suppose you want to visit the Brown Computer Science Department
            offices. Using Andi, find the location of the Brown CS department
            and open the location in Apple Maps. As you complete the task,
            please think aloud so that our designers can better understand your
            train of thought while using the interface. Thank you!"
          </div>
          <div className="disc">
            And these subtasks:
            <ul>
              <li>Using Andi, search for "Brown CS"</li>
              <li>
                Navigate to the result containing the department's location
              </li>
              <li>Open the building's location in "Maps"</li>
            </ul>
            From our first respondent, we noticed that he struggled with the
            second subtask, when attempting our given task, to find the address
            of the Brown CS Building. He found the search bar easily and was
            able to determine what each component on the page was. However, he
            expressed trouble figuring out whether he was supposed to select
            from the field of search queries automatically populated in the
            search bar or to click the search button call-to-action (CTA). This
            struggle is something that we anticipated, as our prototype only
            used a mock version of type-to-search functionality, so the search
            queries populating the dropdown menu were not based on anything the
            user typed in. This initial confusion was likely due to the user's
            mental model of type-to-search dropdowns in other interfaces, where,
            as you type, results are listed. However, our given dropdown menu
            only displayed content that we manually added to display on the
            screen. The user did, however, successfully search for Brown CS (one
            of our subtasks).
            <br></br>
            <br></br>Once the users completed this task, they were able to
            successfully search on our interface and complete the remaining
            subtasks, accomplishing our main task of finding the address for
            Brown CS. A piece of feedback we got from this user was to make the
            interface more indicative of the tasks the user needs to take on
            that given page. The second respondent was able to complete the task
            quickly and validated our expectation that the interface would be
            intuitive for a user unfamiliar with Andi, stating that the app was
            “simple and easy to use” (1:32 in video 4342277B). We found that the
            third user had an easy time navigating through the app and
            completing the task as well. She did struggle with the final
            sub-task of navigating from the individual search result page to the
            “open in maps” button. Both the third and first users expressed
            difficulty with noticing the maps icon when on the search results
            page. Since this was a bottleneck for completing the final sub-task
            of getting to the map view for two of the three users, we think that
            an area for improvement on our interface would be to 1.) making the
            map icon more prominent to the user and 2.) making the task more
            clear on the screen overall.
          </div>
          <iframe
            src="https://www.youtube.com/embed/PQk1jDrAmGw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/SNTNFMDG7Eg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/fSNIWrx390g"
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
