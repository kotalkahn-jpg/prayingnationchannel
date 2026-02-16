import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

// GET all articles
export async function GET() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

// POST new article
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, image_url, slug } = body;

    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "Title, content, and slug are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("articles")
      .insert([{ title, content, image_url, slug }])
      .select();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Article created successfully",
      data,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  const { id, title, content, image_url, is_published } = await req.json();

  const { error } = await supabase
    .from("articles")
    .update({
      title,
      content,
      image_url,
      is_published,
      updated_at: new Date(),
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
