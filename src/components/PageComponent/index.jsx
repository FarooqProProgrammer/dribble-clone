import React from 'react'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';


const PageComponent = ({ title, description }) => {
    const breadcrumbs = useReactRouterBreadcrumbs();

    return (
        <div className="mb-12">
            

            {/* Title and Description */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    {description}
                </p>
            </div>


            {/* Breadcrumbs */}
            <nav className="flex justify-center mt-3" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <li key={breadcrumb.key} className="inline-flex items-center">
                            {index !== 0 && (
                                <BiChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                            )}
                            <Link
                                to={breadcrumb.match.pathname}
                                className={`inline-flex items-center text-sm font-medium 
                                    ${index === breadcrumbs.length - 1
                                        ? 'text-gray-500 cursor-default'
                                        : 'text-[#EA4C89] hover:text-pink-600'
                                    }`}
                            >
                                {breadcrumb.match.pathname === '/' ? 'Home' : breadcrumb.breadcrumb}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>

            
        </div>
    )
}

export default PageComponent
