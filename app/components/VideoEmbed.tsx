'use client'

interface VideoEmbedProps {
  videoId?: string
  placeholder?: boolean
}

export default function VideoEmbed({ videoId, placeholder = true }: VideoEmbedProps) {
  if (!videoId && placeholder) {
    return (
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          <p className="text-gray-600">유튜브 영상이 여기에 임베딩됩니다</p>
          <p className="text-sm text-gray-500 mt-2">(링크 제공 시 교체 예정)</p>
        </div>
      </div>
    )
  }

  if (!videoId) {
    return null
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
