import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/PageHeader.module.sass'

const PageHeader = ({ title, body, image }) => (
    <div
        className={styles.image + " margin-top-0"}
        style={{
            backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
        }}
    >
        <div
            className={styles.container}
        >
            <h1
                className={styles.title + " has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"}
            >
                {title}
            </h1>
            <h3
                className={styles.body + " has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"}
            >
                {body}
            </h3>
        </div>
    </div>
)

PageHeader.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}

export default PageHeader