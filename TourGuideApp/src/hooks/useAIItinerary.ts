import { useState } from 'react';
import { getAIItinerary } from '../services/aiService';

export default function useAIItinerary() {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);

  const getItinerary = async (destination: string, dates: string) => {
    setLoading(true);
    const result = await getAIItinerary(destination, dates);
    setItinerary(result);
    setLoading(false);
  };

  return { loading, itinerary, getItinerary };
}
