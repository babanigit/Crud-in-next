import connectMongoDb from "@/libs/moongodb";
import Topic from "@/models/TopicModel";
import { NextRequest, NextResponse } from "next/server";


interface IProps {
    params: { id: string };
  }

// update
export async function PUT(request:NextRequest, { params }:IProps) {
    const { id } = params;
    // const {title, description } = await request.json();
    const { newTitle: title, newDescription: description } = await request.json();

    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, { title, description });
    
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }


// get by id
export async function GET(request: NextRequest, { params }:IProps) {
  const { id } = params;
  await connectMongoDb();
  const topic = await Topic.findOne({ _id: id });
  if (!topic) {
    return NextResponse.json({ message: "Topic not found" }, { status: 404 });
  }
  return NextResponse.json({ topic }, { status: 200 });
}
