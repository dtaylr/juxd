import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom';
// import PropTypes from 'prop-types'

const ScrollToTop = () => {

const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// ScrollToTop.propTypes = {

// }

export default ScrollToTop
