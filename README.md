# News agency
#### Link to deploy: https://sk-news-service.netlify.app/

Test description:

Use any open API to get article names and descriptions. 

Here are a few examples:
- https://newsapi.org/
- https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1


Please create the homepage based on the "Homepage" in the prototype.
The homepage should contain:
1. Cards with article titles and descriptions for 100 characters. The user can click on the card and should go to a page with the title and full description of the selected article.
2. A field to filter by keyword. The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.
The priority of fields is name->description. The article with 1 match in the name is higher than the article with 1 match in the description.
The matched keywords are highlighted with yellow color.

Here are a few requirements for the test task:
- Please use TypeScript as the main language for the test project
- CSS preprocessor needs to be used
- Material UI need to be used
- Showing an example of a custom hook will be a plus
- Showing an example of state management will be a big plus
