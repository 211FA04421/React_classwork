import React, { useRef, useEffect } from 'react';

const LoginForm = () => {
  // Create a ref for the username input field
  const usernameRef = useRef(null);

  // Focus on the username input when the component mounts
  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []); // Empty dependency array to run only once after the initial render

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameRef} // Attach the ref to the username input
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;