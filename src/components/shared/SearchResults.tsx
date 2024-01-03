import GridPostList from '@/_root/pages/GridPostList';
// import { Models } from 'appwrite';
import Loader from './Loader';

type SearchResultsProps = {
  searchedPosts: any;
  isSearchFetching: boolean;
};

const SearchResults = ({ searchedPosts, isSearchFetching }: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return <p className="w-full mt-10 text-center text-light-4">No results found</p>;
};

export default SearchResults;
