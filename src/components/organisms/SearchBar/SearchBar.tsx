import React from "react";
import { Button } from "components/atoms/Button/Button";
import useForm from "hooks/useForm";
import { Filters } from "types/Filters";
import useMediaQuery from "hooks/useMediaQuery";
import Modal from "../Modal/Modal";
import {
  SearchBarWrapper,
  StyledSearchIcon,
  SearchButton,
  ModalForm,
  SearchBarInput,
  ModalInput,
  FilterButton,
  StyledFilterIcon,
} from "./SearchBar.styles";
import Checkbox from "components/molecules/Checkbox/Checkbox";
import { ReactComponent as LocationIcon } from "assets/images/desktop/icon-location.svg";

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

  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1210px)");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <SearchBarWrapper as="form" role="search" onSubmit={handleSubmit}>
      <SearchBarInput
        icon={<StyledSearchIcon $isAccented $isBig />}
        id="title"
        placeholder="Filter by title..."
        type="search"
        value={positionFilter || ""}
        name="positionFilter"
        onChange={(e) => handleInputChange(e)}
      />

      {isTablet ? (
        <>
          <SearchBarInput
            icon={<LocationIcon />}
            placeholder="Filter by location..."
            type="search"
            value={locationFilter || ""}
            name="locationFilter"
            onChange={(e) => handleInputChange(e)}
          />

          <Checkbox
            label={isDesktop ? "Full Time Only" : "Full Time"}
            name="contractFilter"
            id="contractFilter"
            value="fullTime"
            isChecked={contractFilter!}
            onChange={(e) => handleToggleCheckbox(e)}
          />
        </>
      ) : (
        <>
          <FilterButton
            type="button"
            aria-label="More filters..."
            onClick={openModal}
          >
            <StyledFilterIcon />
          </FilterButton>
          <Modal closeModal={closeModal} isOpen={modalIsOpen}>
            <ModalForm>
              <ModalInput
                icon={<LocationIcon />}
                placeholder="Filter by location..."
                type="search"
                value={locationFilter || ""}
                name="locationFilter"
                onChange={(e) => handleInputChange(e)}
              />
              <Checkbox
                label="Full Time Only"
                name="contractFilter"
                id="contractFilter"
                value="fullTime"
                isChecked={contractFilter}
                onChange={(e) => handleToggleCheckbox(e)}
              />
              <Button onClick={handleSubmit} type="submit">
                Search
              </Button>
            </ModalForm>
          </Modal>
        </>
      )}

      <SearchButton type="submit">
        {isTablet ? "Search" : <StyledSearchIcon aria-label="Search" />}
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
