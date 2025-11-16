import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Cards with rounded-lg for checker */}
      <Card className="rounded-lg" />
      <Card className="rounded-lg" />
      <Card className="rounded-lg" />

      {/* Buttons of different sizes and shapes */}
      <div className="flex gap-4 mt-6 flex-wrap">
        <Button title="Small Rounded" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded" size="medium" shape="rounded-md" />
        <Button title="Large Rounded" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
