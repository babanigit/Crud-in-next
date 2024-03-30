import connectMongoDb from "@/libs/moongodb";
import Topic from "@/models/TopicModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest) {

    console.log("clicked")
    const{title,description}= await request.json();
    await connectMongoDb();

    await Topic.create({title,description});
    return NextResponse.json({message:"topic created"},{status:201})
    
}