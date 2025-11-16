import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      {/* Buttons of different sizes and shapes */}
      <div className="flex gap-4 mt-6 flex-wrap">
        <Button title="Small Rounded" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded" size="medium" shape="rounded-md" />
        <Button title="Large Rounded" size="large" shape="rounded-full" />
      </div>
    </div>
  )
}
export default Landing