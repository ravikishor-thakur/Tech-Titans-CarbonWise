
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Understanding Your Carbon Footprint",
    description: "Learn what a carbon footprint is and how your daily choices impact the environment.",
    thumbnail: "https://i.ytimg.com/vi/8q7_aV8eLUE/hqdefault.jpg",
    embedId: "8q7_aV8eLUE",
    duration: "5:32",
    category: "Basics",
    views: 12453
  },
  {
    id: 2,
    title: "Climate Change Explained",
    description: "A comprehensive overview of climate change, its causes, and effects on our planet.",
    thumbnail: "https://i.ytimg.com/vi/ifrHogDujXw/hqdefault.jpg",
    embedId: "ifrHogDujXw",
    duration: "8:14",
    category: "Science",
    views: 31092
  },
  {
    id: 3,
    title: "Home Energy Conservation Tips",
    description: "Simple ways to reduce your home's energy consumption and lower your carbon footprint.",
    thumbnail: "https://i.ytimg.com/vi/6reYCjrVbis/hqdefault.jpg",
    embedId: "6reYCjrVbis",
    duration: "7:45",
    category: "Tips",
    views: 8721
  },
  {
    id: 4,
    title: "Sustainable Transportation Options",
    description: "Explore eco-friendly transportation alternatives for reducing your emissions.",
    thumbnail: "https://i.ytimg.com/vi/Z9qBWcIDA-g/hqdefault.jpg",
    embedId: "Z9qBWcIDA-g",
    duration: "6:28",
    category: "Lifestyle",
    views: 5932
  },
  {
    id: 5,
    title: "The Impact of Food Choices on Climate",
    description: "How your diet affects your carbon footprint and the environment.",
    thumbnail: "https://i.ytimg.com/vi/nUnJQWO4YJY/hqdefault.jpg",
    embedId: "nUnJQWO4YJY",
    duration: "9:12",
    category: "Food",
    views: 14872
  },
  {
    id: 6,
    title: "Renewable Energy Explained",
    description: "An overview of renewable energy sources and their role in combating climate change.",
    thumbnail: "https://i.ytimg.com/vi/RnvCbquYeIM/hqdefault.jpg",
    embedId: "RnvCbquYeIM",
    duration: "11:05",
    category: "Energy",
    views: 22341
  }
];

const VideoCard = ({ video, setActiveVideo }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="cursor-pointer"
    >
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow" onClick={() => setActiveVideo(video)}>
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
            {video.duration}
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-2">{video.title}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="bg-gray-100">
              {video.category}
            </Badge>
            <div className="text-xs text-gray-500">{video.views.toLocaleString()} views</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ResourceVideos = ({ searchTerm }) => {
  const [activeVideo, setActiveVideo] = React.useState(null);
  
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm?.toLowerCase() || '') || 
    video.description.toLowerCase().includes(searchTerm?.toLowerCase() || '') ||
    video.category.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Educational Videos</h2>
      
      {activeVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg mb-4">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideo.embedId}`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">{activeVideo.title}</h3>
                <div className="text-sm text-gray-500 mt-1">{activeVideo.views.toLocaleString()} views</div>
              </div>
              <Button variant="ghost" onClick={() => setActiveVideo(null)}>
                Back to videos
              </Button>
            </div>
            <p className="text-gray-700 mb-4">{activeVideo.description}</p>
            <Badge variant="outline" className="bg-gray-100">
              {activeVideo.category}
            </Badge>
          </div>
        </motion.div>
      )}
      
      {!activeVideo && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} setActiveVideo={setActiveVideo} />
          ))}
          
          {filteredVideos.length === 0 && (
            <div className="col-span-full text-center py-10">
              <h3 className="text-xl font-medium text-gray-500">No videos match your search</h3>
              <p className="mt-2 text-gray-500">Try searching with different terms</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResourceVideos;
