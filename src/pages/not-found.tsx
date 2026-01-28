import { Link } from "react-router";

const styles = {
    container: {
        textAlign: 'center' as const,
        padding: '80px 20px',
        color: '#fff'
    },
    title: {
        fontSize: '72px',
        marginBottom: '20px'
    },
    message: {
        fontSize: '18px',
        marginBottom: '20px'
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold'
    }
}

const NotFoundPage = () => {
    return ( 
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Page Not Found</p>
            <Link to="/" style={styles.link}>← Go Back Home</Link>
        </div>
    );
}

export default NotFoundPage;