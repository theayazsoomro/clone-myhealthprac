import Button from "../common/Button";

export default function CTASection() {
  return (
    <div className="flex flex-col justify-center items-start gap-6 p-8 h-screen bg-[url(/images/cta_photo.jpeg)] bg-cover text-white">
      <h1 className="text-6xl w-6/12">
        Backed by Data. Built for Complexity. Designed for You.
      </h1>
      <p>
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
