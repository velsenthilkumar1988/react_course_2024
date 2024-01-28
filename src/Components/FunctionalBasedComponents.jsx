//Two types 1. function and 2. Arrow types

//Functional based
function FunctionalBasedComponents(){
    return(
        <div>
            Welcome to Functional Compents
            <FunctionalBasedUI/>
        </div>
    )
}

const FunctionalBasedUI = ()=>{
    return(
        <div>
            Arrow Child Functional
        </div>
    )
}

export default FunctionalBasedComponents;