type ExperienceCardProps = {
  date: string;
  title: string;
  description: string | string[];
};

const ExperienceCard = ({ date, title, description }: ExperienceCardProps) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-y-2 md:gap-6 transition-all duration-300 hover:bg-[#1e293b] hover:shadow-lg hover:scale-[1.01] rounded-md px-4 py-4" aria-label={`${title} 경력 카드`}>
      <time className="text-gray-400 text-sm">{date}</time>

      <section aria-labelledby={`exp-title-${title}`}>
        <h3 id={`exp-title-${title}`} className="font-semibold text-gray-300 text-base">
          {title}
        </h3>

        {Array.isArray(description) ? (
          <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 mt-2">{description}</p>
        )}
      </section>
    </article>
  );
};

export default ExperienceCard;
