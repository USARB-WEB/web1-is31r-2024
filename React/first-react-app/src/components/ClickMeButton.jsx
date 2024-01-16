export default function ClickMeButton(){

    function handleClick(){
        alert("You clicked me!");
    }

    return <button onClick={handleClick}>Click Me!</button>
}