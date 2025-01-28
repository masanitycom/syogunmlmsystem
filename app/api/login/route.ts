import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()
    const { email, password } = body

    // ここで実際の認証処理を行います
    // この例では、単純にemailとpasswordが空でないことをチェックしています
    if (email && password) {
        // 認証成功
        return NextResponse.json({ success: true }, { status: 200 })
    } else {
        // 認証失敗
        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }
}