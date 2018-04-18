import React from 'react';

const About = () => {
  return (
    <div className="text-left font-small text">
      <div>
        <div>Corpus Name here</div>
        <br/>
        <div><a href="mailto:alexwarstadt@gmail.com">Alex Warstadt</a></div>
        <div><a href="https://apsdehal.in">Amanpreet Singh</a></div>
        <div><a href="https://nyu.edu/projects/bowman">Sam Bowman</a></div>
        <div>New York University (NYU)</div>
      </div>
      <br/>
      <div>
        <div class="strong">Introduction</div>
        <br/>
        <div>
          <div>
          This is the ACCePTability Corpus (ACCPT).
          In its full form, it consists of 10657 sentences from 23 linguistics publications,
          expertly annotated for acceptability (grammaticality) by their original authors.
          The public version provided here excludes 533 sentences belonging to a held out test set.
          Contact alexwarstadt [at] gmail [dot] com for use of the held out test set, or with questions.
          </div>
          <br/>
        </div>

        <div class="strong">Download</div>
        <br/>
        <div>
          Download the dataset from this <a href="">link</a>.
        </div>

        <br/>
        <div class="strong">Data description</div>
        <br/>
        <div></div>

        <div class="strong">Disclaimer</div>
        <br/>
        <div>
          The text in this corpus is excerpted from the published works at the end of this document,
          and copyright (where applicable) remains with the original authors or publishers.
          We expect that research use within the US is legal under fair use,
          but make no guarantee of this.
        </div>
      </div>
    </div>
  );
}

export default About;
