
const API_KEY = `ec2d0b9f67c0b14432d9fea33da3cfcb`; 
const API_BASE = `https://api.themoviedb.org/3`;

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;

}
export default {
    getHomeList: async () =>{
        return [

                {
                  slug : 'originais',
                  title: 'Originais do Netflix',
                  items: await basicFetch(`/discover/tv?with_network=213&language=pt-BRapi_key=${API_KEY}`)
                },
                {
                    slug : 'trending',
                    title: 'Recomendados para você',
                    items: await basicFetch(`/trading/all/week?&language=pt-BRapi_key=${API_KEY}`)
                  },

                  {
                    slug : 'toprated',
                    title: 'Em alta',
                    items: await basicFetch(`/movie/top_rated?&language=pt-BRapi_key=${API_KEY}`) 
                  },
                  {
                    slug : 'action',
                    title: 'Ação',
                    items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BRapi_key=${API_KEY}`)
                  },
                  {
                    slug : 'comedy',
                    title: 'comédia',
                    items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BRapi_key=${API_KEY}`) 
                  },
                  {
                    slug : 'horror',
                    title: 'terror',
                    items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BRapi_key=${API_KEY}`)
                  },
                  {
                    slug : 'romance',
                    title: 'Romance',
                    items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BRapi_key=${API_KEY}`)
                  },
                  {
                    slug : 'documentary',
                    title: 'Documentários',
                    items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BRapi_key=${API_KEY}`)
                  },
                  
                ]

        

    }

}
