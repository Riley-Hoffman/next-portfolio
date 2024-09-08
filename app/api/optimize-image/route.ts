import { NextRequest, NextResponse } from 'next/server';
import sharp, { AvailableFormatInfo, FormatEnum } from 'sharp';
import { join } from 'path';
import fs from 'fs/promises';

type ImageFormat = keyof FormatEnum | AvailableFormatInfo;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get('path');
  const width = searchParams.get('width');
  const height = searchParams.get('height');
  const format = searchParams.get('format');

  if (!path) {
    return NextResponse.json({ error: 'Missing image path' }, { status: 400 });
  }

  const acceptedFormats: ImageFormat[] = ['jpeg', 'png', 'webp', 'gif', 'avif', 'tiff', 'heif'];
  const imageFormat: ImageFormat = acceptedFormats.includes(format as ImageFormat)
    ? (format as ImageFormat)
    : 'jpeg';

  try {
    const imagePath = join(process.cwd(), 'images', path);

    const buffer = await fs.readFile(imagePath);

    let image = sharp(buffer);

    if (width) {
      image = image.resize(parseInt(width, 10));
    }

    if (height) {
      image = image.resize(null, parseInt(height, 10));
    }

    image = image.toFormat(imageFormat);

    const optimizedBuffer = await image.toBuffer();

    return new NextResponse(optimizedBuffer, {
      status: 200,
      headers: {
        'Content-Type': `image/${imageFormat}`,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error optimizing image' }, { status: 500 });
  }
}
