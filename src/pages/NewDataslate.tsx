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

    const faction = factions.find((faction) => faction.id === factionConverter);

    if (!faction) {
      console.log("Opprs error");
      return;
    }

    await postDataslate(
      session?.user.id ?? "",
      data?.killTeamName,
      faction,
      ""
    );
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="lable"> Enter Kill Team Name... </label>
        <div className="control">
          <input
            className="input is-small"
            type="text"
            {...register("killTeamName")}
          />
        </div>
      </div>
      {errors.killTeamName && (
        <span style={{ color: "red" }}>{errors.killTeamName.message}</span>
      )}
      <div className="field">
        <label className="lable"> Chose Faction </label>
        <div className="control">
          <div className="select">
            <select {...register("faction")} defaultValue="">
              <option value=""> Select From Dropdown</option>
              {factions?.map((faction) => {
                return (
                  <>
                    <option value={faction.id.toString()}>
                      {faction.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
        </div>
        <span style={{ color: "red" }}>{errors.faction?.message}</span>
      </div>
      <p className="control">
        <button className="button is-success" type="submit">
          Submit
        </button>
      </p>
    </form>
  );
};

export default NewDataslate;
