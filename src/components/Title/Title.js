import style from './Title.module.css'

export function Title({ children }) {
  return (
    <h1>
      {children}
    </h1>
  );
}