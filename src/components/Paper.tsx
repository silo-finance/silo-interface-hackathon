import React from 'react';

export default function Paper({ children, className, ...rest }): JSX.Element {
  return (
    <div className={`rounded ${className}`} {...rest}>
      {children}
    </div>
  );
}
