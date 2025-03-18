import MyComponent from "./MyComponent";

const FirstComponent = () =>{

    return(
        <div>
        <h1>Meu primeiro component</h1>
        <p className="texto">My text</p>
        <MyComponent />
        </div>
    );
};

export default FirstComponent