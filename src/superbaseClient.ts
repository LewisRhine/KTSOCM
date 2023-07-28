import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient<Database>(
  "https://xkgvpmjinpdnjdzkcncf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ3ZwbWppbnBkbmpkemtjbmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxOTIwNDYsImV4cCI6MjAwNDc2ODA0Nn0.6A3nJNGM6zUn0Aoys8kiyJOCQxk0sfrpKRwaY7AQKVc"
);

interface Database {
  public: {
    Tables: {
      dataslate: {
        Row: DataSlate;
        Insert: {
          base?: number | null;
          created_at?: string | null;
          faction: number;
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
          faction?: number;
          history?: string | null;
          id?: number;
          notes?: string | null;
          quirks?: string | null;
          req_points?: number;
          selectable_keyword?: string | null;
          spec_ops_log?: number[] | null;
          team_name?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      factions: {
        Row: Faction;
        Insert: {
          id?: number;
          keyword: string;
          name: string;
        };
        Update: {
          id?: number;
          keyword?: string;
          name?: string;
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

export interface DataSlate {
  base: number | null;
  created_at: string | null;
  faction: number;
  history: string | null;
  id: number;
  notes: string | null;
  quirks: string | null;
  req_points: number;
  selectable_keyword: string | null;
  spec_ops_log: number[] | null;
  team_name: string;
  user_id: string;
}

export interface Faction {
  id: number;
  keyword: string;
  name: string;
}

export default supabaseClient;
