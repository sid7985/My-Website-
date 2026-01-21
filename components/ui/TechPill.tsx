interface TechPillProps {
    tech: string;
    size?: 'sm' | 'md';
}

const sizeConfig = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
};

export default function TechPill({ tech, size = 'md' }: TechPillProps) {
    return (
        <span
            className={`inline-flex items-center ${sizeConfig[size]} rounded-full bg-primary/10 text-primary border border-primary/20 font-medium`}
        >
            {tech}
        </span>
    );
}

interface TechStackProps {
    techStack: string[];
    size?: 'sm' | 'md';
    limit?: number;
}

export function TechStack({ techStack, size = 'md', limit }: TechStackProps) {
    const displayTech = limit ? techStack.slice(0, limit) : techStack;
    const remaining = limit ? techStack.length - limit : 0;

    return (
        <div className="flex flex-wrap gap-2">
            {displayTech.map((tech) => (
                <TechPill key={tech} tech={tech} size={size} />
            ))}
            {remaining > 0 && (
                <span className={`inline-flex items-center ${sizeConfig[size]} text-gray-400`}>
                    +{remaining} more
                </span>
            )}
        </div>
    );
}
