import { useForm } from "react-hook-form";
//KNEEL BEFORE
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "@supabase/supabase-js";
import supabaseClient, { Faction } from "../superbaseClient";
import { useEffect, useState } from "react";

type FormData = {
  killTeamName: string;
  faction: string;
};

interface NewDataslateProps {
  session: Session | null;
}

const NewDataslate = (props: NewDataslateProps) => {
  const [factions, setFactions] = useState<Faction[] | null>(null);

  useEffect(() => {
    const fetchFactions = async () => {
      try {
        const { data: factions, error } = await supabaseClient
          .from("factions")
          .select("*");
        if (error) throw error;
        setFactions(factions);
      } catch (e: any) {
        console.log(e.Message);
      }
    };

    fetchFactions();
  }, []);

  const schema: ZodType<FormData> = z.object({
    killTeamName: z.string().min(2).max(50),
    faction: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("click");
    try {
      const { error } = await supabaseClient.from("factions").insert({
        team_name: data?.killTeamName,
        faction: data.faction,
        user_id: props.session?.user,
      });
      console.log(data);

      if (error) throw error;
    } catch (e: any) {
      console.log(e.Message);
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
      <select {...register("faction")}>
        {factions?.map((faction) => {
          return <option value={faction.id.toString()}>{faction.name}</option>;
        })}
        {/* <option value={"a"}>a</option> */}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewDataslate;
