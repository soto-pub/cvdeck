import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Link to={`/conversationdeck`}>ホーム画面へ</Link>
    </div>
  );
};
