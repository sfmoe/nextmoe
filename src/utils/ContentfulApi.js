const defaultOptions = {
    preview: false,
  };


/**
 * 
 * Using code from https://github.com/whitep4nth3r/nextjs-contentful-blog-starter/
 * 
 */


export default class contentfulApi {

    static async getPortfolio(port, options = defaultOptions) {
        const query = `
        {
            portfoliosCollection(where: {portfolioTitle: "${port}"} ){
              items{
                portfolioTitle
                portfolioImagesCollection{
                  items{
                    sys{
                        id
                    }
                    title
                    url
                    width
                    height
                  }
                }
              }
            }
              
          }`;


        const response = await this.callContentful(query, options);

        const portfolioContent = response.data.portfoliosCollection.items
        ? response.data.portfoliosCollection.items.pop().portfolioImagesCollection.items
        : [];
        return portfolioContent;
    }



    static async getPageContet(page, options = defaultOptions) {
        const query = `
        {
            pagesCollection(where: {pageTitle: "${page}"}limit: 1) {
              items {
                pageTitle
                pageSlug
                pageContent {
                  json
                  links {
                    assets {
                      block {
                        sys {
                          id
                        }
                        url
                        title
                        width
                        height
                        description
                      }
                    }
                  }
                }
              }
            }
          }`;

          const response = await this.callContentful(query, options);
          const pageContent = response.data.pagesCollection.items
          ? response.data.pagesCollection.items
          : [];
          return pageContent.pop();
    }

    /**
     * Call the Contentful GraphQL API using fetch.
     *
     * 
     * param: query (string)
     */
    static async callContentful(query, options = defaultOptions) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

    const accessToken = options.preview
        ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
        : process.env.CONTENTFUL_ACCESS_TOKEN;

    const fetchOptions = {
        method: "POST",
        headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    };

    try {
        const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
        );
        return data;
    } catch (error) {
        throw new Error("Could not fetch data from Contentful!");
    }
    }
}
