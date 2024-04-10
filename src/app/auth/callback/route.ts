
import { createUser } from "@/app/actions";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  
  const requestUrl = new URL(request.url);
    
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const data = await supabase.auth.exchangeCodeForSession(code);
    
    const userData = {
      id: data.data.user?.id,
      firstName: data.data.user?.user_metadata?.name,
      lastName: data.data.user?.user_metadata?.lastName ?? "",
      email: data.data.user?.email,
      picture: data.data.user?.user_metadata?.picture,
    }
    
    createUser(userData, data.data.user?.id)   
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(
    `${requestUrl.origin}`
  );
}

