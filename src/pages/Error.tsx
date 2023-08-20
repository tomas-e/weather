import React from 'react';

interface ErrorProps {
  error: Error;
}

function ErrorPage(props: ErrorProps) {
  return (
    <div>
      <h1>Error!</h1>
      <p>{props.error.message}</p>
    </div>
  );
}

export default ErrorPage;
