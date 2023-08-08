import React, { useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const PlainTextExample = () => {
  // const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor = useMemo(() => withReact(createEditor()), []);
  const keyDownHandler = (e) => {
    if (e.key === '&') {
      e.preventDefault();
      editor.insertText('jack');
    }
  };
  const handleChange = (v) => {
    console.log('v--', v);
  };
  return (
    <Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
      <Editable placeholder="Enter some plain text..." onKeyDown={keyDownHandler} />
    </Slate>
  );
};

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'This is editable plain text, just like a <textarea>!' }],
  },
];

export default PlainTextExample;
