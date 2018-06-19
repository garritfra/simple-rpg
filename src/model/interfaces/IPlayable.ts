import Enemy from "../Enemy";

export default interface IPlayable {
  travel(): Enemy;
}
