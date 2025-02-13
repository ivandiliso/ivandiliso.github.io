import React from 'react';

export function Container({ children }) {
  return <div className="container-fluid mt-5 pt-5 pb-5 mb-5" style={{paddingLeft: '20%', paddingRight: '20%', }}>{children}</div>;
}