import { Button } from "antd";
import { useCount } from "@/hooks";

const Test2Page = () => {
  const { count, increase } = useCount();

  return (
    <div className="flex gap-4 items-center">
      <span>{count}</span>
      <Button onClick={increase}> +1 </Button>
    </div>
  );
};

export default Test2Page;
