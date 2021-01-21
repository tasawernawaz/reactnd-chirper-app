import React from 'react'
import { handleAddTweet } from '../actions/tweets'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class NewTweet extends React.Component {
    state = {
        text: "",
        redirect: false
    }

    handleChange = (e) => {
        const text = e.target.value
        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, id: replyingTo } = this.props
        const text = this.state.text
        dispatch(handleAddTweet(text, replyingTo))
        this.setState(() => ({
            text: "",
            redirect: replyingTo ? false : true
        }))
    }


    render() {

        if (this.state.redirect === true) {
            return (<Redirect to="/" />)
       }

        let tweetLeft = 280 - this.state.text.length
        return (
            <div>
                <h3 className="center">Compose new Tweet</h3>
                    <form className="new-tweet" onSubmit={this.handleSubmit}>
                        <textarea
                        className="textarea"
                        placeholder="Whats happening?"
                        value={this.state.text}
                        maxLength={288}
                        onChange={this.handleChange}
                        >
                        </textarea>
                        {tweetLeft <= 100 && (<div className="tweet-left">{tweetLeft}</div>)}
                        <button
                         className="btn"
                         disabled={this.state.text === "" && "disabled"}
                         >Submit</button>
                    </form>

            </div>
        )
    }

}


export default connect()(NewTweet)