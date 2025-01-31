import PropTypes from 'prop-types'

export const FirstApp = ({ title = 'No hay titulo', subTitle = 'No hay subtitulo', name = 'Juan Bermúdez' }) => {    
    return (
        <>
            <h1 data-testid="test-title"> { title } </h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle }</p>            
            <p>{ subTitle }</p>            
            <p>{ name }</p>            
        </>        
    )
}

FirstApp.propTypes = { 
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}