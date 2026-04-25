import { createClient } from "@/lib/supabase/server";

export async function GET(req) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("todos")
    .select("*");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}