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

const getData = async (query = `Apple`): Promise<ArtData[] | null | void> => {
  const response = await fetch(`${URL}${query}&page=1`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
      'x-rapidapi-key': '02b7091a74msh1a91ed707f6505ep119d82jsnb198aef253b1',
    },
  });
  if (Math.round(response.status / 100) === 2) {
    const result = await response.json();
    if (result.status === 'No matches for your search.') return null;
    return result.articles;
  }
  console.log(`Server replied: ${response.status} ${response.statusText}`);
  return undefined;
};

export default getData;
