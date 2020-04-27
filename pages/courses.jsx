import stylesheet from 'styles/main.scss'


class Courses extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }



    render() {

        return (


            <div className="main">

                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <h2 className="major">Work</h2>
                <p>Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. vel sed vehicula.</p>

                <div id="bg" />
            </div>






        )
    }
}

export default Courses
