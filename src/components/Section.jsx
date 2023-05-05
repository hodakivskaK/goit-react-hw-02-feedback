import PropTypes from 'prop-types';
import sectionCss from './section.module.css'


export const Section = ({ title, children }) => {

    return <div className={sectionCss.feedbackSection}>
        <h1>{title}</h1>
        {children}
</div>
}     


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}