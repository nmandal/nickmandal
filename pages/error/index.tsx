import React from 'react';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="prose mx-auto mt-16">
      <h1> Error:{router.query.error}! </h1>
      <p>
        <br /> Something is off...
      </p>
      <br />
    </div>
  );
};

export default ErrorPage;
