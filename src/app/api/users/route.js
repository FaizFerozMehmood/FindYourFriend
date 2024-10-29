import { dbConnect } from "@/lib/db/dbConnect";
import { userModal } from "@/lib/models/User";

export async function GET(request) {
  await dbConnect();
  const users = await userModal.find();
  return Response.json({
    msg:"user fetched successfully",
    users,
  }, {status:200})
}

export async function POST(request) {
  await dbConnect();
  const obj = await request.json();
  let newUser = new userModal(obj);
  await newUser.save();
  return Response.json(newUser, { status: 201 });
}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function OPTIONS(request) {}
