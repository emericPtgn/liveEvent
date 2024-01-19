import { useAppContext } from "../../src/context.js";

async function CallWpApi () {

  const url = 'https://testdwm.fr/wp-json/wp/v2/posts?_fields=author,id, title, link, acf'
  return fetch(url)

  .then(reponse => {
    if(!reponse.ok){
      throw new Error ('Erreur mon pote')
    }
    return reponse.json();
  })
  .then(data => {
    console.log(data);
    return data
  })
  .catch (error => {
    console.log('une erreur mon pote', error.message)
    throw error 
  })
}

CallWpApi()
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log('error mon pote', error.message)
})










// Fonction pour récupérer les articles
/* async function GetArticles() {
  try {
    const response = await axios.get('https://testdwm.fr/wp-json/wp/v2/posts');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error.message);
    throw error;
  }
}

// Fonction pour récupérer les étiquettes d'un article
async function GetTagsForArticle(articleId) {
  try {
    const response = await axios.get(`https://testdwm.fr/wp-json/wp/v2/tags?post=${articleId}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération des étiquettes pour l'article ${articleId}:`, error.message);
    throw error;
  }
}

// Fonction principale pour récupérer les étiquettes pour tous les articles
async function GetAllTags() {
  const [articles, setArticles] = useState([]); // Utilisez useState pour gérer l'état des articles

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesData = await GetArticles();
      setArticles(articlesData);
    };

    fetchArticles();
  }, []); // Utilisez useEffect pour effectuer l'appel asynchrone lors du montage du composant

  const tagsPromises = articles.map(async (article) => {
    const tags = await GetTagsForArticle(article.id);
    return { postId: article.id, tags };
  });

  return Promise.all(tagsPromises);
}


export { GetArticles, GetTagsForArticle, GetAllTags };
 */