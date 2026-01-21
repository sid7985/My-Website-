import { Status } from '@/lib/apps';
import { CheckCircle, Clock, Archive } from 'lucide-react';

interface StatusBadgeProps {
    status: Status;
    size?: 'sm' | 'md' | 'lg';
}

const statusConfig: Record<Status, { icon: typeof CheckCircle; label: string; className: string }> = {
    active: {
        icon: CheckCircle,
        label: 'Active',
        className: 'bg-green-500/10 text-green-400 border-green-500/20',
    },
    beta: {
        icon: Clock,
        label: 'Beta',
        className: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    },
    archived: {
        icon: Archive,
        label: 'Archived',
        className: 'bg-red-500/10 text-red-400 border-red-500/20',
    },
};

const sizeConfig = {
    sm: { icon: 'w-3 h-3', text: 'text-xs', padding: 'px-2 py-0.5' },
    md: { icon: 'w-3.5 h-3.5', text: 'text-sm', padding: 'px-2.5 py-1' },
    lg: { icon: 'w-4 h-4', text: 'text-base', padding: 'px-3 py-1.5' },
};

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
    const config = statusConfig[status];
    const sizes = sizeConfig[size];
    const Icon = config.icon;

    return (
        <span
            className={`inline-flex items-center gap-1.5 ${sizes.padding} rounded-full border font-medium ${config.className}`}
        >
            <Icon className={sizes.icon} />
            <span className={sizes.text}>{config.label}</span>
        </span>
    );
}
