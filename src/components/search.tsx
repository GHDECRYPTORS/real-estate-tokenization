import { useContext, useState } from "react";

import { ChainContext } from "../chain.resolver";
import ProductCard from "./productCard";

interface SearchProps {
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}
const Search: React.FC<SearchProps> = ({ showSearch, setShowSearch }) => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const context = useContext(ChainContext);
  const filter = (str: string) => {
    if (str) {
      context.searchCollections(str).then((res) => {
        setCollections(
          res.map((x) => ({
            ...x,
            tokenURI: ipfsTohttp(x.tokenURI as string),
          }))
        );
        setLoading(false);
      });
    }
  };
  return (
    <div
      className={`offcanvas offcanvas-end ${showSearch ? "show" : ""}`}
      tabIndex={-1}
      id='header_search_bar'
      aria-labelledby='header_search_barLabel'>
      <div className='offcanvas-header border-bottom border-gray-300'>
        <h5 className='offcanvas-title' id='header_search_barLabel'>
          Search
        </h5>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
          onClick={() => setShowSearch(false)}></button>
      </div>
      <div className='offcanvas-body'>
        <form className='h-search-form d-flex w-100 border border-gray-300 p-1 rounded-3'>
          <input
            type='text'
            placeholder='Search Here'
            className='border-0 rounded-0 shadow-none form-control form-control-sm flex-full'
            onInput={(e) => setSearchValue(e.target.value)}
          />
          <button
            className='btn icon-md btn-border-mode p-0 search-btn rounded-3'
            type='button'
            onClick={() => filter(searchValue)}>
            <i className='bi bi-search'></i>
          </button>
        </form>
        <div className='pt-4'>
          <h6 className='mb-3 text-uppercase fs-sm fw-500'>Latest Search</h6>
        </div>
        <div className='pt-4'>
          <div className='swiper-hover-arrow position-relative'>
            {collections.map((x: any) => (
              <div className='' key={x.address}>
                <ProductCard product={x} />
              </div>
            ))}
            <div className='swiper-pagination mt-4  position-relative bottom-0'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
