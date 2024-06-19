export function Bill({ bill, setBill }) {
  return (
    <p>
      How much was the bill?
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="text"
      ></input>
    </p>
  );
}
