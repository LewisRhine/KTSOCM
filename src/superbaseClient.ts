import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient<Database>(
  "https://xkgvpmjinpdnjdzkcncf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ3ZwbWppbnBkbmpkemtjbmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxOTIwNDYsImV4cCI6MjAwNDc2ODA0Nn0.6A3nJNGM6zUn0Aoys8kiyJOCQxk0sfrpKRwaY7AQKVc"
);

export async function getDataslates() {
  return supabaseClient.from("dataslate").select("*, faction (*)");
}

export type DataslatesResponse = Awaited<ReturnType<typeof getDataslates>>;
export type Dataslates = DataslatesResponse["data"];

export async function getDataslate(id: number) {
  return supabaseClient
    .from("dataslate")
    .select("*, faction (*)")
    .eq("id", id)
    .single();
}

export type DataslateResponse = Awaited<ReturnType<typeof getDataslate>>;
export type Dataslate = DataslateResponse["data"];

type PostDataslate = Database["public"]["Tables"]["dataslate"]["Insert"];
export async function postDataslate(newDataslate: PostDataslate) {
  return supabaseClient.from("dataslate").insert(newDataslate);
}
type UpdateDataslate = Database["public"]["Tables"]["dataslate"]["Update"];
export async function updateDataslate(dataslate: UpdateDataslate) {
  return supabaseClient
    .from("dataslate")
    .update(dataslate)
    .eq("id", dataslate.id);
}

export async function getFactions() {
  return supabaseClient.from("faction").select("*");
}

export type FactionResponse = Awaited<ReturnType<typeof getFactions>>;
export type Factions = FactionResponse["data"];

export interface Database {
  public: {
    Tables: {
      base_of_operations: {
        Row: {
          asset_capacity: number;
          dataslate_id: number;
          description: string | null;
          id: number;
          name: string;
          stash: number[] | null;
          strategic_assets: number[] | null;
          user_id: string;
        };
        Insert: {
          asset_capacity?: number;
          dataslate_id: number;
          description?: string | null;
          id?: number;
          name: string;
          stash?: number[] | null;
          strategic_assets?: number[] | null;
          user_id: string;
        };
        Update: {
          asset_capacity?: number;
          dataslate_id?: number;
          description?: string | null;
          id: number;
          name?: string;
          stash?: number[] | null;
          strategic_assets?: number[] | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "base_of_operations_dataslate_id_fkey";
            columns: ["dataslate_id"];
            referencedRelation: "dataslate";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "base_of_operations_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      dataslate: {
        Row: {
          base: number | null;
          created_at: string | null;
          faction_id: number;
          history: string | null;
          id: number;
          notes: string | null;
          quirks: string | null;
          req_points: number;
          selectable_keyword: string | null;
          spec_ops_log: number[] | null;
          team_name: string;
          user_id: string;
        };
        Insert: {
          base?: number | null;
          created_at?: string | null;
          faction_id: number;
          history?: string | null;
          id?: number;
          notes?: string | null;
          quirks?: string | null;
          req_points?: number;
          selectable_keyword?: string | null;
          spec_ops_log?: number[] | null;
          team_name: string;
          user_id: string;
        };
        Update: {
          base?: number | null;
          created_at?: string | null;
          faction_id?: number;
          history?: string | null;
          id: number;
          notes?: string | null;
          quirks?: string | null;
          req_points?: number;
          selectable_keyword?: string | null;
          spec_ops_log?: number[] | null;
          team_name?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "dataslate_faction_id_fkey";
            columns: ["faction_id"];
            referencedRelation: "faction";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "dataslate_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      faction: {
        Row: {
          history_table: string[] | null;
          id: number;
          keyword: string;
          name: string;
          quirk_table: string[] | null;
        };
        Insert: {
          history_table?: string[] | null;
          id?: number;
          keyword: string;
          name: string;
          quirk_table?: string[] | null;
        };
        Update: {
          history_table?: string[] | null;
          id?: number;
          keyword?: string;
          name?: string;
          quirk_table?: string[] | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export default supabaseClient;
