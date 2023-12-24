import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { sessionContext } from './context/sessionContext'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import Dataslate from './pages/Dataslate'
import supabaseClient from './superbaseClient'
import useSystemError from './stores/systemError.ts'

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const error = useSystemError((state) => state.error)
  const resetError = useSystemError((state) => state.resetError)

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return <Authentication />
  } else {
    return (
      <sessionContext.Provider value={session}>
        {error && (
          <div style={{ padding: '10px' }}>
            <div className="notification is-danger">
              <button className="delete" onClick={resetError}></button>
              {error}
            </div>
          </div>
        )}
        <BrowserRouter basename={'/KTSOCM/'}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/dataslate/:dataslateId" element={<Dataslate />} />
          </Routes>
        </BrowserRouter>
      </sessionContext.Provider>
    )
  }
}

export default App
