import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("events")
    .insert([body])
    .select();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PATCH(req: Request) {
  const { id, ...updates } = await req.json();

  await supabase
    .from("events")
    .update(updates)
    .eq("id", id);

  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await supabase.from("events").delete().eq("id", id);

  return NextResponse.json({ success: true });
}
