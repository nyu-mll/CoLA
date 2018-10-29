import React from 'react';
import Form from './Form';

const VerbFrames = () => {
  return (
    <div className="text-left font-small text">
      <div>
        <div><a href="http://www.cis.lmu.de/~kann/">Katharina Kann (NYU)</a></div>
        <div><a href="https://alexwarstadt.com/">Alex Warstadt (NYU)</a></div>
        <div><a href="https://wp.nyu.edu/adinawilliams/">Adina Williams (FAIR)</a></div>
        <div><a href="https://nyu.edu/projects/bowman">Sam Bowman (NYU)</a></div>
      </div>
      <br/>
      <div>
        <div className="strong">Data Description</div>
        <br/>
        <div>
          <div>
          Here we present two complementary datasets for download:
          The Lexical and Verb-Frame Alternations (LAVA) dataset and the Frame and Alternations of Verbs Acceptability (FAVA) dataset.
          LAVA consists of 515 verbs annotated for membership in 10 classes corresponding to different verb frames.
          Annotations are 1 for membership, 0 for non-membership, and x where membership is unknown.
          FAVA consists of nearly 10000 sentences containing the verbs in LAVA appearing in different verb frames and labeled for acceptability (grammaticality).
          Annotations are 1 for acceptable sentences, and 0 for unacceptable sentences.
          Contact alexwarstadt [at] gmail [dot] com with any questions or issues.
          </div>
          <br/>
        </div>

        <div className="strong">Download</div>
        <br/>
        <div>
          Download LAVA from this <a href="lava.zip">link</a>.
        </div>
        <br/>
        <br/>
        <div>
          Download FAVA from this <a href="fava.zip">link</a>.
        </div>
      </div>
    </div>
  );
}

export default VerbFrames;