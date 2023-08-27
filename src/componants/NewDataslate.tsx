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

interface NewDataslateProps {
  cancelShowModal: () => void;
}

const NewDataslate = (props: NewDataslateProps) => {
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
    <div className="modal is-active">
      <div className="modal-background">
        <div className="modal-card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <header className="modal-card-head">
                <label className="modal-card-title"> Enter New Team </label>
              </header>
              <div className="modal-card-body">
                Enter Kill Team Name...
                <input
                  className="input is-small"
                  type="text"
                  {...register("killTeamName")}
                />
                {errors.killTeamName && (
                  <span style={{ color: "red" }}>
                    {errors.killTeamName.message}
                  </span>
                )}
                <div className="field">
                  <label className="lable"> Chose Faction </label>
                  <div className="control" />
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
                  <span style={{ color: "red" }}>
                    {errors.faction?.message}
                  </span>
                </div>
              </div>
              <footer className="modal-card-foot">
                <button className="button is-success" type="submit">
                  Submit
                </button>
                <button className="button" onClick={props.cancelShowModal}>
                  Cancel
                </button>
              </footer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewDataslate;
