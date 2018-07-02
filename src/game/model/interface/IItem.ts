export default interface IItem {
  getName(): string;
  getStrength(): number;
  setId(id: number): void;
  getId(): number;
}
