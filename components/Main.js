import PropTypes from 'prop-types';
import Form from './Form'
import Intro from './Intro'
import About from './About'

class Main extends React.Component {

  
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>





    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}>
          {close}

          <Intro />
        </article>


      <article id="about" 
        className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} 
        style={{ display: 'none' }}>
        {close}

        <About />
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Register</h2>

          <Form />
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main