const URL = 'https://free-news.p.rapidapi.com/v1/search?q=';

export interface ArtData {
  _id: string;
  score: number;
  author: string;
  authors: string[];
  clean_url: string;
  country: string;
  is_opinion: boolean;
  language: string;
  link: string;
  media: string;
  published_date: string;
  published_date_precision: string;
  rank: number;
  rights: string;
  summary: string;
  title: string;
  topic: string;
  twitter_account: string | null;
  _scrore: number;
}

const getData = async (query = `Apple`): Promise<ArtData[]> => {
  const response = await fetch(`${URL}${query}&page=1`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
      'x-rapidapi-key': '6f4896c78amshbaa101fa6023d71p1ccdd5jsnbd7be5cf7b2f',
    },
  });
  const result = await response.json();
  console.log(result.articles);
  return result.articles;

  // if (Math.round(response?.status / 100) === 2) {
  //   const result: ApiResponse = await response.json();
  //   console.log(result);
  //   return result;
  // }
  //   console.log(response.status);

  // return undefined
};

export default getData;
