const customrender = (reactElement,root) =>{
   const browserElement = document.createElement(reactElement.type);
   browserElement.textContent = reactElement.children;
   for (const prop in reactElement.props){
         if(prop === 'children') continue;
          browserElement[prop] = reactElement.props[prop];
    }
      root.appendChild(browserElement);
    }

const reactElement = {              // ye maine ek object create kiya hai
  type : "h1",
  props :{
    style:"color:red;"
  },
  children:"hello world"
}

const root = document.getElementById('root');

customrender(reactElement, root);