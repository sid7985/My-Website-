'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppCard from '@/components/apps/AppCard';
import { apps, Platform, Category, Status, searchApps } from '@/lib/apps';

const platforms: { value: Platform; label: string }[] = [
    { value: 'android', label: 'Android' },
    { value: 'ios', label: 'iOS' },
    { value: 'windows', label: 'Windows' },
    { value: 'macos', label: 'macOS' },
    { value: 'web', label: 'Web' },
];

const categories: { value: Category; label: string }[] = [
    { value: 'ai', label: 'AI Tools' },
    { value: 'productivity', label: 'Productivity' },
    { value: 'utility', label: 'Utilities' },
    { value: 'experimental', label: 'Experimental' },
];

const statuses: { value: Status; label: string }[] = [
    { value: 'active', label: 'Active' },
    { value: 'beta', label: 'Beta' },
    { value: 'archived', label: 'Archived' },
];

type SortOption = 'recent' | 'alpha' | 'popular';

export default function AppsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>('recent');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredApps = useMemo(() => {
        let result = searchQuery ? searchApps(searchQuery) : [...apps];

        if (selectedPlatforms.length > 0) {
            result = result.filter((app) =>
                selectedPlatforms.some((p) => app.platforms.includes(p))
            );
        }

        if (selectedCategories.length > 0) {
            result = result.filter((app) => selectedCategories.includes(app.category));
        }

        if (selectedStatuses.length > 0) {
            result = result.filter((app) => selectedStatuses.includes(app.status));
        }

        // Sort
        switch (sortBy) {
            case 'alpha':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'popular':
                result.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
                break;
            case 'recent':
            default:
                result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        }

        return result;
    }, [searchQuery, selectedPlatforms, selectedCategories, selectedStatuses, sortBy]);

    const toggleFilter = <T extends string>(
        value: T,
        selected: T[],
        setSelected: (values: T[]) => void
    ) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((v) => v !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    const clearFilters = () => {
        setSelectedPlatforms([]);
        setSelectedCategories([]);
        setSelectedStatuses([]);
        setSearchQuery('');
    };

    const hasActiveFilters =
        selectedPlatforms.length > 0 ||
        selectedCategories.length > 0 ||
        selectedStatuses.length > 0 ||
        searchQuery;

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">All Apps</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Browse my collection of applications across multiple platforms.
                            Use filters to find exactly what you&apos;re looking for.
                        </p>
                    </motion.div>

                    {/* Search and Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-8"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Search */}
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search apps..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            {/* Filter Toggle (Mobile) */}
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 bg-surface border border-white/10 rounded-xl text-white"
                            >
                                <Filter className="w-5 h-5" />
                                Filters
                                {hasActiveFilters && (
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                )}
                            </button>

                            {/* Sort */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                            >
                                <option value="recent">Most Recent</option>
                                <option value="alpha">Alphabetical</option>
                                <option value="popular">Most Popular</option>
                            </select>
                        </div>
                    </motion.div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isFilterOpen ? 1 : 0,
                            height: isFilterOpen ? 'auto' : 0,
                            marginBottom: isFilterOpen ? 32 : 0
                        }}
                        className="sm:!opacity-100 sm:!h-auto sm:!mb-8 overflow-hidden"
                    >
                        <div className="p-6 bg-surface rounded-2xl border border-white/5">
                            <div className="flex flex-wrap gap-8">
                                {/* Platforms */}
                                <div className="flex-1 min-w-[200px]">
                                    <h3 className="text-sm font-medium text-gray-400 mb-3">Platform</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {platforms.map((platform) => (
                                            <button
                                                key={platform.value}
                                                onClick={() => toggleFilter(platform.value, selectedPlatforms, setSelectedPlatforms)}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedPlatforms.includes(platform.value)
                                                        ? 'bg-primary text-white'
                                                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                                    }`}
                                            >
                                                {platform.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Categories */}
                                <div className="flex-1 min-w-[200px]">
                                    <h3 className="text-sm font-medium text-gray-400 mb-3">Category</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category.value}
                                                onClick={() => toggleFilter(category.value, selectedCategories, setSelectedCategories)}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedCategories.includes(category.value)
                                                        ? 'bg-primary text-white'
                                                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                                    }`}
                                            >
                                                {category.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="flex-1 min-w-[200px]">
                                    <h3 className="text-sm font-medium text-gray-400 mb-3">Status</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {statuses.map((status) => (
                                            <button
                                                key={status.value}
                                                onClick={() => toggleFilter(status.value, selectedStatuses, setSelectedStatuses)}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedStatuses.includes(status.value)
                                                        ? 'bg-primary text-white'
                                                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                                    }`}
                                            >
                                                {status.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Clear Filters */}
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Results Count */}
                    <div className="mb-6">
                        <p className="text-gray-400">
                            Showing <span className="text-white font-medium">{filteredApps.length}</span> of{' '}
                            <span className="text-white font-medium">{apps.length}</span> apps
                        </p>
                    </div>

                    {/* Apps Grid */}
                    {filteredApps.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredApps.map((app, index) => (
                                <AppCard key={app.id} app={app} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-gray-400 text-lg mb-4">No apps found matching your criteria.</p>
                            <button
                                onClick={clearFilters}
                                className="text-primary hover:text-primary-dark transition-colors"
                            >
                                Clear filters and try again
                            </button>
                        </motion.div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
