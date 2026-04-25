import { Search } from "lucide-react";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if(code){
     const supabase = await createClient();
     await supabase.auth.exchangeCodeForSession(code);
     }
     return NextResponse.redirect(new URL("/", req.url));
    }