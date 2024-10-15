function extractExcerpt(content) {
  // Original https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
  // Mis à jour et commenté en 11ty version 3.0

  // Vérification si le contenu est bien fourni
  if (!content) {
    console.warn('Failed to extract excerpt: No content provided.');
    return null;
  }

  let excerpt = null;

  // Les séparateurs à utiliser pour identifier l'extrait dans le contenu
  const separatorsList = [
    { start: '<!-- début résumé -->', end: '<!-- fin résumé -->' },
    { start: '<p>', end: '</p>' }
  ];

  // Parcours des séparateurs et extraction de l'extrait
  separatorsList.some(separators => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.indexOf(separators.end);

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
      return true; // On arrête la boucle sur la première correspondance trouvée
    }
  });

  // Retourne l'extrait ou null si aucun extrait n'a été trouvé
  return excerpt || null;
}

export default function(eleventyConfig) {
  eleventyConfig.addAsyncShortcode('résumé', (arg) => extractExcerpt(arg))
};
