import React from 'react';
import SkeletonLoader from './SkeletonLoader';

function App() {
  return (
    <div style={{ margin: '15px' }}>
      <SkeletonLoader style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }} />
      <SkeletonLoader style={{ width: '200px', height: '15px', marginBottom: '15px' }} />
      <SkeletonLoader style={{ width: '200px', height: '15px', marginBottom: '15px' }} />
    </div>
  );
}

export default App;
