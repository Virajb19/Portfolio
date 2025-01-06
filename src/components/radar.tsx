export default function Radar() {
  return <div className="size-4 relative rounded-full">
        <span className="absolute -inset-[3px] bg-orange-600 rounded-full animate-ping opacity-80"/>
        <span className="absolute inset-0 rounded-full bg-orange-600"/>
  </div>
}