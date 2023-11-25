
let points : 0;

function SubmitButton(){
    let showResult = false;
    const checkPoints = () => {points == 0 ? showResult = true : showResult = false; console.log(points)}
    let resultText = () => showResult == false ? <p></p> : <p className='text-success'>You won!</p>;

    const submitBtn = <button onClick={checkPoints}>Submit</button>
    return (
        <>
            {submitBtn}
            {resultText()}
        </>
    )
}

export default SubmitButton