// EichholzSiloContent.js
import React from 'react';

const EichholzSiloContent = () => (
  <div>
    {/* Content for Eichholz Silo */}
    <h2>Eichholz Silo Content</h2>
    <p>This is the content for Eichholz Silo.</p>

    {/* Embed ChatGPT website within an iframe */}
    <iframe
      title="ChatGPT"
      src="https://www.perga.com"
      style={{ width: '100%', height: '700px', border: '1px solid #ccc' }}
    ></iframe>
      {/* <iframe
  title="Remote Server"
  src={`http://10.121.1.11:4840/admin`}
  style={{ width: '100%', height: '700px', border: '1px solid #ccc' }}
></iframe> */}
  </div>
);

export default EichholzSiloContent;
