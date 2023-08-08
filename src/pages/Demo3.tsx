// 定义自定义元素

import { useCallback, useMemo } from 'react';
import { createEditor, Descendant, Transforms, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const PlainTextExample = () => {
  // const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor = useMemo(() => withReact(createEditor()), []);
  const keyDownHandler = (e) => {
    console.log('e.key--', e.key, 'e.ctrlKey', e.ctrlKey);
    if (e.key === '`' && e.ctrlKey) {
      // 默认阻止插入 "`" 行为。
      e.preventDefault();
      // 否则，把当前选择的块类型设为 "code"
      Transforms.setNodes(editor, { type: 'code' }, { match: (n) => Editor.isBlock(editor, n) });
    }
  };
  const handleChange = (v) => {
    console.log('v--', v);
  };
  // 定义基于在元素上传递 `props` 的渲染函数。在这里我们使用 `useCallback`
  // 记住后续渲染的函数。
  const renderElement = useCallback((props) => {
    console.log('props.element.type--', props.element.type);
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  return (
    <Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
      <Editable placeholder="Enter some plain text..." onKeyDown={keyDownHandler} renderElement={renderElement} />
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
