
import { Fragment } from 'react';
import {poem} from './poem-data.js';

export const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };

let lines = poem.lines;
function createHaiku({lines}) {
    return(
        <article>
            {lines.map((line, index)=>
                <Fragment key={index + '-text'}>
                    <p>{line}</p>
                    {index < lines.length - 1  ? <hr key={index + '-'}/> : null}
                </Fragment>
            )}
        </article>
    );
}