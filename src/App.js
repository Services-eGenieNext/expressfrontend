import React,{useState, useEffect} from 'react'
import './App.css';
import SearchField from './Component/Search'
import StoryViewer from './Component/storyViewer';

function App() {
  const [storieResults, setStoryResults] = useState([])

  return (
    <div className="App bg-black h-[100vh] overflow-y-auto p-5 text-white">
      <p className='font-bold sm:text-[32px] text-[24px]'>Create Your Own Fictional Story</p>
      <SearchField data={storieResults} setData={setStoryResults} />
      <div className='mt-20'>
        <StoryViewer storieResults={storieResults} />
      </div>
    </div>
  );
}

export default App;
