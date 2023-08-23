import { useForm } from "react-hook-form";
//KNEEL BEFORE
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Session } from "@supabase/supabase-js";
import { useContext, useEffect, useState } from "react";
import { sessionContext } from "../context/sessionContext";
import { factions } from "../data/faction.ts";
import { postDataslate } from "../data/dataslate.ts";

type FormData = {
  killTeamName: string;
  faction: string;
};

// interface NewDataslateProps {
//   session: Session;
// }

const NewDataslate = (/*props: NewDataslateProps*/) => {
  const session = useContext(sessionContext);

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
    // alert("Success!");
    // window.location.href = "/";

    const faction = factions.find((faction) => faction.id === factionConverter);

    if (!faction) {
      console.log("Opprs error");
      return;
    }

    await postDataslate(
      session?.user.id ?? "",
      data?.killTeamName,
      faction,
      "",
    );
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
        <option value=""> Select From Dropdown</option>
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
