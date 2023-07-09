import { StyledContainer } from './StyledContainer';
import PropTypes from 'prop-types';

function Container({ children, ...restProps }) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
}

Container.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.element.isRequired
    ).isRequired
};

export default Container;
