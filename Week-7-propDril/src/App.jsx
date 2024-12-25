import { useContext } from "react";
import { LevelContext } from "./context";

// import { CountContext } from "./context";

// -------------------- prop drilling starts here ---------------------

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   );
// };

// export default App;

// // eslint-disable-next-line react/prop-types
// const Count = ({ count, setCount }) => {
//   return (
//     <>
//       {" "}
//       <div>{count}</div>
//       <Buttons setCount={setCount} count={count} />
//     </>
//   );
// };

// // eslint-disable-next-line react/prop-types
// const Buttons = ({ count, setCount }) => {
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//       <button onClick={() => setCount(count - 1)}>Dec</button>
//     </div>
//   );
// };

// -------------------- prop drilling ends ------------------------------------

// -------------------- Context Api Example no 1 Start ---------------------------

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       <div>
//         <CountRenderer />
//       </div>
//     </CountContext.Provider>
//   );
// };

// export default App;

// const CountRenderer = () => {
//   const { count } = useContext(CountContext);
//   return (
//     <>
//       <div>{count}</div>
//       <Buttons />
//     </>
//   );
// };

// const Buttons = () => {
//   const { count, setCount } = useContext(CountContext);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//       <button onClick={() => setCount(count - 1)}>Dec</button>
//     </div>
//   );
// };

// -------------------- Context Api Example no 1 end  ---------------------------

// -------------------- Context Api Example no 2 Starts ----------------------------

const App = () => {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default App;

// eslint-disable-next-line react/prop-types
const Section = ({ children }) => {
  const level = useContext(LevelContext);
  console.log("parent level", level);
  return (
    <LevelContext.Provider value={level + 1}>
      <div>{children}</div>
    </LevelContext.Provider>
  );
};

// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => {
  const level = useContext(LevelContext);
  console.log("child level", level);
  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
};

// -------------------- Context Api Example no 2 ends ----------------------------
