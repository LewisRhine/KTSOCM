import { useEffect, useState } from "react";
import supabaseClient, { DataSlate } from "../superbaseClient";
import { Session } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";

interface NewDataslateProps {
  session: Session | null;
}

let { data: factions, error } = await supabaseClient
  .from("factions")
  .select("*");

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter Kill Team Name..."
        {...register("team_name")}
      />
      <input
        type="text"
        placeholder="faction drop down"
        {...register("faction")}
      />
    </form>
  );
};

const NewDataslate = (props: NewDataslateProps) => {
  const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
      console.log(data);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Kill Team Name..."
          {...register("team_name")}
        />
        <input
          type="text"
          placeholder="faction drop down"
          {...register("faction")}
        />
      </form>
    );
  };
};

export default NewDataslate;
