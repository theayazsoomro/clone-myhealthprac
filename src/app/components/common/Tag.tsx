interface Message {
    innerText: string
}
export default function Tag({innerText = "testing"}: Message) {
  return <div className="text-black bg-white px-4 py-2 w-fit rounded-full">{innerText}</div>;
}
