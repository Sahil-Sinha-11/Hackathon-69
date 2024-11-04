import { PrismaClient } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";

const client = new PrismaClient();



export function GET(req: NextRequest){
        return NextResponse.json({
            message: "Hey"
        })
}



export async function POST (req: NextRequest){

    const body = await req.json();

    const { username, age, email, universityName, collegeAddress, role, designation, phoneNumber } = body;
                try{
                            await client.user.create({
                                data:{
                                        name: username,
                                        age: age ,
                                        email: email,
                                        universityName: universityName,
                                        collegeAddress: collegeAddress,
                                        role: role ,
                                        designation: designation ,
                                        phoneNumber: phoneNumber ,
                                    }
                                }
                            );
                            return NextResponse.json({
                                message:"User created successfully",
                                body
                            })
                   }
                   catch(e){
                    return NextResponse.json({
                        message: "error while signing up",
                        error: e
                    },
                    {
                        status: 411
                    })
                   }
}