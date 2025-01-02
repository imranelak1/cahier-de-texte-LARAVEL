import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DataTable from '@/Components/DataTable';

export default function Index({ auth, professors }) {
    const columns = [
        {
            header: 'Name',
            accessor: (professor) => (
                <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold">
                            {professor.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">{professor.name}</div>
                        <div className="text-gray-500 text-sm">{professor.email}</div>
                    </div>
                </div>
            ),
        },
        {
            header: 'Professor Type',
            accessor: (professor) => (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    professor.professor_type === 'permanent' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                }`}>
                    {professor.professor_type || 'Not set'}
                </span>
            ),
        },
        {
            header: 'Modules',
            accessor: (professor) => (
                <div className="text-center">
                    <span className="bg-indigo-50 text-indigo-600 py-1 px-3 rounded-full text-sm font-medium">
                        {professor.modules?.length || 0}
                    </span>
                </div>
            ),
        },
        {
            header: 'Diary Entries',
            accessor: (professor) => (
                <div className="text-center">
                    <span className="bg-purple-50 text-purple-600 py-1 px-3 rounded-full text-sm font-medium">
                        {professor.diary_entries?.length || 0}
                    </span>
                </div>
            ),
        },
    ];

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this professor?')) {
            router.delete(`/professors/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                        Professors Management
                    </h2>
                    {auth.user.role === 'admin' && (
                        <Link
                            href="/professors/create"
                            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Professor
                        </Link>
                    )}
                </div>
            }
        >
            <Head title="Professors" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <DataTable
                        columns={columns}
                        data={professors}
                        onDelete={auth.user.role === 'admin' ? handleDelete : null}
                        actions={auth.user.role === 'admin'}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
