import React from "react";
import { Button } from "components/atoms/Button/Button";
import useForm from "hooks/useForm";
import { Filters } from "types/Filters";

interface Props {
  setSearchParams: (searchQuery: URLSearchParams) => void;
  filters: Filters;
}

const SearchBar = ({ setSearchParams, filters }: Props) => {
  const initialValues = {
    positionFilter: filters.positionFilter,
    locationFilter: filters.locationFilter,
    contractFilter: filters.contractFilter,
  };
  const {
    formValues: { positionFilter, locationFilter, contractFilter },
    handleInputChange,
    handleToggleCheckbox,
  } = useForm(initialValues);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchQuery = new URLSearchParams();
    if (positionFilter) searchQuery.set("position", positionFilter);
    if (locationFilter) searchQuery.set("location", locationFilter);
    if (contractFilter) searchQuery.set("fullTime", "true");
    setSearchParams(searchQuery);
  };
  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        placeholder="Filter by title"
        type="search"
        value={positionFilter || ""}
        name="positionFilter"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        placeholder="Location"
        type="search"
        value={locationFilter || ""}
        name="locationFilter"
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="contractFilter">
        <input
          type="checkbox"
          name="contractFilter"
          id="contractFilter"
          checked={contractFilter!}
          onChange={(e) => handleToggleCheckbox(e)}
        />
        Full Time Only
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
