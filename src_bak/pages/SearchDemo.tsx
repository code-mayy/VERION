import { ProgrammaticSearchBar } from "@/components/ProgrammaticSearchBar";

const SearchDemo = () => {
  const handleSearch = (query: string, files?: File[], result?: string) => {
    console.log("Search query:", query);
    console.log("Uploaded files:", files);
    console.log("AI Response:", result);
    
    // The ProgrammaticSearchBar handles the API call automatically
    // and passes the result to this callback
    if (result) {
      // You can display the result in a modal, update state, etc.
      console.log("AI Response received:", result);
    }
  };

  return (
    <div 
      style={{
        backgroundColor: '#0f1117',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100vh',
        flexDirection: 'column',
        padding: '40px'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', textAlign: 'left' }}>
        Welcome to ElevenDocs
      </h1>
      <p style={{ color: '#aaa', marginBottom: '30px', textAlign: 'left' }}>
        AI-powered legal document analysis at your fingertips
      </p>

      <div style={{ width: '100%', maxWidth: '750px' }}>
        <ProgrammaticSearchBar 
          onSearch={handleSearch}
          placeholder="Ask ElevenDocs or upload..."
          apiEndpoint="http://127.0.0.1:8002/invoke"
        />
      </div>

      <p style={{ marginTop: '20px', color: '#888', fontSize: '14px', textAlign: 'left' }}>
        ElevenDocs can analyze legal documents. Always consult with a qualified attorney for legal advice.
      </p>
    </div>
  );
};

export default SearchDemo;
