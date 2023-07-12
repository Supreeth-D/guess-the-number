import React, {useState} from "react";

const GuessNumLogic = () => {
    
        var num = Math.floor(Math.random() * 6);
        //var guessNum = 4
        const [value, setValue] = useState("");
        const onChange = e => setValue(e.target.value);
        const [results, setResults] = useState("");
        console.log(num);
        const onClick = () => {
            const userGuess = value;
            if(userGuess == num)
                setResults(<p className ="success">Correct Number is : {num},{userGuess} is Correct</p>);
            else if(userGuess > num)
                setResults(<p className ="High">Correct Number is : {num},{userGuess} is Too High, Try again!!</p>);
            else if(userGuess < num)
                setResults(<p className ="Low">Correct Number is : {num},{userGuess} is Too Low, Try again!!</p>);
            else
                setResults(<p>is the original number</p>)
            
        };

       
    return(
        <main>
            <p class="Title">Guess a number between 1 to 10</p>
            <input value={value} type="number" onChange={onChange}/>
            <button type="submit" onClick={onClick}>Guess</button>
            <br/>
            <br/>
            {results}
        </main>
    );

};

export default GuessNumLogic