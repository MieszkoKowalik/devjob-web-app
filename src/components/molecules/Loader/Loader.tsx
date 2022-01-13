import { LoaderWrapper } from "./Loader.styles";

interface Props {
  className?: string;
}

const Loader = ({ className }: Props) => {
  return (
    <LoaderWrapper className={className} aria-label="Loading">
      <span></span> <span></span> <span></span>
    </LoaderWrapper>
  );
};

export default Loader;
