import React,{Suspense} from 'react';
import './App.css';
import ErrorBoundary from "./Error";

function loadComponent(name) {
    const Component = React.lazy(() =>
        import(`./${name}.js`)
    );
    return Component;
}
function App() {
    const componentName = localStorage.getItem( "comp"); // change the const value to change the component loaded
    const Component = loadComponent(componentName);
  return (
    <div className="App">
        <Suspense fallback={<div></div>}>
            <ErrorBoundary>
                <Component a={"hiiii"}/>
            </ErrorBoundary>
        </Suspense>
    </div>
  );
}

export default App;
