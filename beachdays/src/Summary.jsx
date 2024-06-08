export default function Summary({ fromJune, fromJuly, FromAugust }) {
  return (
    <>
      <div>
        <p>Summary : {fromJuly + fromJune + FromAugust}</p>
      </div>
    </>
  );
}
