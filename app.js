// IF nested HTML
const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', {}, "I am a h1 tag"),
        React.createElement('h2', {}, "I am a h2 tag")
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, "I am a h1 tag"),
        React.createElement('h2', {}, "I am a h2 tag")
    ])
])
console.log(parent)

  
// const heading = React.createElement('h1',
//     { id: "heading", xyz: "numbers" },
//     "Hello World from React")

// console.log(heading)  // This will give OBJECT

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)    