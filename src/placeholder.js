const placeholder = `
# Hello and Welcome to my React Markdown Previewer!

## Here you will be able to experiment with Markdown, a lightweight markup language for creating formatted text using a plain editor.

### This project was built as a Free Code Camp Academy project

For inline code, place between two backticks \` \` - \`\`const reactIsCool = true\`\`

For multi-line code, use 3 backticks:

\`\`\`
function isReactCool(bool) {
  if (!bool) {
    return console.log('Well fine then')
  }
}
\`\`\`

You can also make text **bold** by using ** before and after the text of choice, or _italic_ with by replacing the asterisks with a single _.
**_You can even use both!_**

Crossing out things is easy with two tildes -  ~~I am not having fun!~~

Links are made by placing the word you want to display for the link between two square brackets, followed by the url link warpped in parenthesis. For example- \`[ReactJs!](www.reactjs.org)\`
[Free Code Camp!](https://www.freecodecamp.com)

Block quotes are easily made with a greater than sign (>) before the text:

> “Radiate boundless love towards the entire world.” - Buddah

And now for some tables- to add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. Make sure to add a pipe to either side of the row. For example: 

This: 
\`\`\`
|Header1  | Header2  | Header3 |
|-------- | ---------| --------|
|Content1 | Content2 | Content3|
|Content4 | Content5 | Content6|
\`\`\`

Will output as this:

|Header1  | Header2  | Header3 |
|-------- | ---------| --------|
|Content1 | Content2 | Content3|
|Content4 | Content5 | Content6|



Wondering where the lists are? Markdowns got you covered!

Unordered lists can be easily made by using dashes (-). Use an indented dash to created a nested list.

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item 

For an ordered list, replace the dash with numbers. While numbering order does not matter, ordered lists should always start with 1.
1. Hello
1. I'm
2. An
  1. Ordered
3. List!

And finally, you can embed a local image into markdown easily. Just open with an exclamation mark, wrap the alt with square brackets, and finally wrap the url with parenthesis.

![!DWD](apple-touch-icon.png)

You're a markdown expert now!
`;

export default placeholder;
