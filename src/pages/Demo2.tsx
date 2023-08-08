import { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'This is editable plain text!' }],
  },
];
const Demo2 = () => {
  const [editor] = useState(withReact(createEditor()));
  console.log('editor----', editor);
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  );
};
export default Demo2;
