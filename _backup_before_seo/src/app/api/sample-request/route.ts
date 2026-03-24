import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Basic validation
    const required = [
      'lastName',
      'firstName',
      'lastNameKana',
      'firstNameKana',
      'postalCode',
      'prefecture',
      'city',
      'phone',
      'email',
      'birthDate',
    ]

    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field}は必須項目です` },
          { status: 400 }
        )
      }
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'メールアドレスの形式が正しくありません' },
        { status: 400 }
      )
    }

    // Phase 1: Log the request (DB connection in Phase 2)
    console.log('Sample request received:', {
      name: `${body.lastName} ${body.firstName}`,
      email: body.email,
      phone: body.phone,
      prefecture: body.prefecture,
      skinConcerns: body.skinConcerns,
      birthDate: body.birthDate,
      lineDisplayName: body.lineDisplayName,
      timestamp: new Date().toISOString(),
    })

    // In Phase 2, this would:
    // 1. Save to Supabase (sample_requests table)
    // 2. Create customer record
    // 3. Send confirmation email via Resend
    // 4. Trigger LINE step delivery

    return NextResponse.json({
      success: true,
      message: 'サンプル請求を受け付けました',
    })
  } catch {
    console.error('Sample request error')
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}
