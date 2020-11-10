import React, { Component } from 'react';
import axios from 'axios';

class Rating extends Component {

    countUp = (item) => {
        var trykketUp = window.localStorage.getItem("+" + item.id) || false;
        var trykketDown = window.localStorage.getItem("-" + item.id) || false;

        if (!trykketUp && !trykketDown) {
            item.rating++;
            window.localStorage.setItem("+" + item.id, true);
            window.localStorage.removeItem("-" + item.id);
            this.endreCount(item);
        }

        if (!trykketUp && trykketDown) {
            item.rating += 2;
            window.localStorage.setItem("+" + item.id, true);
            window.localStorage.removeItem("-" + item.id);
            this.endreCount(item);
        }
    };

    countDown = (item) => {
        var trykketUp = window.localStorage.getItem("+" + item.id) || false;
        var trykketDown = window.localStorage.getItem("-" + item.id) || false;

        if (!trykketUp && !trykketDown) {
            item.rating--;
            window.localStorage.setItem("-" + item.id, true);
            window.localStorage.removeItem("+" + item.id);
            this.endreCount(item);
        }

        if (trykketUp && !trykketDown) {
            item.rating -= 2;
            window.localStorage.setItem("-" + item.id, true);
            window.localStorage.removeItem("+" + item.id);
            this.endreCount(item);
        }
    };

    endreCount = (item) => {
        this.setState({ count: item.rating });
        const faq = {
            id: item.id,
            spørsmål: item.spørsmål,
            svar: item.svar,
            rating: item.rating
        }
        axios.post('https://localhost:44335/FAQ/EndreFAQ', faq);
    };

    render() {
        return (
            <div className="ratingArrows">
                <div><img src="./bilder/arrow_up.png" alt="pil_opp" style={{ opacity: this.getOpacity("+"+this.props.item.id), cursor: this.getCursor("+"+this.props.item.id) }} onClick={() => this.countUp(this.props.item)} /></div>
                <div><span style={{ opacity: this.getOpacity(this.props.item.id), cursor: "default" }}>{this.props.item.rating}</span></div>
                <div><img src="./bilder/arrow_down.png" alt="pil_ned" style={{ opacity: this.getOpacity("-"+this.props.item.id), cursor: this.getCursor("-"+this.props.item.id) }} onClick={() => this.countDown(this.props.item)} /></div>
            </div>
        );
    }

    getCursor(id) {
        return window.localStorage.getItem(id) === null ? "pointer" : "default";
    }

    getOpacity(id) {
        return window.localStorage.getItem(id) === null ? 1 : 0.5;
    }
}

export default Rating;