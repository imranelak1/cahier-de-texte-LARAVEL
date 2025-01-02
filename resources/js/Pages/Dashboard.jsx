import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard({ auth, stats }) {
    const statCards = [
        {
            title: 'Total Modules',
            value: stats.totalModules,
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
        },
        {
            title: 'Total Professors',
            value: stats.totalProfessors,
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-600',
        },
        {
            title: 'Total Fields',
            value: stats.totalFields,
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
        },
        {
            title: 'Total Levels',
            value: stats.totalLevels,
            icon: (
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-600',
        },
    ];

    const quickLinks = [
        {
            href: '/modules',
            title: 'Manage Modules',
            description: 'View and manage all modules',
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            bgColor: 'bg-blue-50',
            hoverBgColor: 'hover:bg-blue-100',
            textColor: 'text-blue-600',
        },
        {
            href: '/professors',
            title: 'Manage Professors',
            description: 'View and manage professors',
            icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            bgColor: 'bg-purple-50',
            hoverBgColor: 'hover:bg-purple-100',
            textColor: 'text-purple-600',
        },
        {
            href: '/fields',
            title: 'Manage Fields',
            description: 'View and manage fields',
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            bgColor: 'bg-green-50',
            hoverBgColor: 'hover:bg-green-100',
            textColor: 'text-green-600',
        },
        {
            href: '/levels',
            title: 'Manage Levels',
            description: 'View and manage levels',
            icon: (
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            bgColor: 'bg-orange-50',
            hoverBgColor: 'hover:bg-orange-100',
            textColor: 'text-orange-600',
        },
        {
            href: '/groups',
            title: 'Manage Groups',
            description: 'View and manage student groups',
            icon: (
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            bgColor: 'bg-pink-50',
            hoverBgColor: 'hover:bg-pink-100',
            textColor: 'text-pink-600',
        },
        {
            href: '/diary-entries',
            title: 'Diary Entries',
            description: 'View and manage diary entries',
            icon: (
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            bgColor: 'bg-indigo-50',
            hoverBgColor: 'hover:bg-indigo-100',
            textColor: 'text-indigo-600',
        },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                    Welcome back, {auth.user.name}!
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {statCards.map((card, index) => (
                            <div
                                key={index}
                                className={`${card.bgColor} overflow-hidden rounded-lg shadow-sm p-6 transition-transform duration-200 hover:scale-105`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className={`text-4xl font-bold ${card.textColor}`}>
                                            {card.value}
                                        </div>
                                        <div className="text-sm font-medium text-gray-600 mt-2">
                                            {card.title}
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-full bg-white shadow-sm">
                                        {card.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                Quick Actions
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {quickLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className={`flex items-center p-4 ${link.bgColor} ${link.hoverBgColor} rounded-lg transition-all duration-200 hover:shadow-md group`}
                                    >
                                        <div className="mr-4">
                                            <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                                {link.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {link.title}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {link.description}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {auth.user.role === 'admin' && (
                        <div className="mt-8 space-y-6">
                            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                        Administrative Actions
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Professor Management</h4>
                                            <p className="text-gray-600 mb-4">Create and manage professor accounts, assign modules</p>
                                            <Link
                                                href="/professors/create"
                                                className="inline-flex items-center text-blue-600 hover:text-blue-700"
                                            >
                                                Add New Professor
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                        
                                        <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Group Management</h4>
                                            <p className="text-gray-600 mb-4">Organize and manage student groups and assignments</p>
                                            <Link
                                                href="/groups/create"
                                                className="inline-flex items-center text-green-600 hover:text-green-700"
                                            >
                                                Create New Group
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                        
                                        <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Diary Entry Overview</h4>
                                            <p className="text-gray-600 mb-4">Monitor and manage all professors' diary entries</p>
                                            <Link
                                                href="/diary-entries"
                                                className="inline-flex items-center text-orange-600 hover:text-orange-700"
                                            >
                                                View All Entries
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
