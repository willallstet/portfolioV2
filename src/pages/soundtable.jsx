import React from "react";
import "./design.css";

function Soundtable() {
  return (
    <body className="flex">
      <div>
        <div className="title-short">Soundtable</div>
        <div className="subhead">Final project for ENGN930</div>
      </div>
      <div className="a-little-pad" />
      <iframe
        src="https://player.vimeo.com/video/724583639?h=126fcc5a06&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="soundtable demo"
        className="vimeo"
      ></iframe>
      <div className="seperator"></div>
      <div className="subhead-wide">Inspiration</div>
      <div className="left-text">
        For an end-of-semester project, I built an Ableton controller. This
        project grew out of a desire to both simplify and introduce an aspect of
        play to sound synthesis. Modern digital VST synthesizers rely on
        extensive knowledge of sine wave and wavetable properties, creating a
        high barrier to entry. As opposed to most software
        synthesizers, the Soundtable was designed to allow
        anyone&#8212;including those without experience&#8212;to interface and,
        more importantly, play with sound synthesis.
        <br />
        <br />
        Behind the scenes,{" "}
        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
          Arduinos
        </a>{" "}
        send capacitive touch data through a serial port to a Python program,
        which controls the parameters of{" "}
        <a href="https://vital.audio/" target="_blank" rel="noreferrer">
          Vital Basic
        </a>
        .<br></br>
        <br />
        <br />
      </div>
      <img src="https://i.imgur.com/FgiVUC3.jpg" className="smallimg" />
      <div className="seperator"></div>
      <div className="subhead-wide">Ideation</div>
      <img src="https://i.imgur.com/onyueUY.jpg" className="smallerimg"/>
      <div className="left-text">
        The design is intentionally organic, placing it in direct contrast with
        the digital style popular in the field. The meanings of the controls are
        intentionally obscure on the first interaction. This is to encourage
        exploration and discovery, rather than the achievement of specific sonic
        goals. For those looking to have granular, precise control over their
        synthesis, there is already a variety of tools. Instead, the
        Soundtable fulfills a different need: to have a fun and casual introduction
        to sound synthesis.<br></br>
        <br></br> In the design process, I considered many divergent possibilities, 
        ranging from a traditional piano layout to a haptic handheld option. 
        I decided on this more furnished design. As an object looking to bridge the gap between the 
        organic and the fabricated, the Soundtable's hard edges contrasted with the abstract 
        interface and organic materials, gesturing towards this goal. While my ideas were sometimes 
        constrained by my technical abilities, in this stage, I found an achievable design through 
        initial experimentation. 
        <br></br>
        <br></br>
      </div>
      <div className="seperator"></div>
      <div className="subhead-wide">Implementation</div>
      <div className="left-text-small">
        Eager to create a tactile and touchable design
        without a digital aesthetic, I created an interface utilizing capacitive touch
        sensors and copper tape. My initial design consisted of overlapping
        sections of tape. However, the overlapping signals grounded each other
        and brought the outputs to zero.
      </div>
      <img className="smallimg" src="https://i.imgur.com/pGaSVib.jpg" />
      <img className="smallimg" src="https://i.imgur.com/Uyi6DF1.jpg" />
      <img className="smallimg" src="https://i.imgur.com/W2rC6hg.jpg" />
      <div className="left-text-big-text">
        As a result, I created an alternative design that, in the end, better
        suited the needs of the project. This iteration drew on at the
        grid-like aesthetic I was intentionally subverting, while keeping the
        simplicity needed.
      </div>
      <div className="left-text-big-text">
        With the circuitry working, I wrote a program that received serial data
        from the Arduinos and utilized the{" "}
        <a
          href="https://github.com/ideoforms/pylive"
          target="_blank"
          rel="noreferrer"
        >
          pyLive
        </a>{" "}
        library to control Ableton Live. You can find the GitHub repository{" "}
        <a
          href="https://github.com/willallstet/soundtable"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </div>
      <img className="mediumImg" src="https://i.imgur.com/srWmGfm.png" />
      <div className="nl"></div>
      <div className="left-text-big-text">
        When creating the casing, it was
        important for the project's goals to create a natural-looking piece of
        furniture with organic materials.<br></br>
        <br />
        In the end, the object accomplished its design goals. As a mixture of a
        UX and art project, the Soundtable's somewhat mystified uses/controls were important
        to its thesis. If I were to make
        another iteration, I would focus on creating a more organic shape to
        further signal its ideological departure from a traditional
        synthesizer ethos.
      </div>{" "}
      <div className="centerElements">
        <img className="smallimg" src="https://i.imgur.com/SyWbFYw.jpg" />
        <img className="smallimg" src="https://i.imgur.com/FZMI8bd.jpg" />
        <img className="smallimg" src="https://i.imgur.com/VT8PnMR.jpg" />
      </div>
    </body>
  );
}

export default Soundtable;
