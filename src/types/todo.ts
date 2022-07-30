// 取得するデータ型を予め宣言しておく
// c#の構造体のような仕組み
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
