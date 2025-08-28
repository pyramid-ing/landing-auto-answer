'use client'

import Image from 'next/image'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    title: string
    description: string
  }[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="space-y-8">
      {images.map((image, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 md:h-[500px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {image.title}
            </h4>
            <p className="text-gray-600">
              {image.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
