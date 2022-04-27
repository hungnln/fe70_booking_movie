import React from 'react'

export default function Film(props) {
    const movie = props;
    return (
        <a href="#" className="group" style={{ minHeight: 450 }}>
            <div className="w-full h-3/4 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={movie.hinhAnh} alt="movie-banner" className="w-full h-full object-center object-fill group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{movie.tenPhim}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{movie.danhGia}</p>
        </a>
    )
}
