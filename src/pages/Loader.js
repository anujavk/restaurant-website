import logo from '../assets/loader.gif';

const Loader = () => {
    return (
        <section style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <img src={logo} alt="Loading..." />
        </section>
    );
};

export default Loader;
