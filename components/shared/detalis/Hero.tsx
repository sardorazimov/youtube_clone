'use client'
import { useState } from 'react'
import { Play, Pause, MoreVertical } from 'lucide-react'
import { useRouter } from 'next/navigation'

const videos = [
  {
    id: 1,
    title: 'UZMIR FOYDALANDIM',
    channel: 'Mening miksim',
    views: '1.2M',
    time: '2 hafta oldin',
    duration: 'Miks',
    thumbnail: '/lena.jpeg',
  },
  {
    id: 2,
    title: 'ELEŞTİREL KESTANE | BÖLÜM 4 | FETİH 1453',
    channel: 'Filmler ve Filimler',
    views: '921 ming marta',
    time: '3 yil oldin',
    duration: '11:58',
    thumbnail: '/lena.jpeg',
  },
  {
    id: 3,
    title: 'PROPHUNTER → QANI ULAR ?? BERKINMACHOQ | KHIVA GAME #1',
    channel: 'KHIVA GAME',
    views: '4,6 ming marta',
    time: '10 soat oldin',
    duration: '55:24',
    thumbnail: '/lena.jpeg',
  },
  {
    id: 4,
    title: '"KICHKINA SHAHARDAN KATTA ODAMLAR" OZOD SHUKRULLOYEV',
    channel: 'Artel',
    views: '500K',
    time: '1 oy oldin',
    duration: '1:30:16',
    thumbnail: '/lena.jpeg',
  },
  {
    id: 5,
    title: 'GOD OF WAR İLK BÖLÜM',
    channel: 'Vızzık Channel',
    views: '1.5M',
    time: '2 yil oldin',
    duration: '20:14',
    thumbnail: '/lena.jpeg',
  },
  {
    id: 6,
    title: 'Yangi Miks',
    channel: 'Mening Kanalim',
    views: '100K',
    time: '3 kun oldin',
    duration: 'Miks',
    thumbnail: '/lena.jpeg',
  },
]

export default function Hero() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const router = useRouter()

  const togglePlay = (id: number) => {
    setPlayingVideo(playingVideo === id ? null : id)
  }

  return (
    <div className=" py-24  p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className=" rounded-lg overflow-hidden">
            <div className=''>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => router.push('/videos')} 
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 rounded text-xs">
                {video.duration}
              </div>
              {/* <button
               
                onClick={() => togglePlay(video.id)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
              >
                {playingVideo === video.id ? (
                  <Pause className="w-12 h-12" onClick={() => router.push('/videos')}  />
                ) : (
                  <Play className="w-12 h-12" />
                )}
              </button> */}
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm line-clamp-2">{video.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{video.channel}</p>
              <p className="text-gray-400 text-xs">
                {video.views} • {video.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}