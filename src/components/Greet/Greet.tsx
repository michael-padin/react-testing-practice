import { GreetProps } from './Greet.types';

const Greet = ({ name }: GreetProps) => {
  return (
    <div>Greet {name ? name: ''}</div>
  );
};

export default Greet;
