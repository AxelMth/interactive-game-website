import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, phone, eventType, date, guests, message } = await request.json();
  console.log(name, email, phone, eventType, date, guests, message);

  return NextResponse.json({ message: "Demande de contact envoyée avec succès" });
}
