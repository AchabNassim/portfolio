import React, { useState , lazy, Suspense} from 'react'
import Container from './containerComponent/Container.jsx';

const Background = window.innerWidth > 1000 ? React.lazy(() => import('./Background.jsx')) : null;

function App() {
  return (
    <>
        {Background && (
          <Suspense>
            <Background />
          </Suspense>
        )}
        <Container />
    </>
  )
}

export default App;
