import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize, X, Share, Heart, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const playlist = [
  { id: 1, title: "UZmir - Foydalandim (MooD video)", artist: "UZMIR", duration: "3:15", thumbnail: "/placeholder.svg?height=60&width=80" },
  { id: 2, title: "UZmir & MajoR & Mira - Begonaman (Music)", artist: "UZMIR", duration: "4:54", thumbnail: "/placeholder.svg?height=60&width=80" },
  { id: 3, title: "UZmir & Mira - Judolik (MooD video)", artist: "UZMIR", duration: "3:18", thumbnail: "/placeholder.svg?height=60&width=80" },
  { id: 4, title: "Semicenk - Masal Gibi", artist: "netd müzik", duration: "2:44", thumbnail: "/placeholder.svg?height=60&width=80" },
  { id: 5, title: "UZmir - To'ying bo'lgan kuni (Music)", artist: "UZMIR", duration: "6:32", thumbnail: "/placeholder.svg?height=60&width=80" },
  { id: 6, title: "UZmir & Mira - So'ngi nola (Mood Video)", artist: "UZMIR", duration: "3:27", thumbnail: "/placeholder.svg?height=60&width=80" },
]

export default function UserChanel() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [showPlaylist, setShowPlaylist] = useState(true)

  const togglePlay = () => setIsPlaying(!isPlaying)
  const togglePlaylist = () => setShowPlaylist(!showPlaylist)

  return (
    <div className=" p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-grow">
          <div className="relative pt-[56.25%]">
            <video
              src="/poralab.mp4"
              controls
              muted
              autoPlay

            //   alt="Video thumbnail"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="mt-2">
            {/* <div className="flex items-center space-x-2 text-sm">
              <Button onClick={togglePlay} className="p-2 hover:bg-gray-700 rounded-full">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </Button>
              <SkipBack className="w-6 h-6" />
              <SkipForward className="w-6 h-6" />
              <Volume2 className="w-6 h-6" />
              <div className="flex-grow">
                <div className="bg-gray-600 h-1 rounded-full">
                  <div className="bg-red-500 h-1 w-1/3 rounded-full"></div>
                </div>
              </div>
              <span>0:00 / 3:14</span>
              <Button className="p-2 hover:bg-gray-700 rounded-full">
                <Maximize className="w-6 h-6" />
              </Button>
            </div> */}
          </div>
          <h2 className="text-xl font-bold mt-4">UZmir - Foydalandim (MooD video)</h2>
          <div className="flex items-center mt-2">
            <img src="/poralab.jpg" alt="Channel avatar" className="w-10 h-10 rounded-full" />
            <div className="ml-2">
              <a href='/channels' className="font-semibold">UZMIR</a>
              <p className="text-sm text-gray-400">1,2 mln obunachi</p>
            </div>
            <button className="ml-auto bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
              Obuna qilgansiz
            </button>
          </div>
          <div className="mt-4 flex space-x-1 items-center">
            <button className="bg-gray-800 px-4 py-2 rounded-full text-sm flex gap-1">20 ming</button>
            <button className="bg-gray-800 px-4 py-2 rounded-full text-sm flex gap-1"> <Share  size={20}/>Ulashish</button>
            <button className="bg-gray-800 px-4 py-2 rounded-full text-sm flex gap-1"> <Download size={20}/> Downland</button>
            <button className="bg-gray-800 px-4 py-2 rounded-full text-sm ">...</button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            4,8 mln marta • 1 yil oldin
            <br />
            Info: Foydalandim (MooD video)
          </p>
        </div>
        {showPlaylist && (
          <div className="lg:w-80">
            <div className=" rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Mening miksim</h3>
                <Button onClick={togglePlaylist} className="text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-400 mb-4">Mixes are playlists Youtube makes for you</p>
              <div className="space-y-4">
                {playlist.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <img src={item.thumbnail} alt={item.title} className="w-20 h-12 object-cover rounded" />
                    <div className="flex-grow">
                      <p className="text-sm font-semibold line-clamp-2">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.artist}</p>
                    </div>
                    <span className="text-xs text-gray-400">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}