import { useTranslations } from 'next-intl';
import { generateHtml } from "../../../utils/htmlSerializer";
import "./htmlstyle.css";

const Html = (props:any) => {
  const { pageTraslation } = props;
  const t = useTranslations(`${pageTraslation}.htmlContent`);
  
  // Obtener el contenido HTML directamente como string
  const content = t.raw('str');
  
  if (!content) {
    return null;
  }
  
  return (
    <section className='relative z-1 overflow-hidden bg-white pb-17.5 pt-30 lg:pb-20 lg:pt-30 xl:pb-25 xl:pt-[170px]'>
      <div className='mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div 
          id="htmlContainer" 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-ul:text-gray-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default Html;
