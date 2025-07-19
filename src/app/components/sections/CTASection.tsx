import Button from "../common/Button";

export default function CTASection() {
  return (
    <div className="flex flex-col justify-center items-start gap-6 px-4 md:px-8 py-12 h-screen bg-[url(/images/cta_photo.jpeg)] bg-cover bg-center text-white">
      <h1 className="text-3xl sm:text-4xl md:text-6xl w-full md:w-6/12 leading-tight">
        Backed by Data. Built for Complexity. Designed for You.
      </h1>

      <p className="text-base sm:text-lg md:text-xl w-full md:w-7/12">
        Join the waitlist for early access, founding member benefits, and
        exclusive launch offers.
      </p>

      <Button
        text="Join Waitlist"
        imgSrc={"arrow-white.svg"}
        bgColor={"bg-white"}
        textColor={"text-black"}
        bgImg={"bg-black"}
      />
    </div>
  );
}
