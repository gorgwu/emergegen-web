import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
    <a href="/" className="site-title">
        <img src="/favicon.ico" alt="Logo" style={{ width: '4rem', height: '4rem' }} />
    </a>

        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/placements">Placements</CustomLink>
            <CustomLink to="/people">People</CustomLink>
            <CustomLink to="/about">About Us</CustomLink>
            <CustomLink to="/contact" id="contact">Contact Us</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, className, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} className={className} {...props}>
                {children}
            </Link>
        </li>
    );
}