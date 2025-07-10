type ExperienceCardProps = {
  date: string;
  title: string;
  description: string | string[];
};

const ExperienceCard = ({ date, title, description }: ExperienceCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-y-2 md:gap-6 transition-all duration-300 hover:bg-[#1e293b] hover:shadow-lg hover:scale-[1.01] rounded-md px-4 py-4">
      <div className="text-gray-400">{date}</div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        {Array.isArray(description) ? (
          <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
