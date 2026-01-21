import { Platform } from '@/lib/apps';
import { Smartphone, Apple, Monitor, Globe } from 'lucide-react';

interface PlatformBadgeProps {
    platform: Platform;
    showLabel?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

const platformConfig: Record<Platform, { icon: typeof Smartphone; label: string; color: string }> = {
    android: { icon: Smartphone, label: 'Android', color: 'text-green-400' },
    ios: { icon: Apple, label: 'iOS', color: 'text-gray-300' },
    windows: { icon: Monitor, label: 'Windows', color: 'text-blue-400' },
    macos: { icon: Apple, label: 'macOS', color: 'text-gray-300' },
    web: { icon: Globe, label: 'Web', color: 'text-primary' },
};

const sizeConfig = {
    sm: { icon: 'w-3.5 h-3.5', text: 'text-xs', padding: 'px-2 py-1' },
    md: { icon: 'w-4 h-4', text: 'text-sm', padding: 'px-2.5 py-1.5' },
    lg: { icon: 'w-5 h-5', text: 'text-base', padding: 'px-3 py-2' },
};

export default function PlatformBadge({ platform, showLabel = false, size = 'md' }: PlatformBadgeProps) {
    const config = platformConfig[platform];
    const sizes = sizeConfig[size];
    const Icon = config.icon;

    return (
        <span
            className={`inline-flex items-center gap-1.5 ${sizes.padding} rounded-lg bg-white/5 border border-white/10 ${config.color}`}
            title={config.label}
        >
            <Icon className={sizes.icon} />
            {showLabel && <span className={`${sizes.text} font-medium`}>{config.label}</span>}
        </span>
    );
}

interface PlatformBadgesProps {
    platforms: Platform[];
    showLabels?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export function PlatformBadges({ platforms, showLabels = false, size = 'md' }: PlatformBadgesProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => (
                <PlatformBadge key={platform} platform={platform} showLabel={showLabels} size={size} />
            ))}
        </div>
    );
}
