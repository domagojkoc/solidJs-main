import { createEffect, createSignal } from "solid-js"

export default function Counter (){
    const[count,setCount] = createSignal(0); 
    const doubleCount = () => count() *2;

    createEffect(()=>{

        if (counter() % 2 == 0){
            console.log(counter() + "je djeljiv s dva");
        }
    });

    setInterval(() => {
        setCount(count() + 1);
    }, 1000);

    return(
        <div>
            Brojač: {count()}
             <br/>
            Dupli brojač: {doubleCount()}
        </div>
    )
}