const Footer = () => {
  return (
    <div className="flex justify-evenly bg-black text-white mt-20 py-10 leading-10">
      <div>
        <h3 className="font-bold">🍔Namaste Food</h3>
        <span>&#169;2024 Susmit Das</span>
      </div>
      <div>
        <h4 className="font-bold underline">Comapny</h4>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Team</li>
        </ul>
      </div>
      <div>
        <div>
          <h4 className="font-bold underline">Contact Us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold underline">Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="font-bold underline">We deliver to:</h4>
        <ul>
          <li>Kolkata</li>
          <li>Bangalore</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Chennai</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
