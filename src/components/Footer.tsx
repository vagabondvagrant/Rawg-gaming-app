
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Email: example@email.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-300 hover:text-blue-400">Facebook</a>
            <a href="#" className="text-blue-300 hover:text-blue-400">Twitter</a>
            <a href="#" className="text-blue-300 hover:text-blue-400">Instagram</a>
          </div> 
        </div>

        <div>
          <p className="">&copy; {new Date().getFullYear()} React Gaming Website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
