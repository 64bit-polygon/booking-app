import { NextRequest, NextResponse } from 'next/server';
import { getTimeslots } from '@/lib/api/timeslots';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const serviceId = searchParams.get('serviceId');

  if (!serviceId) {
    return NextResponse.json(
      { error: 'serviceId is required' },
      { status: 400 }
    );
  }

  try {
    const timeslots = await getTimeslots(serviceId);
    return NextResponse.json({ timeslots });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch timeslots' },
      { status: 500 }
    );
  }
}