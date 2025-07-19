export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 md:px-8 py-12">
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* Logo */}
        <div className="flex-1">
          <h3 className="text-xl mb-4">MyHealthPrac</h3>
        </div>

        {/* Newsletter */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold">Be the first to know</h4>
          <p className="text-sm text-gray-400 mb-4">
            We&apos;ll send you only what matters — no noise, no spam.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="Enter e-mail address"
              className="border border-gray-400 rounded-full px-5 py-2 w-full sm:w-[280px]"
            />
            <input
              type="submit"
              value="Ok"
              className="border border-white rounded-full px-5 py-2 w-full sm:w-auto cursor-pointer"
            />
          </form>
        </div>

        {/* Info Links */}
        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-sm text-gray-400 mb-2">Information</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400">What&apos;s included</a></li>
              <li><a href="#" className="hover:text-gray-400">Health conditions</a></li>
              <li><a href="#" className="hover:text-gray-400">For you</a></li>
              <li><a href="#" className="hover:text-gray-400">For professionals</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Contact</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">info@myhealthprac.com</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-sm text-gray-400 mb-2">Social Media</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-dashed border-gray-400 pt-6 gap-4 text-center md:text-left">
        <h3 className="text-sm text-gray-400">
          © 2025. MyHealthPrac. All Rights Reserved.
        </h3>
        <ul className="text-sm flex gap-4">
          <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
        </ul>
        <h3 className="text-sm text-gray-400">
          Website by{" "}
          <a
            href="http://ayazsoomro.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white"
          >
            Mohammad Ayaz
          </a>
        </h3>
      </div>
    </footer>
  );
}
