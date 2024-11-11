export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      Podcast: {
        Row: {
          created_at: string;
          id: number;
          image_url: string | null;
          last_sync: string;
          podcast_id: number;
          rss_url: string | null;
          title: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image_url?: string | null;
          last_sync?: string;
          podcast_id: number;
          rss_url?: string | null;
          title?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          image_url?: string | null;
          last_sync?: string;
          podcast_id?: number;
          rss_url?: string | null;
          title?: string | null;
        };
        Relationships: [];
      };
      PodcastEpisode: {
        Row: {
          created_at: string;
          id: number;
          podcast_id: number;
          rss_data: Json | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          podcast_id: number;
          rss_data?: Json | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          podcast_id?: number;
          rss_data?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "PodcastEpisode_podcast_id_fkey";
            columns: ["podcast_id"];
            isOneToOne: false;
            referencedRelation: "Podcast";
            referencedColumns: ["id"];
          },
        ];
      };
      PodcastSyncQueue: {
        Row: {
          created_at: string;
          id: number;
          podcast_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          podcast_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          podcast_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "PodcastSyncQueue_podcast_id_fkey";
            columns: ["podcast_id"];
            isOneToOne: false;
            referencedRelation: "Podcast";
            referencedColumns: ["id"];
          },
        ];
      };
      User: {
        Row: {
          created_at: string | null;
          id: string;
          last_sync: string;
          rss_feed: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          last_sync: string;
          rss_feed?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          last_sync?: string;
          rss_feed?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "User_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      UserPodcast: {
        Row: {
          created_at: string;
          id: number;
          is_active: boolean;
          podcast_id: number | null;
          user_id: string;
          valid_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          is_active: boolean;
          podcast_id?: number | null;
          user_id: string;
          valid_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          is_active?: boolean;
          podcast_id?: number | null;
          user_id?: string;
          valid_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "UserPodcast_podcast_id_fkey";
            columns: ["podcast_id"];
            isOneToOne: false;
            referencedRelation: "Podcast";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserPodcast_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "get_users_to_sync";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserPodcast_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      UserPodcastEpisode: {
        Row: {
          created_at: string;
          id: number;
          podcast_episode_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          podcast_episode_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          podcast_episode_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "UserPodcastEpisode_podcast_episode_id_fkey";
            columns: ["podcast_episode_id"];
            isOneToOne: false;
            referencedRelation: "get_podcast_episode_to_sync";
            referencedColumns: ["podcast_episode_id"];
          },
          {
            foreignKeyName: "UserPodcastEpisode_podcast_episode_id_fkey";
            columns: ["podcast_episode_id"];
            isOneToOne: false;
            referencedRelation: "PodcastEpisode";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserPodcastEpisode_podcast_episode_id_fkey";
            columns: ["podcast_episode_id"];
            isOneToOne: false;
            referencedRelation: "sync_podcast_for_user";
            referencedColumns: ["podcast_episode_id"];
          },
          {
            foreignKeyName: "UserPodcastEpisode_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "get_users_to_sync";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserPodcastEpisode_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      UserPodcastSyncQueue: {
        Row: {
          created_at: string;
          id: number;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "UserPodcastSyncQueue_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "get_users_to_sync";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserPodcastSyncQueue_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      get_podcast_episode_to_sync: {
        Row: {
          podcast_episode_id: number | null;
          user_id: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "UserPodcast_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserPodcast_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "get_users_to_sync";
            referencedColumns: ["id"];
          },
        ];
      };
      get_users_to_sync: {
        Row: {
          id: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "User_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      sync_podcast_for_user: {
        Row: {
          podcast_episode_id: number | null;
          user_id: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "UserPodcast_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserPodcast_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "get_users_to_sync";
            referencedColumns: ["id"];
          },
        ];
      };
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
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
