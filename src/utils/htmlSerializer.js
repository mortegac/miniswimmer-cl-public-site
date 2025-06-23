export const generateHtml = text => {
  if (!text) return null;
  
  try {
    // Asegurarse de que el texto sea una cadena
    const htmlContent = String(text);
    
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-ul:text-gray-600"
      />
    );
  } catch (error) {
    console.error("Error generating HTML:", error);
    return null;
  }
};
