import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Authentication from "./pages/Authentication";
import { Session } from "@supabase/supabase-js";
import supabaseClient from "./superbaseClient";
import NewDataslate from "./pages/NewDataslate";
import DataslateForm from "./componants/DataslateForm";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  console.log("Session: " + session);
  if (!session) {
    return <Authentication session={session} />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Authentication session={session} />} />
          <Route path="/new-dataslate" element={<DataslateForm session={session} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
