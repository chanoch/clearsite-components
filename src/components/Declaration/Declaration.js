import React from 'react';

/**
 * A block containing a title and text
 * 
 * Styles:
 *   As defined below plus it is assumed that 'block' is defined at global level
 * 
 * The resultant component will output:
 * 
 * <div class="block">
 *  <div class="declaration__container">
 *    <h2>{title}</h2>
 *    <p class="declaration__text">{text}</p>
 *    <div>
 *    if(bg) {
 *      <div class="declaration__bg_highlight"/>
 *    } else {
 *      <div class="declaration__bg_standard"/>
 *    }
 *  </div>
 * </div>
 * 
 * @prop {string} title - the block heading
 * @prop {string} text - a paragraph of text
 * @prop {boolean} bg - whether to have a background color
 */
export default class Declaration extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, text, bg} = this.props;
        return (
            <div className="block">            
                <div className="declaration__container">
                    <h2>{title}</h2>
                    <p className="declaration__text">{text}</p>
                </div>
                {bg && 
                    <div className="declaration__bg_highlight"></div>
                }{!bg && 
                    <div className="declaration__bg_standard"></div>
                }
            </div>
        )
    }
}