import { createClient } from '@supabase/supabase-js'
import { Dataslate as DataslateJson } from './data/dataslate.ts'

const supabaseClient = createClient<Database>(
  'https://xkgvpmjinpdnjdzkcncf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ3ZwbWppbnBkbmpkemtjbmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxOTIwNDYsImV4cCI6MjAwNDc2ODA0Nn0.6A3nJNGM6zUn0Aoys8kiyJOCQxk0sfrpKRwaY7AQKVc',
)

export interface Database {
  public: {
    Tables: {
      dataslate_json: {
        Row: {
          created_at: string
          id: number
          json: DataslateJson
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          json: DataslateJson
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          json?: DataslateJson
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'dataslate_json_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export default supabaseClient
