import { Auth } from "@supabase/auth-ui-react";
import supabaseClient from "../superbaseClient";

const Authentication = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
      }}
    >
      <Auth
        supabaseClient={supabaseClient}
        appearance={{
          style: {
            container: { width: "340px" },
            anchor: { display: "flex", justifyContent: "center" },
            label: { paddingTop: "20px" },
            button: { marginTop: "20px", marginBottom: "20px" },
          },
          extend: false,
          className: {
            container: "container",
            divider: "divider",
            input: "input",
            label: "label",
            message: 'help is-danger',
            button: "button",
          },
        }}
        providers={["discord"]}
      />
    </div>
  );
};

export default Authentication;
