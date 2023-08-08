## slate 功能尝试

1.  全局创建 editor 对象

```js
const editor = useMemo(() => withReact(createEditor()), []);
//创建方式待调研，下面的也行
const [editor] = useState(withReact(createEditor()));
```

2. textarea 的实现版

```js
<Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
  <Editable placeholder="Enter some plain text..." onKeyDown={keyDownHandler} />
</Slate>
```

onChange 可以拿到每次更改后最新的值，Editable 上面可以绑定原生事件，并拦截自定义一些输入

```js
const keyDownHandler = (e) => {
  if (e.key === '&') {
    e.preventDefault();
    editor.insertText('jack');
  }
};
```

## 相关文档

1. 中文 https://rain120.github.io/athena/zh/slate/walkthroughs/03-defining-custom-elements.html
2. https://github.com/ianstormtaylor/slate
3. https://github.com/udecode/plate
