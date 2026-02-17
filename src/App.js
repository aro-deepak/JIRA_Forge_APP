import React, { useEffect, useState } from 'react';
import { events, invoke } from '@forge/bridge';



function App() {
  return (
    <div style={{ height: "600px" }}>
      <iframe
        src="https://your-domain.com"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="External App"
      />
    </div>
  );
}

export default App;