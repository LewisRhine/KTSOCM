import { useCallback, useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { Session } from "@supabase/supabase-js";
import supabaseClient from "../superbaseClient";

interface AuthenticationProps {
  session: Session | null;
}

const Authentication = (props: AuthenticationProps) => {
  // return <div>auth</div>;
  return <Auth supabaseClient={supabaseClient} />;
};

export default Authentication;
