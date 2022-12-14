export type Replace<T, R> = Omit<T, keyof R> & R;

// Substitui a tipagem original T (props) pela tipagem que queremos substituir, R
