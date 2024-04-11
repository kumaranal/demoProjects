// pages/api/auth/update-password.js

import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest,res: NextResponse) {
    const { databody } =  await req.json();
    
  console.log("data",databody,process.env.ENVIRONMENT)

  return NextResponse.json({data:databody,env:process.env.ENVIRONMENT}  , { status: 200 })

};

