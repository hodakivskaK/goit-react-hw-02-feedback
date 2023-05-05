import PropTypes from 'prop-types';
import FeedbackCss from './feedbackBtn.module.css'

export const FeedbackBtn = ({ options, onLeaveFeedback }) => {
    return < div className={FeedbackCss.feedbackBtnBox}>
        {options.map(option =>  <button
                type="button"
                className={FeedbackCss.feedbackBtn}
                key={option}
                onClick={() => onLeaveFeedback(option)}
            >
                {option.toUpperCase()}
            </button>)}
    </div >
       
}


FeedbackBtn.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback:PropTypes.func.isRequired,
  
}