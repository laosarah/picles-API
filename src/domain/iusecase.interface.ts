export interface IUseCase<Input, Output> {
  run(input: Input): Promise<Output>
}
// <> cria um tipo genérico