import { HighlightJS } from "@/components";

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

  return (
    <div>
      <HighlightJS>
        {`function transform(users?: BackendUser[]): FrontendUser[] {
  return (users?.filter((item) => !item.disabled) || []).map(
    ({ id, name }) => ({
      value: id,
      label: name,
    })
  );
}`}
      </HighlightJS>
    </div>
  );
}
