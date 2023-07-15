import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Authentication from "./pages/Authentication";
import { createClient } from "@supabase/supabase-js";
import { Session } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xkgvpmjinpdnjdzkcncf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ3ZwbWppbnBkbmpkemtjbmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxOTIwNDYsImV4cCI6MjAwNDc2ODA0Nn0.6A3nJNGM6zUn0Aoys8kiyJOCQxk0sfrpKRwaY7AQKVc"
);

function App() {
  const [session, setSession] = useState<Session | null>()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    console.log("Session: " + session)
    return  <Authentication />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
