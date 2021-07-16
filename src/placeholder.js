const placeholder = `# Hello and Welcome to my React Markdown Previewer!
## Here you will be able to experiment with Markdown, a lightweight markup language for
creating formatted text using a plain editor.
### This project was built as a Free Code Camp Academy project
For inline code, place between two backticks \`\` :
\`const reactIsCool = true\` 
\`\`\`
// For multi-line code, use 3 backticks:
function isReactCool(event) {
  let yes = false
  if (makingCode && !badTime) {
    return yes === true;
  }
}
\`\`\`
You can also make text **bold** by using ** before and after the word or sentence of choice
Or, _italic_ with an underscore _.
**_You can even use both!_**
Crossing out things is easy with two tildes.  ~~I am not having fun!~~
Links are made by placing the word you want for the link between two brackets, then followed by the link in parenthesis.
 For Example: \`[linkTitle](www.url-you-want-to-link)\`

 [Free Code Camp!](https://www.freecodecamp.com)

 Block quotes are easily made with a greater than sign > before the text:
>Block Quotes!
Now for some tables.
Header1  | Header2  | Header3
-------- | ---------| --------
Content1 | Content2 | Content3
Content4 | Content5 | Content6
Lists can be made by dashes, and each indentation level will change what the list looks like.
- And of course there are lists.
  - List1
     - List2
1. And of course there are numbered lists
1. You can just use 1.'s if you'd like!
1. And finally you can embed a local image. Follow the link format and add a ! before the brackets
![!DWD](apple-touch-icon.png)
`;

export default placeholder;
