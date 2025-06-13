import { useState } from 'react';

/** Users can enter their name to receive a token from the API. */
export default function Entrance() {
  const [signUp, setSignUp] = useState('');
  // TODO: call signup when form is submitted


  const logIn = async (event) => {
    event.preventDefault(); 
    console.log('LOGGING IN');

  const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
    { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: signUp
                }) 
              });
          
              const tokenObj = await response.json();
              setToken(tokenObj.token);
  }
  

  return (
    <>
      <h1>Cave Entrance</h1>
      <h2>{ signUp }</h2>
      <p>Your journey has brought you to the base of a rocky mountain.</p>
      <p>
        The quickest path forward is through the mountain's winding tunnels, but
        a sturdy metal gate sits closed before you.
      </p>
      <p>
        Two giant badgers stand guard on either side of the gate, their eyes
        fixed on you. The one on the left opens its mouth, and with a deep,
        rumbling voice, it asks, "Who approaches? Speak your name."
      </p>
      <form onSubmit={ logIn }>
        <label>
          Name
          <input type="text" 
          name="name" 
          placeholder="Enter your first name"
          onChange={ (event) => { setSignUp(event.target.value) } } />
        </label>
        <button>Respond</button>
      </form>
    </>
  );
}
