"use client"
import { Download, Share, ThumbsDown, ThumbsUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Video {
  id: string
  title: string
  channel: string
  views: string
  timestamp: string
  thumbnail: string
  videoUrl?: string
}

const dummyVideos: Video[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React and TypeScript',
    channel: 'Uzmir',
    views: '100M views',
    timestamp: '1 yaers ago',
    thumbnail: 'https://i.ytimg.com/vi/_SEPHLvqDjs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWChIMA8=&rs=AOn4CLCAcJSibyNz2Vy_vKvrHuOwc3XTzA',
    videoUrl: 'https://youtu.be/NLmByXTPlcE?si=KNRB_quKrbZRocKa',
  },
  {
    id: '2',
    title: 'TypeScript Tips and Tricks for Beginners',
    channel: 'Uzmir',
    views: '50K views',
    timestamp: '1 week ago',
    thumbnail: "https://i.ytimg.com/vi/_SEPHLvqDjs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWChIMA8=&rs=AOn4CLCAcJSibyNz2Vy_vKvrHuOwc3XTzA" ,
    videoUrl: 'https://youtu.be/NLmByXTPlcE?list=RDeDHzY9jjjGg',
    
  },
  {
    id: '3',
    title: 'React Hooks Explained',
    channel: 'React Ninjas',
    views: '200K views',
    timestamp: '3 days ago',
    thumbnail: 'https://i.ytimg.com/vi/_SEPHLvqDjs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWChIMA8=&rs=AOn4CLCAcJSibyNz2Vy_vKvrHuOwc3XTzA',
    videoUrl: 'https://youtu.be/NLmByXTPlcE?list=RDeDHzY9jjjGg',
  },
]

const Hero = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const router = useRouter()
  return (
    <div className='flex w-full flex-col h-screen lg:py-14 -mt-4 lg:mt-1'>
      <div className="flex-1 p-4">
          {selectedVideo ? (
            <div className="mb-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                {selectedVideo.videoUrl ? (
                  <video src={'/poralab.mp4'} muted autoPlay controls className="w-full h-full" />
                ) : (
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className=" w-full h-full"
                  />
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{selectedVideo.title}</h2>
              <div className="flex items-center justify-between mb-4">
                <div >
                  <p className="text-gray-600">{selectedVideo.channel}</p>
                  <p className="text-sm text-gray-500">
                    {selectedVideo.views} • {selectedVideo.timestamp}
                  </p>
                </div>
                {/* <div className="flex space-x-4">
                  <button className="flex items-center space-x-1">
                    <ThumbsUp className="w-5 h-5" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <ThumbsDown className="w-5 h-5" />
                    <span>Dislike</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <Share className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                </div> */}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dummyVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white/5 rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => router.push('/videos')}
                >
                  <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.channel}</p>
                    <p className="text-xs text-gray-500">
                      {video.views} • {video.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default Hero