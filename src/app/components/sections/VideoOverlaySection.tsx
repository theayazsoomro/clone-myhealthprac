import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"

export default function VideoOverlaySection() {
  return (
    <div className="bg-gray-200 w-full relative h-full overflow-hidden rounded-xl p-8">
        {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-2xl"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

        {/* Content */}
        <div className="relative z-10">
            <h2 className="text-7xl text-white w-8/12 pt-8 mb-28">The most powerful health platform ever built, designed to evolve with you</h2>
            <div className="flex content-center py-8 text-white border-gray-300 border-t-1 border-dashed">
                <div className="icon flex-1/5 self-center">
                    <FontAwesomeIcon icon={faBolt} size="lg" className="p-6 border-1 border-gray-300 rounded-full" />
                </div>
                <h3 className="self-center flex-2/5 text-2xl font-bold">Within Minutes</h3>
                <div className="flex-3/5">
                    <h3 className="text-2xl font-bold mb-3">Get started. See deeper.</h3>
                    <ul className="list-disc">
                        <li>Upload labs instantly</li>
                        <li>Get a full health index</li>
                        <li>Start your personal plan</li>
                    </ul>
                </div>
            </div>
            <div className="flex content-center py-8 text-white border-gray-300 border-t-1 border-dashed">
                <div className="icon flex-1/5 self-center">
                    <FontAwesomeIcon icon={faBolt} size="lg" className="p-6 border-1 border-gray-300 rounded-full" />
                </div>
                <h3 className="self-center flex-2/5 text-2xl font-bold">Within Minutes</h3>
                <div className="flex-3/5">
                    <h3 className="text-2xl font-bold mb-3">Get started. See deeper.</h3>
                    <ul className="list-disc">
                        <li>Upload labs instantly</li>
                        <li>Get a full health index</li>
                        <li>Start your personal plan</li>
                    </ul>
                </div>
            </div>
            <div className="flex content-center py-8 text-white border-gray-300 border-t-1 border-dashed">
                <div className="icon flex-1/5 self-center">
                    <FontAwesomeIcon icon={faBolt} size="lg" className="p-6 border-1 border-gray-300 rounded-full" />
                </div>
                <h3 className="self-center flex-2/5 text-2xl font-bold">Within Minutes</h3>
                <div className="flex-3/5">
                    <h3 className="text-2xl font-bold mb-3">Get started. See deeper.</h3>
                    <ul className="list-disc">
                        <li>Upload labs instantly</li>
                        <li>Get a full health index</li>
                        <li>Start your personal plan</li>
                    </ul>
                </div>
            </div>
            <div className="flex content-center py-16 text-white border-gray-300 border-t-1 border-dashed">
                
            </div>
        </div>
    </div>
  )
}
