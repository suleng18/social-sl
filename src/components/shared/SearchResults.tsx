import { Models } from 'appwrite';
import React from 'react';
import Loader from './Loader';
import GridPostList from '@/_root/pages/GridPostList';
type SearchResultsProps = {
  searchedPosts: Models.Document[];
  isSearchFetching: boolean;
};

const SearchResults = ({ searchedPosts, isSearchFetching }: SearchResultsProps) => {
  console.log('🚀 - searchedPosts:', searchedPosts);
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return <p className="w-full mt-10 text-center text-light-4">No results found</p>;
};

export default SearchResults;
