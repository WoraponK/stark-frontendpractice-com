import React from 'react'
import Link from 'next/link';

// Icons
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";


const SearchLibrary = () => {
  return (
    <div className='search-library'>
      <h2 className='search-library-title'>Search Library</h2>
      <label htmlFor="searching" className='search'>
        <span><FaSearch /></span>
        <input type="text" name="searching" id="searching" />
      </label>
      <ul className='search-library__nav nav-y-lg'>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/collections'}><li>Collections</li></Link>
        <li>Categories<span><FaAngleDown /></span></li>
      </ul>
      <div className="search-library__contribute-box">
        <h3 className='search-library__contribute-box-title'>Contribute to Stark</h3>
        <p className='search-library__contribute-box-para'>Got any accessibility resources of news?</p>
        <button className='search-library__contribute-box-button btn btn-primary uppercase'>Submit a Resource</button>
      </div>
    </div>
  )
}

export default SearchLibrary