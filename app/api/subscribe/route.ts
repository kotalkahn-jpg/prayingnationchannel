import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";
import { sendConfirmationEmail } from "../../../lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔎 Check if email already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from("subscribers")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (fetchError) {
      return NextResponse.json(
        { error: fetchError.message },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { error: "You are already subscribed." },
        { status: 400 }
      );
    }

    // ✅ Insert new subscriber
    const { data, error } = await supabase
      .from("subscribers")
      .insert([{ name, email, phone }])
      .select();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // 📧 Send confirmation email
    try {
      await sendConfirmationEmail(email, name);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // We don’t fail subscription if email fails
    }

    return NextResponse.json({
      message: "Subscription successful",
      data,
    });

  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
