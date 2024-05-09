import { HighlightJS } from "@/components";
import { useMemo } from "react";

// 后端⽤户模型 1
type BackendUser = {
  // ⽤户 id 3
  id: number;
  // ⽤户 name
  name: string;
  // ⽤户是否禁⽤：true 禁⽤，false 启⽤
  disabled: boolean;
};

// 前端⽤户模型 11
type FrontendUser = {
  value: number;
  label: string;
};

function transform(users?: BackendUser[]): FrontendUser[] {
  return (users?.filter((item) => !item.disabled) || []).map(
    ({ id, name }) => ({
      value: id,
      label: name,
    })
  );
}

export default function HomePage() {
  // 将后端⽤户列表转换成前端⽤户列表，只保留启⽤（disabled = false）的⽤户 17
  function transform(users?: BackendUser[]): FrontendUser[] {
    return (users?.filter((item) => !item.disabled) || []).map(
      ({ id, name }) => ({
        value: id,
        label: name,
      })
    );
  }

  const inputData = [
    { id: 1, name: "jack", disabled: false },
    { id: 2, name: "admin", disabled: true },
  ];

  const resultData = useMemo(() => {
    const result = transform(inputData);
    console.log("resultData: ", result);
    return result;
  }, [inputData]);

  return (
    <div>
      <HighlightJS>{`// 将后端⽤户列表转换成前端⽤户列表，只保留启⽤（disabled = false）的⽤户 17
  function transform(users?: BackendUser[]): FrontendUser[] {
    return (users?.filter((item) => !item.disabled) || []).map(
      ({ id, name }) => ({
        value: id,
        label: name,
      })
    );
  }

  const inputData = [
    { id: 1, name: "jack", disabled: false },
    { id: 2, name: "admin", disabled: true },
  ];

  const resultData = transform(inputData);

  console.log("resultData: ", resultData);`}</HighlightJS>
    </div>
  );
}
