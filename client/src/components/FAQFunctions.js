import React from "react";

import history from '../history'

function onclick(){
  history.push('/user/account')
}

export const question1 = () => (
  <p>
    It’s an app where basketball players can find and create pick up games to
    play in.
  </p>
);

export const question2 = () => (
  <p>
    <a href='/user/account'>Sign Up</a> for an account Find games to play in Create games for you and others
    to play in Keep track of all games you have joined
  </p>
);

export const question3 = () => (
  <p>Yes. Without an account, the app will not let you join any games.</p>
);

export const question4 = () => (
  <p>An account A pick up game available for people to join. That’s it.</p>
);

export const question5 = () => (
    <p></p>
)
