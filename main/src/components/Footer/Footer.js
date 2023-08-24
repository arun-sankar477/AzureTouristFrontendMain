import styles from '../Footer/FooterStyles.css'
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Tourist Management ${year}`}</footer>;
  };
  
  export default Footer;