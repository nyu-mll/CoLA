import React from 'react';

const About = () => {
  return (
    <div className="text-left font-small text">
      <div>
        <div>CoLA - The Corpus of Linguistic Acceptability</div>
        <br/>
        <div><a href="https://alexwarstadt.com/">Alex Warstadt</a></div>
        <div><a href="https://apsdehal.in">Amanpreet Singh</a></div>
        <div><a href="https://nyu.edu/projects/bowman">Sam Bowman</a></div>
        <div>New York University (NYU)</div>
      </div>
      <br/>
      <div>
        <div className="strong">Introduction</div>
        <br/>
        <div>
          <div>
          The Corpus of Linguistic Acceptability (CoLA) in its full form consists of 10657 sentences from 23 linguistics publications,
          expertly annotated for acceptability (grammaticality) by their original authors.
          The public version provided here contains 9594 sentences belonging to training and development sets, and excludes 1063 sentences belonging to a held out test set.
          Contact alexwarstadt [at] gmail [dot] com with any questions or issues.
          </div>
          <br/>
        </div>

        <div className="strong">Download</div>
        <br/>
        <div>
          Download the dataset from this <a href="cola_public.zip">link</a>.
        </div>
        <br/>
        <div className="strong">Citation</div>
        <br/>
        <pre className="citation">
        @misc{'{'}warstadt-18,<br/>
                  Author = {'{'}Warstadt, Alexander and Singh, Amanpreet <br/>
                            and Bowman, Samuel R.{'}'},<br/>
                  Howpublished = {'{'}http://nyu-mll.github.io/cola{'}'},<br/>
                  Title = {'{'}Corpus of Linguistic Acceptability{'}'},<br/>
                  Year = {'{'}2018}{'}'}<br/>
        </pre>
        <br/>
        <div className="strong">Data description</div>
        <br/>
        <div>
          <div className="strong">Split</div>
          <br/>
          We have split the data into an in-domain set comprised sentences from 17 sources and an out-of-domain set comprised of the remaining 6 sources. The in-domain set is split into train/dev/test sets, and the out-of-domain is split into dev/test sets. The test sets are not made public. For convenience, each dataset is provided is provided twice, in raw form, and tokenized form. We used the NLTK tokenizer. The public data is split into the following files:
          <ul>
            <li>raw/in_domain_train.tsv (8551 lines)</li>
            <li>raw/in_domain_dev.tsv (527 lines)</li>
            <li>raw/out_of_domain_dev.tsv (516 lines)</li>
            <li>tokenized/in_domain_train.tsv (8551 lines)</li>
            <li>tokenized/in_domain_dev.tsv (527 lines)</li>
            <li>tokenized/out_of_domain_dev.tsv (516 lines)</li>
          </ul>
        </div>
        <br/>
        <div>
          <div className="strong">Data Format</div>
          <br/>
          <div>
            Each line in the .tsv files consists of 4 tab-separated columns.
            <table>
              <tbody>
                <tr>
                  <td>Column 1:</td><td> the code representing the source of the sentence. </td>
                </tr>
                <tr>
                  <td>Column 2:</td><td> the acceptability judgment label (0=unacceptable, 1=acceptable). </td>
                </tr>
                <tr>
                  <td>Column 3:</td><td> the acceptability judgment as originally notated by the author. </td>
                </tr>
                <tr>
                  <td>Column 4:</td><td> the sentence.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          <br/>
          <div className="strong">Corpus Sample</div>
          <br/>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>clc95</td><td>  0</td><td>  *  </td><td>In which way is Sandy very anxious to see if the students will be able to solve the homework problem?</td>
                </tr>
                <tr>
                  <td>c-05</td><td>   1</td><td>     </td><td>The book was written by John.</td>
                </tr>
                <tr>
                  <td>c-05</td><td>   0</td><td>  *  </td><td>Books were sent to each other by the students.</td>
                </tr>
                <tr>
                  <td>swb04</td><td>  1</td><td>     </td><td>She voted for herself.</td>
                </tr>
                <tr>
                  <td>swb04</td><td>  1</td><td>     </td><td>I saw that gas can explode.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          <div className="strong">Processing</div>
          <br/>
          <div>
          During gathering of the data and processing,
          some sentences from the source documents may have been omitted or altered.
          We retained all acceptable examples, and excluded any examples given intermediate
          judgments such as “?” or “#”. In addition, we excluded examples of unacceptable
          sentences not suitable for the present task because they required reasoning about
          pragmatic violations, unavailable semantic readings, or nonexistent words.
          We take responsibility for any errors.
          </div>
        </div>
        <br/>
        <div className="strong">Disclaimer</div>
        <br/>
        <div>
          The text in this corpus is excerpted from the published works at the end of this document,
          and copyright (where applicable) remains with the original authors or publishers.
          We expect that research use within the US is legal under fair use,
          but make no guarantee of this.<br/>
        </div>
      </div>
    </div>
  );
}

export default About;
