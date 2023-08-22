import { useForm } from "react-hook-form";
//KNEEL BEFORE
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Session } from "@supabase/supabase-js";
import { Factions, getFactions, postDataslate } from "../superbaseClient";
import { useContext, useEffect, useState } from "react";
import { sessionContext } from "../context/sessionContext";

type FormData = {
  killTeamName: string;
  faction: string;
};

// interface NewDataslateProps {
//   session: Session;
// }

const NewDataslate = (/*props: NewDataslateProps*/) => {
  const [factions, setFactions] = useState<Factions | null>(null);
  const session = useContext(sessionContext);

  useEffect(() => {
    const fetchFactions = async () => {
      try {
        const { data: factions, error } = await getFactions();
        if (error) throw error;
        setFactions(factions);
      } catch (e: any) {
        console.log(e.Message);
      }
    };

    fetchFactions();
    console.log("contex userID: " + session?.user.id);
  }, []);

  const schema: ZodType<FormData> = z.object({
    killTeamName: z.string().min(2).max(50),
    faction: z.string().nonempty("Must select a Faction!!!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const factionConverter = Number(data.faction);
    console.log(factionConverter);
    alert("Success!");
    window.location.href = "/";

    try {
      const { error } = await postDataslate({
        team_name: data?.killTeamName,
        faction_id: factionConverter,
        // user_id: props.session?.user.id,
        user_id: session?.user.id ?? "",
      });

      if (error) throw error;
    } catch (e: any) {
      console.log("error: " + e.Message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> Enter Kill Team Name... </label>
      <input type="text" {...register("killTeamName")} />
      {errors.killTeamName && (
        <span style={{ color: "red" }}>{errors.killTeamName.message}</span>
      )}
      <label> Chose Faction </label>
      <select {...register("faction")} defaultValue="">
        <option value=""> Select From Dropdown </option>
        {factions?.map((faction) => {
          return (
            <>
              <option value={faction.id.toString()}>{faction.name}</option>
            </>
          );
        })}
      </select>
      <span style={{ color: "red" }}>{errors.faction?.message}</span>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewDataslate;
