import React from 'react'
import ReactDOM  from 'react-dom';

//React Element
const heading = React.createElement('h1',{id:'heading',class:'head'},'Hello world from React')

//Functional Component
const HeadingFunctional1=()=> <h1>Hello from Functional component without return</h1>

//Component composition - componenet under component
const HeadingFunctional=()=>{
    return <div>
        {heading}
        <HeadingFunctional1/>
        <h1>Hello from Functional component</h1>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingFunctional/>);



















// const parent=React.createElement('div',{id:'parent'},
//         React.createElement('div',{id:'child'},
//         React.createElement('h1',{},'H1 tag')));

// const parent=React.createElement('div',{id:'parent'},
//         [React.createElement('div',{id:'child'},
//         [React.createElement('h1',{},'H1 tag'),React.createElement('h2',{},'H2 tag')]),
//         React.createElement('div',{id:'child'},
//         [React.createElement('h1',{},'H1 tag'),React.createElement('h2',{},'H2 tag')])]);

// const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);