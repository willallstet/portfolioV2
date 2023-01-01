import React from "react";
import "./design.css";

function Backpack() {
  return (
    <body className="centerHome">
      <div className="title">Backpack Game</div>
      <div className="left-small">
        For a project in my{" "}
        <a
          href="https://cs.brown.edu/courses/csci1300/"
          target="_blank"
          rel="noreferrer"
        >
          UI/UX class
        </a>
        , I created a fun and whimsical web application (almost game) where the
        user rifles through my backpack, stealing items. I harkened back to an
        earlier GeoCties-esque design language to play up the fun and
        unseriousness of the website. I embeded the website to the right or you
        can visit it{" "}
        <a
          href="https://woefulworm.github.io/development/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
        <br />
        <br />
        To navigate the items, I added two sorting catagories. I thought the
        "value (to me)" critera would be helpful to a theif who wanted to
        inflict the most damage and the alphabetical one would be helpful if
        they were looking for a specific item. Then I added two filtering
        catagories because I thought they were funny due to being intentionally
        useless. <br />
        <br />
        I also made it so that when hovering over a component it was clear that
        that component was highlighted and selectable. To let the user know the
        system status, I made sure that the 1.) the value of and 2.) the
        specific items stolen were visible at all times. For accesibility, I
        ensured that the contrast was correct and everything could be read by a
        screenreader, including alt text for images.
        <br />
        <br />I decided to show all the items in a grid at once; that felt most
        similar to how exploring a backpack would be, where you are able to see
        its entire contents. The repeating items in the grid made it clear that
        each item component behaved the same way and were part of the same
        family.
        <br />
        <br />
        The data on my website is read from a JSON file. From there, it is
        unpacked and stored in an array with a custom "generalItem" constructor.
        To make it responsive, I maintained three React useState arrays that had
        all the currently visible elements, the filtered out ones, and the
        stolen ones.
      </div>
      <br />
      <iframe
        src="https://woefulworm.github.io/development/"
        className="webEmbed"
      ></iframe>
    </body>
  );
}

export default Backpack;
