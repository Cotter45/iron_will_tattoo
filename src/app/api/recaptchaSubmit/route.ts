export async function POST(request: Request) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    return Response.json(
      { error: 'Recaptcha secret key not found' },
      { status: 500 },
    )
  }

  const { token } = await request.json()
  let score = 0

  try {
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    )

    const data = await res.json()
    score = data.score
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ success: true, score })
}
