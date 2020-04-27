import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMoon from '@fortawesome/fontawesome-free-regular/faMoon'
import Link from 'next/link';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faMoon} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Aljazari</h1>
                <p>Helping students of knowledge get an adequate understanding of Tajweed with Qualified teachers from across the globe</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><Link href='/courses'><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Courses</a></Link></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Register</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
