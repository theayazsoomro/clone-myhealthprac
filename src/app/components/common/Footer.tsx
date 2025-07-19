export default function Footer() {
  return (
    <footer className="bg-black px-8 text-white">
      {/* Footer Content */}
      <div className="flex grow-1 pt-18 pb-48">
        <h3 className="text-xl ">MyHealthPrac</h3>
        <div className="grow-2 ps-12">
          <h4>Be the first to know</h4>
          <p className="text-sm text-gray-400 mb-4">We&apos;ll send you only what matters — no noise, no spam.</p>
          <form action="#" className="">
            <input type="email" name="email" id="email" placeholder="Enter e-mail address" className="border-1 border-gray-400 rounded-full px-5 py-2 w-[280px] me-3" />
            <input type="submit" value="Ok" className="border-1 border-white rounded-full px-3 py-2" />
          </form>
        </div>
        <div className="grow-2">
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Information</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">What&apos;s included</a></li>
              <li><a href="#" className="hover:text-gray-400">Health conditions</a></li>
              <li><a href="#" className="hover:text-gray-400">For you</a></li>
              <li><a href="#" className="hover:text-gray-400">For professionals</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>
          <div className="mt-12">
            <h3 className="text-sm text-gray-400 mb-2">Contact</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">info@myhealthprac.com</a></li>
            </ul>
          </div>
        </div>
        <div className="grow-1">
          <h3 className="text-sm text-gray-400 mb-2">Social Media</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Content Area */}
      <div className="flex justify-between py-5 border-t-1 border-dashed border-gray-400">
        <h3 className="text-sm text-gray-400">© 2025. MyHealthPrac. All Rights Reserved.</h3>
        <ul className="text-sm flex gap-3">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
        <h3 className="text-sm text-gray-400">Website by <a href="http://ayazsoomro.netlify.app" target="_blank" className="underline text-white">Mohammad Ayaz</a></h3>
      </div>
    </footer>
  )
}
