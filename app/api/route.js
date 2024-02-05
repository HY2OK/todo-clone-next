import { ConnectDB } from '@/lib/config/db'
import TodoModel from '@/lib/models/TodoModel'
import { NextResponse } from 'next/server'

const LoadDB = async () => {
  await ConnectDB()
}

LoadDB()

export async function GET(request) {
  const todos = await TodoModel.find({})

  return NextResponse.json({ todos, msg: 'get method hit' })
}

export async function POST(request) {
  const { title, description } = await request.json()
  await TodoModel.create({
    title,
    description,
  })

  return NextResponse.json({ msg: 'Todo Created' })
}

export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get('mongoId')
  await TodoModel.findByIdAndDelete(mongoId)

  return NextResponse.json({ msg: 'Todo Delete' })
}

export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get('mongoId')
  await TodoModel.findByIdAndUpdate(mongoId, {
    // $set: 업데이트 연산자로, 문서의 특정 필드를 설정하려고 할 때 사용합니다.
    $set: {
      isCompleted: true,
    },
  })

  return NextResponse.json({ msg: 'Todo Completed' })
}
