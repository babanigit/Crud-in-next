import connectMongoDb from "@/libs/moongodb";
import Topic from "@/models/TopicModel";
import { connect } from "http2";
import { NextRequest, NextResponse } from "next/server";

// post topics
export async function POST(request:NextRequest) {

    console.log("from POST")
    const{title,description}= await request.json();
    await connectMongoDb();

    await Topic.create({title,description});
    return NextResponse.json({message:"topic created"},{status:201})
}

// get topics
export async function GET() {

    console.log("from GET")

    await connectMongoDb();

    const topics= await Topic.find();
    return NextResponse.json({topics}, {status:200})
}

// delete
export async function DELETE(request:NextRequest) {

    console.log("from DELETE")

    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }